import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type LoginContextProps = {
  modalIsOpen: boolean;
  handleToggleModal: () => void;
};

const LoginContext = createContext({} as LoginContextProps);

type LoginContextProviderProps = {
  children: ReactNode;
};

export const LoginContextProvider: FC<LoginContextProviderProps> = ({
  children,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleToggleModal = () => {
    setModalIsOpen((prev) => !prev);
  };

  const data = { handleToggleModal, modalIsOpen };
  return <LoginContext.Provider value={data}>{children}</LoginContext.Provider>;
};

export const useLogin = () => useContext(LoginContext);
