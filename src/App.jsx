import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Hero2 from "./Components/Hero/Hero2";
import "./index.css";
import Type from "./Components/Types/Type";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Hero2/>
      <Type />
    </div>
  );
};

export default App;