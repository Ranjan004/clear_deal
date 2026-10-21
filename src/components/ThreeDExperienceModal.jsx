import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { X, Sun, Moon, RotateCcw, Layers, Info, Check, ArrowRight } from 'lucide-react';

export default function ThreeDExperienceModal({ isOpen, onClose, lang, onOpenInquiry }) {
  const mountRef = useRef(null);
  const [selectedFloor, setSelectedFloor] = useState(3);
  const [isNightMode, setIsNightMode] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isOpen || !mountRef.current) return;

    // --- THREE.JS SCENE SETUP ---
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(isNightMode ? 0x0f150e : 0xf4f0db);
    scene.fog = new THREE.FogExp2(isNightMode ? 0x0f150e : 0xf4f0db, 0.015);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(30, 22, 35);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    mountRef.current.appendChild(renderer.domElement);

    // --- LIGHTING ---
    const ambientLight = new THREE.AmbientLight(
      isNightMode ? 0x1f261e : 0xfffaed,
      isNightMode ? 0.8 : 1.4
    );
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(
      isNightMode ? 0x6e8898 : 0xffe8c2,
      isNightMode ? 1.0 : 2.5
    );
    sunLight.position.set(35, 45, 25);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;
    scene.add(sunLight);

    const hemiLight = new THREE.HemisphereLight(
      isNightMode ? 0x223322 : 0xfdfbef,
      isNightMode ? 0x050805 : 0xccbf99,
      0.6
    );
    scene.add(hemiLight);

    // --- PROCEDURAL ARCHITECTURAL COMPLEX (ClearDeal Property Model) ---
    const buildingGroup = new THREE.Group();

    // Materials
    const concreteMat = new THREE.MeshStandardMaterial({
      color: 0xdedede,
      roughness: 0.85,
    });
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: isNightMode ? 0xffeaad : 0x8ab6d2,
      transmission: 0.6,
      opacity: 0.85,
      transparent: true,
      roughness: 0.1,
      metalness: 0.1,
      emissive: isNightMode ? 0xffb703 : 0x000000,
      emissiveIntensity: isNightMode ? 0.35 : 0,
    });
    const copperMullionMat = new THREE.MeshStandardMaterial({
      color: 0xccbf99,
      roughness: 0.3,
      metalness: 0.8,
    });
    const forestWoodMat = new THREE.MeshStandardMaterial({
      color: 0x2f3a26,
      roughness: 0.6,
    });
    const highlightMat = new THREE.MeshStandardMaterial({
      color: 0xf99c00,
      emissive: 0xf99c00,
      emissiveIntensity: 0.5,
      roughness: 0.2,
    });

    // Ground & Courtyard Podium
    const groundGeo = new THREE.CylinderGeometry(40, 42, 1, 64);
    const groundMat = new THREE.MeshStandardMaterial({ color: 0x1f261e, roughness: 0.9 });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.position.y = -0.5;
    ground.receiveShadow = true;
    scene.add(ground);

    // Green Courtyard Lawn
    const lawnGeo = new THREE.CylinderGeometry(24, 24, 0.4, 48);
    const lawnMat = new THREE.MeshStandardMaterial({ color: 0x3e562e, roughness: 0.95 });
    const lawn = new THREE.Mesh(lawnGeo, lawnMat);
    lawn.position.y = 0.2;
    lawn.receiveShadow = true;
    scene.add(lawn);

    // Build 8 Floors of the Arbor Building
    const floorMeshes = [];
    const totalFloors = 8;
    const floorHeight = 2.4;
    const baseWidth = 18;
    const baseDepth = 14;

    for (let f = 0; f < totalFloors; f++) {
      const floorObj = new THREE.Group();
      floorObj.position.y = f * floorHeight;

      // Slab
      const slabGeo = new THREE.BoxGeometry(
        baseWidth + Math.sin(f * 0.8) * 1.5,
        0.3,
        baseDepth + Math.cos(f * 0.8) * 1.5
      );
      const slabMesh = new THREE.Mesh(slabGeo, concreteMat);
      slabMesh.castShadow = true;
      slabMesh.receiveShadow = true;
      floorObj.add(slabMesh);

      // Glass core
      const glassGeo = new THREE.BoxGeometry(
        baseWidth * 0.92,
        floorHeight * 0.85,
        baseDepth * 0.92
      );
      const glassMesh = new THREE.Mesh(glassGeo, glassMat);
      glassMesh.position.y = floorHeight * 0.45;
      glassMesh.castShadow = true;
      floorObj.add(glassMesh);

      // Organic Tree-like facade louvers / mullions
      const numLouvers = 12;
      for (let l = 0; l < numLouvers; l++) {
        const angle = (l / numLouvers) * Math.PI * 2;
        const radiusX = (baseWidth * 0.98) / 2;
        const radiusZ = (baseDepth * 0.98) / 2;
        const louverGeo = new THREE.BoxGeometry(0.18, floorHeight, 0.18);
        const louver = new THREE.Mesh(louverGeo, copperMullionMat);
        louver.position.set(
          Math.cos(angle) * radiusX,
          floorHeight * 0.5,
          Math.sin(angle) * radiusZ
        );
        floorObj.add(louver);
      }

      // Balcony Planters (Biophilic green foliage)
      if (f > 1) {
        const planterGeo = new THREE.BoxGeometry(4, 0.6, 1.2);
        const planter = new THREE.Mesh(planterGeo, forestWoodMat);
        planter.position.set(baseWidth * 0.45, floorHeight * 0.3, baseDepth * 0.45);
        floorObj.add(planter);

        const bushGeo = new THREE.SphereGeometry(0.6, 8, 8);
        const bushMat = new THREE.MeshStandardMaterial({ color: 0x2f3a26, roughness: 0.9 });
        for (let b = 0; b < 3; b++) {
          const bush = new THREE.Mesh(bushGeo, bushMat);
          bush.position.set(
            baseWidth * 0.45 + (b - 1) * 1.2,
            floorHeight * 0.7,
            baseDepth * 0.45
          );
          floorObj.add(bush);
        }
      }

      floorObj.userData = { floorNumber: f + 1 };
      buildingGroup.add(floorObj);
      floorMeshes.push(floorObj);
    }

    // Penthouse Rooftop Crown
    const roofCrownGeo = new THREE.CylinderGeometry(7, 9, 1.8, 16);
    const roofCrown = new THREE.Mesh(roofCrownGeo, forestWoodMat);
    roofCrown.position.y = totalFloors * floorHeight + 0.9;
    roofCrown.castShadow = true;
    buildingGroup.add(roofCrown);

    scene.add(buildingGroup);

    // Decorative Surrounding Trees
    for (let t = 0; t < 16; t++) {
      const angle = (t / 16) * Math.PI * 2 + Math.random() * 0.2;
      const dist = 18 + Math.random() * 8;
      const trunkGeo = new THREE.CylinderGeometry(0.2, 0.3, 2, 8);
      const trunkMat = new THREE.MeshStandardMaterial({ color: 0x5c4033 });
      const trunk = new THREE.Mesh(trunkGeo, trunkMat);
      trunk.position.set(Math.cos(angle) * dist, 1, Math.sin(angle) * dist);

      const leavesGeo = new THREE.ConeGeometry(1.6, 3.5, 8);
      const leavesMat = new THREE.MeshStandardMaterial({ color: 0x2e392c, roughness: 0.8 });
      const leaves = new THREE.Mesh(leavesGeo, leavesMat);
      leaves.position.set(Math.cos(angle) * dist, 3, Math.sin(angle) * dist);
      leaves.castShadow = true;

      scene.add(trunk);
      scene.add(leaves);
    }

    setLoading(false);

    // --- ORBIT & INTERACTION CONTROLS ---
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let spherical = {
      radius: 48,
      theta: 0.7,
      phi: 1.1,
    };

    const updateCamera = () => {
      camera.position.x = spherical.radius * Math.sin(spherical.phi) * Math.sin(spherical.theta);
      camera.position.y = spherical.radius * Math.cos(spherical.phi) + 4;
      camera.position.z = spherical.radius * Math.sin(spherical.phi) * Math.cos(spherical.theta);
      camera.lookAt(0, 8, 0);
    };
    updateCamera();

    const dom = renderer.domElement;

    const onMouseDown = (e) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;

      spherical.theta -= deltaX * 0.007;
      spherical.phi = Math.max(0.2, Math.min(Math.PI / 2 - 0.05, spherical.phi - deltaY * 0.007));
      updateCamera();
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const onWheel = (e) => {
      e.preventDefault();
      spherical.radius = Math.max(20, Math.min(80, spherical.radius + e.deltaY * 0.04));
      updateCamera();
    };

    dom.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    dom.addEventListener('wheel', onWheel, { passive: false });

    // Touch support for mobile
    let touchStartDist = 0;
    const onTouchStart = (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        prevMouseX = e.touches[0].clientX;
        prevMouseY = e.touches[0].clientY;
      }
    };
    const onTouchMove = (e) => {
      if (isDragging && e.touches.length === 1) {
        const deltaX = e.touches[0].clientX - prevMouseX;
        const deltaY = e.touches[0].clientY - prevMouseY;
        prevMouseX = e.touches[0].clientX;
        prevMouseY = e.touches[0].clientY;
        spherical.theta -= deltaX * 0.008;
        spherical.phi = Math.max(0.2, Math.min(Math.PI / 2 - 0.05, spherical.phi - deltaY * 0.008));
        updateCamera();
      }
    };
    dom.addEventListener('touchstart', onTouchStart);
    window.addEventListener('touchmove', onTouchMove);
    window.addEventListener('touchend', onMouseUp);

    // Resize Handler
    const handleResize = () => {
      if (!mountRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isDragging) {
        buildingGroup.rotation.y += 0.0015;
      }
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      dom.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      dom.removeEventListener('wheel', onWheel);
      dom.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onMouseUp);
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && dom) {
        mountRef.current.removeChild(dom);
      }
      renderer.dispose();
    };
  }, [isOpen, isNightMode]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl animate-fade-in">
      
      {/* 3D Canvas Viewport */}
      <div ref={mountRef} className="absolute inset-0 cursor-grab active:cursor-grabbing" />

      {/* Top Header Controls */}
      <div className="absolute top-6 left-6 right-6 z-20 flex items-center justify-between pointer-events-none">
        
        {/* Title */}
        <div className="pointer-events-auto bg-[#1f261e]/80 backdrop-blur-md px-5 py-2.5 rounded-full border border-[#ccbf99]/40 flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ccbf99] animate-ping" />
          <span className="font-serif text-sm text-[#fdfbef] tracking-wider uppercase">
            ClearDeal Property 3D Explorer
          </span>
        </div>

        {/* Action Controls */}
        <div className="pointer-events-auto flex items-center gap-3">
          
          {/* Day / Night Toggle */}
          <button
            onClick={() => setIsNightMode(!isNightMode)}
            className="w-10 h-10 rounded-full bg-[#1f261e]/80 backdrop-blur-md border border-white/20 text-[#ccbf99] hover:bg-[#ccbf99] hover:text-[#1f261e] transition-colors flex items-center justify-center cursor-pointer shadow-lg"
            title={isNightMode ? "Switch to Daytime" : "Switch to Night Mode"}
          >
            {isNightMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Close Modal */}
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-[#1f261e]/80 backdrop-blur-md border border-white/20 text-[#fdfbef] hover:bg-red-950/80 hover:text-white transition-colors flex items-center justify-center cursor-pointer shadow-lg"
            aria-label="Close 3D View"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

      </div>

      {/* Floating Floor Selector & Apartment Inspector (Left Side) */}
      <div className="absolute bottom-6 left-6 z-20 max-w-sm w-full bg-[#1f261e]/90 backdrop-blur-md p-6 rounded-3xl border border-[#ccbf99]/30 shadow-2xl text-[#fdfbef] pointer-events-auto">
        
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
          <div>
            <span className="text-[10px] tracking-widest text-[#ccbf99] uppercase font-bold block">
              {"SELECT LEVEL"}
            </span>
            <h4 className="font-serif text-xl font-normal">
              {selectedFloor === 8 
                ? ('Sky Penthouse Level')
                : (lang === 'sr' ? `Sprat ${selectedFloor}` : `Level ${selectedFloor}`)}
            </h4>
          </div>
          <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold">
            {selectedFloor === 8 ? '1 Penthouse' : '6 Units'}
          </span>
        </div>

        {/* Floor Buttons Row */}
        <div className="flex items-center gap-1.5 mb-5 overflow-x-auto pb-1 no-scrollbar">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((fl) => (
            <button
              key={fl}
              onClick={() => setSelectedFloor(fl)}
              className={`w-8 h-8 rounded-full text-xs font-medium shrink-0 transition-all cursor-pointer ${
                selectedFloor === fl
                  ? 'bg-[#ccbf99] text-[#1f261e] font-bold shadow'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {fl === 8 ? 'PH' : `0${fl}`}
            </button>
          ))}
        </div>

        {/* Selected Floor Specs */}
        <div className="space-y-2 text-xs text-[#fdfbef]/80 mb-5 font-sans">
          <div className="flex justify-between">
            <span className="text-[#ccbf99]">{"Available:"}</span>
            <span>{selectedFloor === 8 ? '4.0 Penthouse sa krovnom terasom' : '1.5 do 3.0 sobni stanovi'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#ccbf99]">{"Surface Area:"}</span>
            <span>{selectedFloor === 8 ? '186.0 m²' : '36.5 m² — 82.4 m²'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#ccbf99]">{"Orientation:"}</span>
            <span>{selectedFloor > 4 ? 'Otvoren horizont ka reci' : 'Bulevar i atrijumski park'}</span>
          </div>
        </div>

        {/* Inquire on Floor */}
        <button
          onClick={() => {
            onClose();
            onOpenInquiry();
          }}
          className="btn-gold !w-full !py-2.5 !text-xs flex items-center justify-center gap-2"
        >
          <span>{lang === 'sr' ? `Zatražite ponudu za sprat ${selectedFloor}` : `Inquire for Level ${selectedFloor}`}</span>
          <ArrowRight className="w-4 h-4" />
        </button>

      </div>

      {/* Interactive Helper Legend (Bottom Right) */}
      <div className="hidden sm:flex absolute bottom-6 right-6 z-20 items-center gap-3 bg-[#1f261e]/75 backdrop-blur-md px-4 py-2 rounded-full border border-white/15 text-xs text-[#fdfbef]/80 pointer-events-auto">
        <Info className="w-4 h-4 text-[#ccbf99]" />
        <span>{"Drag to rotate 360° • Scroll to zoom"}</span>
      </div>

    </div>
  );
}
