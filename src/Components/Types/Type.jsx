import './Type.css';
import car1 from "../../assets/car1.jpg";
import car2 from "../../assets/car2.jpg";
import car3 from "../../assets/car3.jpg";   

const Type = () => {
  return (
    <div>
      <section className="bg-zinc-800 pt-20">
        <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header className="mx-auto text-center">
            <h2 className="text-xl text-white tracking-widest sm:text-3xl">
              EXPLORE FURTHER
            </h2>

            <h3 className="mt-4 text-lg tracking-normal text-gray-300">
              CONTINUE YOUR JOURNEY
            </h3>
          </header>

          <ul className="mt-8 grid gap-6 sm:grid-cols-3 lg:grid-cols-3">
            <li>
              <a href="#" className="group block overflow-hidden">
                <img
                  src={car1}
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="grid-content relative border-white border-l-2 pt-3">
                  <h2 className="text-xl tracking-widest px-5 pt-2 text-white group-hover:text-gray-300 group-hover:underline-offset-4">
                    DISCOVER BESPOKE
                  </h2>

                  <h3 className="px-5 pt-4 text-lg text-gray-300 group-hover:text-gray-400 tracking-wide">
                    Choose from our exclusive collection or collaborate with our
                    craftspeople and designers to create a Rolls-Royce wholly
                    unique to you. This is Rolls-Royce Bespoke.
                  </h3>
                </div>
              </a>
            </li>

            <li>
              <a href="#" className="group block overflow-hidden">
                <img
                  src={car2}
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="grid-content relative border-white border-l-2 pt-3">
                  <h2 className="text-xl tracking-widest px-5 pt-2 text-white group-hover:text-gray-300 group-hover:underline-offset-4">
                    DISCOVER CULLINAN SERIES II
                  </h2>

                  <h3 className="px-5 pt-4 text-lg text-gray-300 group-hover:text-gray-400 tracking-wide">
                    Formidable in presence. Extraordinary in craftsmanship.
                    Experience the freedom to go anywhere, effortlessly with
                    this enhanced icon.
                  </h3>
                </div>
              </a>
            </li>

            <li>
              <a href="#" className="group block overflow-hidden">
                <img
                  src={car3}
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="grid-content relative border-white border-l-2 pt-3">
                  <h2 className="text-xl tracking-widest px-5 pt-2 text-white group-hover:text-gray-300 group-hover:underline-offset-4">
                    BLACK BADGE CULLINAN SERIES II
                  </h2>

                  <h3 className="px-5 pt-4 text-lg text-gray-300 group-hover:text-gray-400 tracking-wide">
                    Exquisite materials meet commanding design. An alter ego
                    designed to defy boundaries, wherever it prevails.
                  </h3>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Type