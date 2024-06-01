import { useCallback } from "react";

const useHandlePropagation = () => {
  const handleClose = useCallback((reference: any, setClose: any) => {
    function handleClickOutside(event: any) {
      if (reference?.current && !reference?.current?.contains(event?.target)) {
        setClose(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return handleClose;
};

export default useHandlePropagation;
