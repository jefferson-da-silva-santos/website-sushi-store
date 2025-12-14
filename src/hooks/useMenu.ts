import { useContext } from "react";
import MenuContext from "../contexts/MenuContext";

const useMenu = () => {
  const context = useContext(MenuContext);
  if (context === undefined) {
    throw new Error('useMenu deve ser usado dentro de um MenuProvider');
  }
  return context;
};

export default useMenu