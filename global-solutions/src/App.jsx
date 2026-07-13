import Home from "./pages/Home";
import aos from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";

function App(){
  useEffect(()=>{
    aos.init({
      duration:900,
      once:true,
      easing:"ease-out-cubic",
      offset:80,
    });
  },[]);
  return <Home />;
}

export default App;