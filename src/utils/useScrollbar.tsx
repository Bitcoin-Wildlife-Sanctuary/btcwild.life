import { useEffect, useRef, useState } from "react";

const useScrollNavbar = () => {
  const [isSticky, setSticky] = useState<boolean>(false);
  const element = useRef<HTMLElement>();
  

  const handleScroll = () => {
    if(!element.current) return;
    if(window.scrollY > 0) {
      setSticky(true)
    }else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  return { isSticky, element };
};

export default useScrollNavbar;