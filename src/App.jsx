import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  HomePageNew,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import { imageBG } from "./assets";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <img
          src={imageBG}
          alt={"not found"}
          // className="fixed flex w-screen h-ful mx-auto opacity-60"
          // className="fixed flex w-screen lg:w-fit lg:max-w-fit h-ful lg:h-screen mx-auto opacity-60"
          className="fixed flex w-fit h-screen max-w-fit lg:max-w-none lg:w-screen lg:h-fit mx-auto opacity-60"
        />
        <Navbar />
        <HomePageNew />
        <div className="relative z-0 bg-primary">
          <About />
          <Experience />
          <Tech />
          <Works />
          {/* <Feedbacks /> */}
          <div className="relative z-0 bg-[#262223] mt-12">
            <Contact />
            {/* <StarsCanvas /> */}
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
