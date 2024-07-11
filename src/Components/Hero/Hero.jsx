import "./Hero.css";
import videoBg from '../../assets/video.mp4';

const Hero = () => {
  return (
    <div className="main">
      <video src={videoBg} autoPlay loop muted />
      <div className="content">
        <h1 className="lg:text-8xl font-light tracking-widest">SPECTRE</h1>
        <h4 className="lg:text-3xl leading-tight mt-4">IN MOTION</h4>
        <button className="bg-white text-black px-24 py-4 tracking-widest mt-9 border">DISCOVER NOW</button>
      </div>
    </div>
  );
};

export default Hero;