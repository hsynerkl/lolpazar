import { FC, ReactNode } from "react";
import Header from "./header";
import Banner from "./header/Banner";

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="select-none">
      <Banner />
      <Header />
      <main>{children}</main>
      <footer></footer>
    </div>
  );
};

export default MainLayout;
