import { useOutletContext } from "react-router-dom";

const useCart = () => {
  return useOutletContext();
};

export default useCart;
