import NavHeader from "../comps/navHeader";
import NavBottom from "../comps/navBottom";
import Footer from "../comps/footer";
import Pics from "../comps/Pics";
import Skills from "../comps/skills";
import About from "../comps/about";
import Contact from "../comps/contact";

export default function Index() {
  return (
    <div>
      <NavHeader />
      <Pics />
      <Skills />
      <About />
      <Contact />
      <NavBottom />
      <Footer />
    </div>
  );
}
