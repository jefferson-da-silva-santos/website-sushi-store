import { useState } from "react";
import MenuContext from "../contexts/MenuContext";

interface ContainerChildren {
  children: React.ReactNode;
}

const MenuProvider = ({ children }: ContainerChildren) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [iconMenuButton, setIconMenuButton] = useState<string>("bx bx-menu");

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      setIconMenuButton("bx bx-menu");
    } else {
      setIsMenuOpen(true);
      setIconMenuButton("bx bx-x");
    }
  };

  return (
    <MenuContext.Provider value={{ isMenuOpen, toggleMenu, iconMenuButton }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;