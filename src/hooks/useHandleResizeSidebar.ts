import { useEffect, useLayoutEffect, useState } from "react";

const useHandleResizeSidebar = () => {
  const [isSidebar, setIsSidebar] = useState<boolean>(false);

  useLayoutEffect(() => {
    setIsSidebar(window.innerWidth > 767);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsSidebar(window.innerWidth > 767);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { isSidebar, setIsSidebar };
};

export default useHandleResizeSidebar;
