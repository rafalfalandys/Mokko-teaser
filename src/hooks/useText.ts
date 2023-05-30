import { useContext } from "react";
import { textsPL, textsEN } from "../assets/texts";
import Context from "../store/context";

const useText = () => {
  const { isEnglish } = useContext(Context);
  const text = isEnglish ? textsEN : textsPL;

  return text;
};

export default useText;
