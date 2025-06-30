import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PageLayout = () => {
  return (
    <div className='relative m-auto max-w-[430px] shadow-xl/50'>
      <Header />
      <Outlet />
      {/* <Main /> */}
      {/* <ReadmorePage /> */}
      <Footer />
    </div>
  );
};

export default PageLayout;
