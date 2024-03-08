import React from "react";
import Bmwhero from "../../Images/Hero/bmwhero.jpg";
import Astrhero from "../../Images/Hero/Astonhero.jpg";

function LandingHero() {
  return (
    <>
      <section className="">
        <div className="bg-black text-white py-10 ">
          <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
            <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
              <h1 className="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose">
                ALPHA Cars
              </h1>
              <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">
                Rental Services
              </h2>
              <p className="text-sm md:text-base text-gray-50 mb-4">
                Explore your favourite Places and register now to book cars at
                affordable prizes.
              </p>
              <a
                href="#"
                className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
              >
                Explore Now
              </a>
            </div>
            <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
              <div className="h-48 flex flex-wrap content-center justify-evenly">
                <div>
                  <img
                    className="mt-28 hidden xl:block dfc rounded-lg"
                    src={Bmwhero}
                  />
                </div>
                <div>
                  <img
                    className="inline-block mt-20 md:mt-0 p-8 md:p-0 dfc1"
                    src={Astrhero}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LandingHero;
