import { ReactNode, useCallback, useState } from "react";
import Context from "./context";

const Provider: React.FC<{ children: ReactNode | ReactNode[] }> = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEnglish, setIsEnglish] = useState(false);

  // Modal controls
  const showModal = () => setIsModalVisible(true);
  const hideModal = useCallback(() => setIsModalVisible(false), []);

  //language control
  const toggleLanguage = () => setIsEnglish((prevState) => !prevState);

  const context = {
    isModalVisible,

    isEnglish,

    showModal,
    hideModal,

    toggleLanguage,
  };

  return <Context.Provider value={context}>{props.children}</Context.Provider>;
};

export default Provider;
