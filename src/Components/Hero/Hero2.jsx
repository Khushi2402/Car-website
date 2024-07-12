import "./Hero.css";
import heroImg from "../../assets/hero2.jpg";
const Hero = () => {
  return (
    <>
      <section>
        <div className="main">
          <img className="heroImage" src={heroImg} />
          <div className="content fadeIn">
            <h1 className="lg:text-8xl font-light tracking-widest">CHARGING SPECTRE</h1>
            <button className="bg-white text-black px-24 py-4 tracking-widest mt-9 border">
              DISCOVER NOW
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
