import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';

// Exact coordinates from original ClearDeal Property reference (1344 x 756 aspect ratio)
// Adjusted map coordinates for Golden Luxury Homes & surrounding Ghaziabad NCR landmarks
const PIN_PERCENTAGES = [
  { left: '44.0%', top: '52.0%' }, // 0: DPSG International School
  { left: '68.0%', top: '34.0%' }, // 1: Eastern Peripheral Expressway
  { left: '76.0%', top: '46.0%' }, // 2: Delhi-Meerut Expressway (NH-09)
  { left: '78.0%', top: '68.0%' }, // 3: Duhai RRTS Metro Station
  { left: '56.0%', top: '70.0%' }, // 4: Dasna & Muradnagar Commercial Hubs
  { left: '38.0%', top: '28.0%' }  // 5: Badarpur Corporate Hub (Delhi)
];

const ARBOR_PIN_POS = { left: '50.0%', top: '45.0%' };

// Landmark Destination Data
// Landmark Destination Data for Golden Luxury Homes, Ghaziabad NCR
const DESTINATIONS = [
  {
    id: 'dpsg',
    nameSr: 'DPSG International Public School',
    nameEn: 'DPSG International School',
    car: '1 min',
    walk: '2 min',
    image: '/media/golden_luxury_layout.png',
    descSr: 'DPSG International Public School nalazi se neposredno uz kompleks u Kallugariju, pružajući vrhunsko obrazovanje deci na samo nekoliko koraka od kuće.',
    descEn: 'DPSG International Public School is located directly adjacent to Golden Luxury Homes in Kallugari, offering premier CBSE education walking distance from your villa.'
  },
  {
    id: 'epe',
    nameSr: 'Eastern Peripheral Expressway',
    nameEn: 'Eastern Peripheral Expressway',
    car: '1 min',
    walk: '3 min',
    image: '/media/videos/thumb_1.jpg',
    descSr: 'Direktan pristup Eastern Peripheral Expressway (EPE) obezbeđuje besprekornu tranzitnu vezu sa Sonipatom, Faridabadom, Palwalom i Greater Noidom bez ulaska u gradske gužve.',
    descEn: 'Direct access to Eastern Peripheral Expressway (EPE) ensures seamless signal-free bypass to Greater Noida, Faridabad, Kundli and Palwal.'
  },
  {
    id: 'dme',
    nameSr: 'Delhi-Meerut Expressway (NH-09)',
    nameEn: 'Delhi-Meerut Expressway (NH-09)',
    car: '3 min',
    walk: '10 min',
    image: '/media/ghaziabad_master_plan_2031.png',
    descSr: 'Ekspresni auto-put sa 14 traka povezuje lokaciju sa Akshardhamom u Delhiju za svega 30-35 minuta brze vožnje bez zastoja.',
    descEn: '14-lane high-speed expressway providing smooth 30-minute signal-free connectivity to Akshardham, Anand Vihar, and East Delhi.'
  },
  {
    id: 'rrts',
    nameSr: 'Duhai RRTS Metro Station',
    nameEn: 'Duhai RRTS Metro Station',
    car: '8 min',
    walk: null,
    image: '/media/videos/thumb_2.jpg',
    descSr: 'Namo Bharat Rapid Rail (RRTS) stanica u Duhaiju omogućava ultrabrzu vožnju brzinom do 160 km/h do Anand Vihara, Sarai Kale Khan i Meeruta.',
    descEn: 'Namo Bharat Rapid Rail Transit (RRTS) at Duhai connects you at 160 km/h high speed to Anand Vihar, New Delhi, and Meerut in minutes.'
  },
  {
    id: 'dasna',
    nameSr: 'Dasna & Muradnagar Market Hubs',
    nameEn: 'Dasna & Muradnagar Commercial Hubs',
    car: '4 min',
    walk: '15 min',
    image: '/media/golden_luxury_gate.jpg',
    descSr: 'Glavni trgovački i komercijalni centri duž glavnog puta obezbeđuju sve dnevne potrebe, banke, klinike i restorane u neposrednoj blizini.',
    descEn: 'Bustling commercial zones along Muradnagar Dasna Main Road provide daily shopping, banks, healthcare clinics, and essential retail hubs.'
  },
  {
    id: 'badarpur',
    nameSr: 'Badarpur / South Delhi Corporate Office',
    nameEn: 'Badarpur Corporate Hub (Delhi)',
    car: '35 min',
    walk: null,
    image: '/media/bill_address.jpg',
    descSr: 'Glavno sedište kompanije nalazi se u Badarpuru, kod Metro stanice Gate No 2, direktno povezano preko auto-puta.',
    descEn: 'Our Corporate & Administrative Headquarters is conveniently situated at Jaitpur Ext-2, Badarpur (Near Metro Gate 2), South Delhi.'
  }
];

