import Footer from "./footer";
import CtaBanner from "./layout.cta.banner";
import Faq from "./layout.faq";
import { Header } from "./layout.header";
import Services from "./layout.services";
import Testimonial from "./layout.testimonial";
import Whyus from "./layout.whyus";

const Layout = () => {
  return (
    <>
      <Header />
      <Services />
      <Whyus />
      <Testimonial />
      <CtaBanner />
      <Faq />
      <Footer />
    </>
  );
};

export default Layout;
