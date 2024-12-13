import { useState } from "react";
import { VideoBackground } from "./hero/VideoBackground";
import { LogoOverlay } from "./hero/LogoOverlay";
import { useLogoTransition } from "@/hooks/useLogoTransition";

export const Hero = () => {
  const [videoOpacity, setVideoOpacity] = useState(1);
  const { white: whiteOpacity, black: blackOpacity, overall, scale } = useLogoTransition();
  
  const whiteLogo = "/lovable-uploads/7f78581e-ed7d-4d54-8424-08e21e04f672.png";
  const blackLogo = "/lovable-uploads/8e43d334-5a0c-4341-a13c-ec79cd2ae8e8.png";

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      <VideoBackground onIntersection={setVideoOpacity} />
      <LogoOverlay
        whiteLogo={whiteLogo}
        blackLogo={blackLogo}
        whiteOpacity={whiteOpacity}
        blackOpacity={blackOpacity}
        overall={overall}
        scale={scale}
      />
    </section>
  );
};