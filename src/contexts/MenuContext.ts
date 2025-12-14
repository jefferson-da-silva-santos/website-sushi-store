import { createContext } from "react";

const MenuContext = createContext({
  isMenuOpen: false,
  toggleMenu: () => {},
  iconMenuButton: 'bx bx-menu',
})

export default MenuContext;