import React from "react";

const defaultState: {
  isModalVisible: boolean;
  isEnglish: boolean;
  showModal: () => void;
  hideModal: () => void;
  toggleLanguage: () => void;
} = {
  isModalVisible: false,
  isEnglish: false,

  showModal: () => undefined,
  hideModal: () => undefined,

  toggleLanguage: () => undefined,
};

const Context = React.createContext(defaultState);

export default Context;