export default function AroundSection({ lang = 'sr' }) {
  const [hoveredIdx, setHoveredIdx] = useState(0);
  const [activeIdx, setActiveIdx] = useState(0);
  const [mobileSlide, setMobileSlide] = useState(0);

  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const listItemsRef = useRef([]);

  const [mouseTilt, setMouseTilt] = useState({ x: 0, y: 0 });
  const [webGlSupported, setWebGlSupported] = useState(true);

  const effectiveIdx = hoveredIdx !== null ? hoveredIdx : activeIdx;

  // Active indicator position on the left list
  const activeItem = listItemsRef.current[effectiveIdx];
  const indicatorTop = activeItem ? activeItem.offsetTop : 0;
  const indicatorHeight = activeItem ? activeItem.offsetHeight : 52;

  // Mouse tilt for subtle perspective movement
  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 6;
    const y = (e.clientY / window.innerHeight - 0.5) * 6;
    setMouseTilt({ x, y });
  };

  // Setup Three.js WebGL with Graceful Fallback
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    let renderer = null;
    let scene = null;
    let camera = null;
    let animId = null;
    let isDisposed = false;

    try {
      let width = container.clientWidth || 1000;
      let height = container.clientHeight || 562;

      scene = new THREE.Scene();
      scene.fog = new THREE.Fog(0xfdfbef, 4, 8);

      camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
      camera.position.set(0, -0.2, 4.5);

      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: 'default'
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setSize(width, height);
      renderer.setClearColor(0xfdfbef, 1);
      renderer.outputColorSpace = THREE.SRGBColorSpace;

      const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
      scene.add(ambientLight);

      const dirLight = new THREE.DirectionalLight(0xffffff, 4);
      dirLight.position.set(10, 0, 20);
      scene.add(dirLight);

      // Main Tilted Group
      const group = new THREE.Group();
      const baseRotX = -Math.PI / 2 * 0.7;
      const baseRotZ = 0.35 * Math.PI;
      group.position.set(0, 1.28, 0.44);
      group.rotation.set(baseRotX, 0, baseRotZ);
      group.scale.set(1.2, 1.2, 1.2);
      scene.add(group);

      // Texture loader
      const textureLoader = new THREE.TextureLoader();
      const mapTexture = textureLoader.load('/home/mapc.webp', (tex) => {
        tex.colorSpace = THREE.SRGBColorSpace;
        tex.anisotropy = 8;
        tex.needsUpdate = true;
      });

      const planeGeo = new THREE.PlaneGeometry(7, 7);
      const planeMat = new THREE.MeshBasicMaterial({
        map: mapTexture,
        transparent: true,
        opacity: 0.95
      });
      const planeMesh = new THREE.Mesh(planeGeo, planeMat);
      group.add(planeMesh);

      // Animation loop
      const animate = () => {
        if (isDisposed) return;
        animId = requestAnimationFrame(animate);
        renderer.render(scene, camera);
      };
      animate();

      const onResize = () => {
        if (!container || isDisposed) return;
        width = container.clientWidth;
        height = container.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      };
      window.addEventListener('resize', onResize);

      return () => {
        isDisposed = true;
        if (animId) cancelAnimationFrame(animId);
        window.removeEventListener('resize', onResize);
        planeGeo.dispose();
        planeMat.dispose();
        renderer.dispose();
      };
    } catch (err) {
      console.warn('WebGL initialization skipped, using CSS 3D fallback:', err);
      setWebGlSupported(false);
    }
  }, []);

  return (
    <section
      id="Around"
      onMouseMove={handleMouseMove}
      className="relative z-1 overflow-clip bg-[#f5f3ee] pt-20 pb-30 max-xl:py-10 max-lg:pt-0 max-lg:pb-20 max-md:pb-10 select-none"
    >
      
      {/* DESKTOP EXPERIENCE (>= 1024px) */}
      <div className="trigger relative flex min-h-screen items-stretch max-lg:hidden">
        <div className="reveal-content wrapper h-full w-full flex">
          
          {/* Left Column: Title, Interactive Italic List, and Travel Detail Box */}
          <div className="w-[42%] max-xl:w-5/12 flex flex-col justify-between py-10 z-20 pr-6">
            <div>
              {/* Kicker */}
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#b8892a]" />
                <p className="kicker uppercase text-golden text-xs tracking-widest font-semibold">
                  Township Surroundings & Connectivity
                </p>
              </div>

              {/* List with Moving Active Indicator Line */}
              <div className="list border-b-golden/40 relative border-b pt-2 pb-6 space-y-2">
                {/* Active Dark Blue Vertical Indicator Bar */}
                <div
                  className="bg-[#1a2a4a] pointer-events-none absolute -left-4 w-1 rounded-full transition-all duration-300 ease-out"
                  style={{
                    top: `${indicatorTop}px`,
                    height: `${indicatorHeight}px`,
                    opacity: effectiveIdx !== null ? 1 : 0
                  }}
                />

                {DESTINATIONS.map((item, idx) => {
                  const isActive = effectiveIdx === idx;
                  return (
                    <div
                      key={item.id}
                      ref={(el) => (listItemsRef.current[idx] = el)}
                      onMouseEnter={() => {
                        setHoveredIdx(idx);
                        setActiveIdx(idx);
                      }}
                      onMouseLeave={() => setHoveredIdx(null)}
                      onClick={() => setActiveIdx(idx)}
                      className={`group relative cursor-pointer px-3 py-2 rounded-xl transition-all duration-200 flex items-center justify-between ${
                        isActive ? 'bg-[#111e36]/10 text-[#1a2a4a]' : 'hover:bg-black/5 text-golden'
                      }`}
                    >
                      <p className={`font-serif text-base sm:text-lg lg:text-[20px] leading-snug transition-all duration-200 ${
                        isActive ? 'text-[#1a2a4a] italic font-medium' : 'text-golden group-hover:text-[#1a2a4a]'
                      }`}>
                        {item.nameEn}
                      </p>
                      {item.car && (
                        <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-[#b8892a]/15 text-[#8f6412] ml-2 shrink-0">
                          {item.car}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Travel Time & Detailed Landmark Narrative Box */}
            <div className="relative mt-8 min-h-[15rem]">
              {DESTINATIONS.map((item, idx) => {
                const isSelected = effectiveIdx === idx;
                return (
                  <div
                    key={item.id}
                    className={`absolute inset-0 transition-opacity duration-300 ${
                      isSelected ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                  >
                    {/* Landmark Name Kicker */}
                    <p className="kicker mb-3 uppercase text-xs tracking-widest font-semibold text-golden">
                      {item.nameEn}
                    </p>

                    {/* Travel Distance Tags with Authentic SVGs */}
                    <div className="divide-golden/40 flex items-center divide-x border-b border-golden/20 pb-4 mb-4">
                      {item.car && (
                        <div className="paragraph flex items-center gap-2 pr-4 text-sm font-sans text-[#1a2a4a] font-medium">
                          {/* Exact Car Icon SVG */}
                          <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-golden h-8 w-8">
                            <path d="M34 17.25H30.3125L24.8125 11.75C24.6667 11.6042 24.4844 11.4844 24.2656 11.3906C24.0469 11.2969 23.8229 11.25 23.5938 11.25H9.53125C9.23958 11.25 8.96354 11.3229 8.70312 11.4688C8.44271 11.6146 8.23958 11.8021 8.09375 12.0312L4.375 17.5938C4.33333 17.6354 4.30208 17.6927 4.28125 17.7656C4.26042 17.8385 4.25 17.9167 4.25 18V24C4.25 24.4792 4.42187 24.8906 4.76562 25.2344C5.10938 25.5781 5.52083 25.75 6 25.75H8.3125C8.5 26.6042 8.9375 27.3177 9.625 27.8906C10.3125 28.4635 11.1042 28.75 12 28.75C12.8958 28.75 13.6875 28.4688 14.375 27.9062C15.0625 27.3437 15.4896 26.6354 15.6562 25.7812L15.6875 25.75H24.3125C24.5 26.6042 24.9375 27.3177 25.625 27.8906C26.3125 28.4635 27.1042 28.75 28 28.75C28.8958 28.75 29.6875 28.4688 30.375 27.9062C31.0625 27.3437 31.4896 26.6354 31.6562 25.7812L31.6875 25.75H34C34.4792 25.75 34.8906 25.5781 35.2344 25.2344C35.5781 24.8906 35.75 24.4792 35.75 24V19C35.75 18.5208 35.5781 18.1094 35.2344 17.7656C34.8906 17.4219 34.4792 17.25 34 17.25ZM9.3125 12.875C9.35417 12.8333 9.39062 12.8021 9.42188 12.7812C9.45312 12.7604 9.48958 12.75 9.53125 12.75H23.5938C23.6146 12.75 23.6406 12.7552 23.6719 12.7656C23.7031 12.776 23.7292 12.7917 23.75 12.8125L28.1875 17.25H6.40625L9.3125 12.875ZM12 27.25C11.375 27.25 10.8438 27.0313 10.4062 26.5938C9.96875 26.1562 9.75 25.625 9.75 25C9.75 24.375 9.96875 23.8438 10.4062 23.4062C10.8438 22.9687 11.375 22.75 12 22.75C12.625 22.75 13.1562 22.9687 13.5938 23.4062C14.0313 23.8438 14.25 24.375 14.25 25C14.25 25.625 14.0313 26.1562 13.5938 26.5938C13.1562 27.0313 12.625 27.25 12 27.25ZM28 27.25C27.375 27.25 26.8438 27.0313 26.4062 26.5938C25.9687 26.1562 25.75 25.625 25.75 25C25.75 24.375 25.9687 23.8438 26.4062 23.4062C26.8438 22.9687 27.375 22.75 28 22.75C28.625 22.75 29.1562 22.9687 29.5938 23.4062C30.0313 23.8438 30.25 24.375 30.25 25C30.25 25.625 30.0313 26.1562 29.5938 26.5938C29.1562 27.0313 28.625 27.25 28 27.25ZM34.25 24C34.25 24.0625 34.224 24.1198 34.1719 24.1719C34.1198 24.224 34.0625 24.25 34 24.25H31.6875C31.5 23.3958 31.0625 22.6823 30.375 22.1094C29.6875 21.5365 28.8958 21.25 28 21.25C27.1042 21.25 26.3125 21.5312 25.625 22.0938C24.9375 22.6563 24.5104 23.3646 24.3438 24.2188L24.3125 24.25H15.6875C15.5 23.3958 15.0625 22.6823 14.375 22.1094C13.6875 21.5365 12.8958 21.25 12 21.25C11.1042 21.25 10.3125 21.5312 9.625 22.0938C8.9375 22.6563 8.51042 23.3646 8.34375 24.2188L8.3125 24.25H6C5.9375 24.25 5.88021 24.224 5.82812 24.1719C5.77604 24.1198 5.75 24.0625 5.75 24V18.75H34C34.0625 18.75 34.1198 18.776 34.1719 18.8281C34.224 18.8802 34.25 18.9375 34.25 19V24Z" fill="currentColor" />
                          </svg>
                          <span>{item.car}</span>
                        </div>
                      )}
                      {item.walk && (
                        <div className="paragraph flex items-center gap-2 pl-4 text-sm font-sans text-[#1a2a4a] font-medium">
                          {/* Exact Walk Icon SVG */}
                          <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-golden h-8 w-8">
                            <path d="M19.1216 11.4286C19.1216 10.4821 19.4595 9.67411 20.1351 9.00446C20.8108 8.33482 21.6261 8 22.5811 8C23.536 8 24.3513 8.33482 25.027 9.00446C25.7027 9.67411 26.0405 10.4821 26.0405 11.4286C26.0405 12.375 25.7027 13.183 25.027 13.8527C24.3513 14.5223 23.536 14.8571 22.5811 14.8571C21.6261 14.8571 20.8108 14.5223 20.1351 13.8527C19.4595 13.183 19.1216 12.375 19.1216 11.4286ZM28.6351 20.8571C27.0856 20.8571 25.8829 20.558 25.027 19.9598C24.1712 19.3616 23.3649 18.6875 22.6081 17.9375C22.4099 17.7411 22.2117 17.5446 22.0135 17.3482C21.8153 17.1518 21.6171 16.9643 21.4189 16.7857C20.4279 15.9286 19.3198 15.5714 18.0946 15.7143C16.8874 15.875 15.7523 16.2232 14.6892 16.7589C13.6261 17.2946 12.7162 17.8661 11.9595 18.4732C11.2207 19.0804 10.8153 19.4196 10.7432 19.4911C10.6712 19.5625 10.6126 19.6518 10.5676 19.7589C10.5225 19.8661 10.5 19.9732 10.5 20.0804C10.5 20.3304 10.5811 20.5357 10.7432 20.6964C10.9054 20.8571 11.1126 20.9375 11.3649 20.9375C11.473 20.9375 11.5766 20.9196 11.6757 20.8839C11.7748 20.8482 11.8604 20.7946 11.9324 20.7232C12.4189 20.2946 12.9279 19.8884 13.4595 19.5045C13.991 19.1205 14.5541 18.7679 15.1486 18.4464L15.2297 18.3929C15.9685 18 16.6532 17.7277 17.2838 17.5759C17.9144 17.4241 18.482 17.3929 18.9865 17.4821L13.1486 30.7946C13.1126 30.8482 13.0901 30.9062 13.0811 30.9688C13.0721 31.0312 13.0676 31.0893 13.0676 31.1429C13.0676 31.3214 13.1171 31.4821 13.2162 31.625C13.3153 31.7679 13.4369 31.8661 13.5811 31.9196C13.6351 31.9554 13.6892 31.9777 13.7432 31.9866C13.7973 31.9955 13.8604 32 13.9324 32C14.1126 32 14.2748 31.9509 14.4189 31.8527C14.5631 31.7545 14.6622 31.6339 14.7162 31.4911L18.3649 23.2143L21.7162 25.5714V31.1429C21.7162 31.375 21.8018 31.5759 21.973 31.7455C22.1441 31.9152 22.3468 32 22.5811 32C22.8153 32 23.018 31.9152 23.1892 31.7455C23.3604 31.5759 23.4459 31.375 23.4459 31.1429V25.1429C23.4459 25 23.4144 24.8661 23.3514 24.7411C23.2883 24.6161 23.2027 24.5179 23.0946 24.4464L19.0676 21.6071L20.527 18.2857C20.6532 18.4107 20.7883 18.5446 20.9324 18.6875C21.0766 18.8304 21.2297 18.9732 21.3919 19.1161C22.1487 19.8839 23.0676 20.6518 24.1486 21.4196C25.2297 22.1875 26.7252 22.5714 28.6351 22.5714C28.8694 22.5714 29.0721 22.4866 29.2432 22.317C29.4144 22.1473 29.5 21.9464 29.5 21.7143C29.5 21.4821 29.4144 21.2813 29.2432 21.1116C29.0721 20.942 28.8694 20.8571 28.6351 20.8571Z" fill="currentColor" />
                          </svg>
                          <span>{item.walk}</span>
                        </div>
                      )}
                    </div>

                    {/* Detailed Paragraph Description */}
                    <p className="paragraph text-sm font-sans text-[#1a2a4a]/80 leading-relaxed max-w-md">
                      {item.descEn}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Column: 3D Isometric Map Stage with Feathered Mask & Interactive Perspective */}
          <div
            ref={containerRef}
            className="reveal-image absolute top-1/2 right-0 z-10 w-[70vw] -translate-y-1/2 overflow-visible bg-inherit max-xl:w-[60vw]"
            style={{
              aspectRatio: '16 / 9',
              borderRadius: '1.25rem'
            }}
          >
            {/* Authentic SVG Feathered Border Mask Filter */}
            <svg
              className="absolute inset-0 h-full w-full pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ overflow: 'visible', position: 'absolute' }}
            >
              <defs>
                <filter id="feathered-mask-filter">
                  <feGaussianBlur stdDeviation="24" />
                </filter>
                <mask id="around-feathered-mask">
                  <rect
                    x="70"
                    y="70"
                    width="calc(100% - 140px)"
                    height="calc(100% - 140px)"
                    rx="30"
                    ry="30"
                    fill="white"
                    filter="url(#feathered-mask-filter)"
                  />
                </mask>
              </defs>
            </svg>

            {/* Masked Viewport */}
            <div
              className="absolute inset-0"
              style={{
                mask: 'url(#around-feathered-mask)',
                WebkitMask: 'url(#around-feathered-mask)'
              }}
            >
              {/* Three.js Canvas if supported */}
              <canvas
                ref={canvasRef}
                className="absolute top-0 left-0 h-full w-full block cursor-grab active:cursor-grabbing"
              />

              {/* Seamless 3D Map Fallback / Texture Background in Isometric Perspective */}
              <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                style={{
                  perspective: '1200px',
                  transform: `translate3d(${mouseTilt.x}px, ${mouseTilt.y}px, 0px)`,
                  transition: 'transform 0.15s ease-out'
                }}
              >
                <div
                  className="relative w-full h-full flex items-center justify-center"
                  style={{
                    transform: 'rotateX(52deg) rotateZ(-28deg) scale(1.15)',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <img
                    src="/home/mapc.webp"
                    alt="ClearDeal Property Street Map"
                    className="w-[120%] max-w-none h-auto object-contain opacity-90 select-none"
                    draggable={false}
                  />

                  {/* Plotted Township 3D CAD Demarcation Ground Grid */}
                  <div
                    style={{
                      position: 'absolute',
                      left: '42%',
                      top: '38%',
                      transform: 'translate(-50%, -50%) rotate(18deg)',
                      transformStyle: 'preserve-3d'
                    }}
                    className="pointer-events-none z-20"
                  >
                    {/* Demarcated Plotted Land Master Plan Tile covering old graphics */}
                    <div className="relative w-56 h-28 bg-[#0d1424] rounded-lg shadow-2xl border-2 border-[#b8892a] overflow-hidden flex flex-col justify-between p-2.5">
                      <div className="flex items-center justify-between border-b border-[#b8892a]/30 pb-1">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-[#b8892a] animate-ping" />
                          <span className="text-[10px] uppercase font-bold text-[#e8dfc8] tracking-wider font-serif">
                            Golden Luxury Homes
                          </span>
                        </div>
                        <span className="text-[9px] font-mono text-[#b8892a] font-semibold bg-[#b8892a]/20 px-1.5 py-0.5 rounded">
                          155 PLOTS
                        </span>
                      </div>
                      
                      {/* CAD Grid Simulation */}
                      <div className="grid grid-cols-6 gap-0.5 my-1 opacity-80">
                        {Array.from({ length: 18 }).map((_, i) => (
                          <div
                            key={i}
                            className="h-3 border border-[#b8892a]/40 bg-[#1a2a4a]/80 text-[7px] text-[#e8dfc8]/80 font-mono flex items-center justify-center font-bold"
                          >
                            P{i + 1}
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-[8px] font-mono text-[#e8dfc8]/90 pt-1 border-t border-[#b8892a]/20">
                        <span>25FT MAIN BOULEVARD</span>
                        <span className="text-[#b8892a] font-bold">FREEHOLD REGISTRY</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Central Golden Luxury Homes Township Pin */}
            <div
              style={{
                position: 'absolute',
                left: '52.0%',
                top: '38.0%',
                transform: `translate3d(calc(-50% + ${mouseTilt.x * 0.5}px), calc(-80% + ${mouseTilt.y * 0.5}px), 0px)`,
                zIndex: 35
              }}
              className="pointer-events-none flex flex-col items-center"
            >
              <div className="px-3 py-1.5 rounded-full bg-[#111e36] text-[#b8892a] border border-[#b8892a] shadow-2xl flex items-center gap-2 whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-[#b8892a] animate-ping"></span>
                <span className="font-serif text-[11px] font-bold uppercase tracking-wider text-white">Golden Luxury Homes • 155 Plots</span>
              </div>
              <div className="w-0.5 h-6 bg-gradient-to-b from-[#b8892a] to-transparent"></div>
            </div>

            {/* Interactive Landmark Pins Placed at Exact Reference Coordinates (Outside mask for crystal clarity) */}
            {DESTINATIONS.map((item, idx) => {
              const pos = PIN_PERCENTAGES[idx];
              const isSelected = effectiveIdx === idx;

              return (
                <div
                  key={item.id}
                  style={{
                    position: 'absolute',
                    left: pos.left,
                    top: pos.top,
                    transform: `translate3d(calc(-50% + ${mouseTilt.x * 0.7}px), calc(-50% + ${mouseTilt.y * 0.7}px), 0px)`,
                    zIndex: isSelected ? 50 : 20
                  }}
                >
                  <div
                    onMouseEnter={() => {
                      setHoveredIdx(idx);
                      setActiveIdx(idx);
                    }}
                    onMouseLeave={() => setHoveredIdx(null)}
                    onClick={() => setActiveIdx(idx)}
                    className="group relative flex cursor-pointer flex-col items-center select-none"
                  >
                    {/* Photo Preview Card smoothly popping into open map area */}
                    <img
                      src={item.image}
                      alt={item.nameEn}
                      style={{ width: '256px', height: '178px' }}
                      className={`pointer-events-none absolute left-1/2 max-w-none -translate-x-1/2 rounded-[1.25rem] object-cover shadow-2xl transition-all duration-300 border-2 border-[#b59a57]/40 bg-[#edeae2] z-50 top-[calc(100%+8px)] origin-top ${
                        isSelected
                          ? 'scale-100 opacity-100'
                          : 'scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100'
                      }`}
                    />

                      {/* Signature SVG Pin Icon */}
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 21 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`origin-bottom transition-all duration-300 drop-shadow-sm h-9 w-9 ${
                          isSelected
                            ? 'text-[#1a2a4a] scale-130'
                            : 'text-golden group-hover:text-[#1a2a4a] group-hover:scale-130'
                        }`}
                      >
                        <circle cx="10.0338" cy="10.0338" r="10.0338" fill="currentColor" />
                        <ellipse cx="10.0335" cy="31.9253" rx="5.47296" ry="0.912159" fill="currentColor" />
                        <path d="M10.0337 20.9795V31.0132" stroke="currentColor" strokeWidth="0.912159" />
                      </svg>

                      {/* Landmark Title Underneath Pin */}
                      <p className={`small w-32 text-center font-sans text-xs transition duration-300 mt-1 drop-shadow-sm font-medium ${
                        isSelected
                          ? 'text-[#1a2a4a] font-semibold scale-105'
                          : 'text-golden group-hover:text-[#1a2a4a]'
                      }`}>
                        {item.nameEn}
                      </p>
                    </div>
                  </div>
                );
              })}

          </div>
        </div>
      </div>

      {/* MOBILE / TABLET SLIDER EXPERIENCE (< 1024px) */}
      <div className="hidden max-lg:block px-6 pt-10">
        <p className="kicker uppercase text-golden text-xs tracking-widest font-semibold mb-6">
          {"In the surroundings"}
        </p>

        {/* Carousel Slide Card */}
        <div className="relative overflow-hidden rounded-2xl bg-white/40 p-5 backdrop-blur-sm border border-golden/20 shadow-lg">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl mb-5">
            <img
              src={DESTINATIONS[mobileSlide].image}
              alt={DESTINATIONS[mobileSlide].nameSr}
              className="h-full w-full object-cover"
            />
          </div>

          <h3 className="heading-2 text-[#1a2a4a] text-2xl font-serif mb-3">
            {DESTINATIONS[mobileSlide].nameEn}
          </h3>

          {/* Travel tags */}
          <div className="divide-golden/40 flex items-center divide-x border-b border-golden/20 pb-3 mb-3">
            {DESTINATIONS[mobileSlide].car && (
              <div className="flex items-center gap-2 pr-3 text-xs font-sans text-[#1a2a4a] font-medium">
                <span className="text-golden font-bold">🚗</span>
                <span>{DESTINATIONS[mobileSlide].car}</span>
              </div>
            )}
            {DESTINATIONS[mobileSlide].walk && (
              <div className="flex items-center gap-2 pl-3 text-xs font-sans text-[#1a2a4a] font-medium">
                <span className="text-golden font-bold">🚶</span>
                <span>{DESTINATIONS[mobileSlide].walk}</span>
              </div>
            )}
          </div>

          <p className="paragraph text-xs font-sans text-[#1a2a4a]/80 leading-relaxed mb-6">
            {DESTINATIONS[mobileSlide].descEn}
          </p>

          {/* Controls: Prev / Next Buttons & Indicators */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex gap-1.5">
              {DESTINATIONS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setMobileSlide(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    mobileSlide === i ? 'w-6 bg-[#1a2a4a]' : 'w-2 bg-golden/40'
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setMobileSlide((prev) => (prev > 0 ? prev - 1 : DESTINATIONS.length - 1))}
                className="w-9 h-9 rounded-full border border-golden/40 flex items-center justify-center text-[#1a2a4a] hover:bg-golden/10"
              >
                ←
              </button>
              <button
                onClick={() => setMobileSlide((prev) => (prev < DESTINATIONS.length - 1 ? prev + 1 : 0))}
                className="w-9 h-9 rounded-full border border-golden/40 flex items-center justify-center text-[#1a2a4a] hover:bg-golden/10"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
