import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

import {myImg} from "../assets/index";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto bg-black">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px]
      mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#0066CC]" />
          <div className="w-1 sm:h-80 h-40 blue-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white-100`}>
            Olá, eu sou <span className="text-[#0066CC]">Vinicius</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Desenvolvedor fullstack <br className="sm:block hidden" />
          </p>
        </div>
        <div className=" w-72  h-72 right-0" >
          <img className="w-max h-max rounded-full"  src={myImg} alt="" />
        </div>
      </div>



      <ComputersCanvas/>


      <div className="absolute xs:bottom-10 bottom-20 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-white mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
