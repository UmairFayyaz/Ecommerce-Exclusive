import { useEffect, useState } from "react";

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState("xs");

  const handleResize = () => {
    const width = window.innerWidth;

    if (width >= 1280) {
      setScreenSize("xl");
    } else if (width >= 1024) {
      setScreenSize("lg");
    } else if (width >= 768) {
      setScreenSize("md");
    } else if (width >= 640) {
      setScreenSize("sm");
    } else {
      setScreenSize("xs");
    }
  };

  useEffect(() => {
    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize); // Check on resize

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenSize;
};

export default useScreenSize;
