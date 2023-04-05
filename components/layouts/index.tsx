import LoginModal from "components/common/LoginModal";
import { useLogin } from "context/Login";
import { FC, ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";
import Banner from "./header/Banner";

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const { modalIsOpen } = useLogin();

  return (
    <div className="select-none">
      <Banner />
      <Header />
      {modalIsOpen && <LoginModal />}
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
