interface LogoOverlayProps {
  whiteLogo: string;
  blackLogo: string;
  whiteOpacity: number;
  blackOpacity: number;
  overall: number;
  scale: number;
}

export const LogoOverlay = ({ 
  whiteLogo, 
  blackLogo, 
  whiteOpacity, 
  blackOpacity,
  overall,
  scale 
}: LogoOverlayProps) => {
  // Calculate position based on scale
  const translateX = `${(1 - scale) * -50}%`;
  const translateY = `${(1 - scale) * -50}%`;

  return (
    <div id="logo-container" className="fixed inset-0 flex items-center justify-center z-10">
      <div 
        className="relative w-full max-w-[80vw]"
        style={{ 
          opacity: overall,
          transform: `translate(${translateX}, ${translateY}) scale(${scale})`,
          transition: 'transform 0.1s linear, opacity 0.1s linear',
          transformOrigin: 'top left'
        }}
      >
        <img
          id="white-logo"
          src={whiteLogo}
          alt="Warrior Capital Logo White"
          className="w-full h-auto absolute top-0 left-0 transition-opacity duration-300"
          style={{ opacity: whiteOpacity }}
        />
        <img
          id="black-logo"
          src={blackLogo}
          alt="Warrior Capital Logo Black"
          className="w-full h-auto transition-opacity duration-300"
          style={{ opacity: blackOpacity }}
        />
        <img
          src={whiteLogo}
          alt=""
          className="w-full h-auto invisible"
        />
      </div>
    </div>
  );
};