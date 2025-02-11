import Image from "next/image";
import Navbar from "./component/navbar";
import PortfolioCard from "./component/about";
import ProjectCard from "./component/project";
import Articles from "./component/articles";
import GetToKnowMe from "./component/footer";
import Footer from "./component/footer";
import FindMeOn from "./component/socials";

export default function Home() {
  return (
    <>
      <Navbar />
      <PortfolioCard/>
      <ProjectCard/>
      <FindMeOn/>
      {/* <Articles/> */}
      <Footer/>
      {/* <GetToKnowMe/> */}
    </>
  );
}
