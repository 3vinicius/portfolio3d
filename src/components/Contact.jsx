import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { slideIn } from "../utils/motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { EarthCanvas } from "./canvas";

import { githubIcon, linkedinIcon, email, whats } from "../assets/index";

const Contact = () => {
  return (
    <div className="flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <div className="flex flex-row justify-around content-center">
          <ul className="p-5 ">
            <h3 className={`${styles.sectionSubText} `}>Contato</h3>
            <li className="mb-3 border-t-4 pt-5">
              <a
                href="https://wa.me/5582999572271"
                title="Contato via WhatsApp"
                target="_blank"
                rel="noreferrer"
              >
                <span className="inline-block">
                  <img src={whats} alt="" srcset="" />
                </span>{" "}
                <p className="inline-block">Telefone :</p>
                <p>+55 (82) 99957-2271</p>
              </a>
            </li>

            <li>
              <a
                title="Contato por e-mail"
                href="mailto:amorimvinicius3@gmail.com"
                rel="noreferrer"
                target="_blank"
              >
                <span className="inline-block">
                  <img src={email} alt="" srcset="" />
                </span>{" "}
                <p className="inline-block">Email :</p>
                <p>amorimvinicius3@gmail.com</p>
              </a>
            </li>
          </ul>

          <ul className="p-5 ">
            <h3 className={`${styles.sectionSubText} `}>Social</h3>
            <div className='flex mb-3 border-t-4 pt-5 gap-5'>
              <li className=" m-auto ">
                <a
                  href="https://www.linkedin.com/in/viniciusaamorim/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedinIcon} className="h-10" alt="" srcset="" />
                </a>
              </li>

              <li className=" m-auto">
                <a
                  href="https://github.com/3vinicius"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={githubIcon} alt="" className="h-10" srcset="" />
                </a>
              </li>
            </div>
          </ul>

         
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
