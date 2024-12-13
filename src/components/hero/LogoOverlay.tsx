interface LogoOverlayProps {
  whiteLogo: string;
  blackLogo: string;
  whiteOpacity: number;
  blackOpacity: number;
}

export const LogoOverlay = ({ whiteLogo, blackLogo, whiteOpacity, blackOpacity }: LogoOverlayProps) => {
  return (
    <div id="logo-container" className="fixed inset-0 flex items-center justify-center z-10">
      <div className="relative w-full max-w-[80vw]">
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