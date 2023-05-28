import React from "react";

type DefaultStateType = {
  isModalVisible: boolean;
  isEnglish: boolean;
  showModal: () => void;
  hideModal: () => void;
  toggleLanguage: () => void;
};

const defaultState: DefaultStateType = {
  isModalVisible: false,
  isEnglish: false,

  showModal: () => undefined,
  hideModal: () => undefined,

  toggleLanguage: () => undefined,
};

const Context = React.createContext(defaultState);

export default Context;
