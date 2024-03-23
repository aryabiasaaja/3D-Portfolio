import { BrowserRouter } from "react-router-dom";
import {
  Hero,
  Navbar,
  About,
  Tech,
  Experience,
  Works,
  Contact,
  StarsCanvas,
} from "./components";
import backgroundMusic from "./assets/bgm.mp3";

const App = () => {
  return (
    <BrowserRouter>
      <audio src={backgroundMusic} autoPlay="true" />
      <div className="relative z-0 bg-gradient-to-br from-blue-900 via-slate-900 to-indigo-900">
        <div className="bg-hero-pattern! bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
