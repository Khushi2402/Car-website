import "./Hero.css";
import videoBg from '../../assets/video.mp4';

const Hero = () => {
  return (
    <div className="main">
      <video src={videoBg} autoPlay loop muted />
      <div className="content">
        <h1 className="">SPECTRE</h1>
        <h4>IN MOTION</h4>
        <button className="">DISCOVER NOW</button>
      </div>
    </div>
  );
};

export default Hero;