import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "../../Imports/ImportCenter";
import { faArrowUp } from "../../Imports/ImportCenter";
import "./backToHomeButton.css";
import Glowing from "../Glowing/Glowing";

export default function ArrowScrollSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 90);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    isVisible && (
      <a
        href="#home"
        className="arrow-scroll"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <Glowing glowColor="radial-gradient(circle, #00FFFF , transparent)" />
        <FontAwesomeIcon icon={faArrowUp} size="xl" />
      </a>
    )
  );
}
