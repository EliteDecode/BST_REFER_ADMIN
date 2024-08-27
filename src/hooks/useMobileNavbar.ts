import { useState, useEffect } from "react";

type UseMobileNavbarResult = {
  toggleSidebar: () => void;
  sidebarOpen: boolean;
};

const useMobileNavbar = (): UseMobileNavbarResult => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = (): void => {
    setSidebarOpen(!sidebarOpen);
  };

  /* This `useEffect` hook is responsible for handling the responsiveness of the mobile navbar. */
  useEffect(() => {
    const handleResize = (): void => {
      if (window.innerWidth > 767) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return (): void => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* This `useEffect` hook is responsible for managing the overflow style of the `document.body` based
 on the value of the `sidebarOpen` state variable. */
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return (): void => {
      document.body.style.overflow = "auto";
    };
  }, [sidebarOpen]);

  return { toggleSidebar, sidebarOpen };
};

export default useMobileNavbar;
