import { useState, useEffect } from "react";
import Loader from "./Loader";
import { motion } from "framer-motion";
import icon from "../../Img/Home/icon.svg";
import { Link } from "react-router-dom";

import panda from "../../Img/panda.png";
import shelly from "../../Img/shelly.png";
import aliPos from "../../Img/Work/alipos.png";
import ink from "../../Img/Work/ink.png";
import mkas from "../../Img/Work/mkas.png";
import usage from "../../Img/Work/usage.png";

const Work = () => {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
      console.log("loader");
    }, 1000);
  }, []);

  return (
    <>
      {loader && <Loader />}

      <div className="xl:container xl:mx-auto h-auto lg:min-h-screen px-[1rem] md:px-[2rem]  xl:px-[4.5rem]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
          className=" grid grid-cols-1 md:mt-20 md:grid-cols-3 gap-3 pt-8  items-center justify-center "
        >
          <div className=" grid gap-5 col-span-1">
            <Link to={"https://shopnowmm.vercel.app/"} target="_blank">
              <motion.div
                initial={{ scale: 0.7 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  // duration: 0.8,
                  delay: loader ? 0.5 : 0,
                }}
                className=" bg-card-bg box p-4 pb-6.5 rounded-4xl cursor-pointer"
              >
                <img
                  className="rounded-4xl mb-4"
                  src="https://i.pinimg.com/564x/51/98/8f/51988f5be167451bb67e39384ae7d407.jpg"
                  alt=""
                />
                <div className=" flex items-center justify-between ">
                  <div className="">
                    <p className="  text-xs uppercase mb-0 text-card-para opacity-50">
                      Web designing
                    </p>
                    <h6 className="  text-card-para font-medium text-lg">
                      Shop App
                    </h6>
                  </div>
                  <span className="transition duration-300 text-card-para linkicon opacity-20">
                    <img src={icon} alt="" className="" />
                  </span>
                </div>
              </motion.div>
            </Link>
            <Link to={"https://flowyark.vercel.app/"} target="_blank">
              <motion.div
                initial={{ scale: 0.7 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  // duration: 0.8,
                  delay: loader ? 0.5 : 0,
                }}
                className="  bg-card-bg box p-4 pb-6.5 rounded-4xl cursor-pointer"
              >
                <img
                  className="rounded-4xl mb-4"
                  src="https://i.pinimg.com/564x/29/92/21/2992215e831d4ca10e9ff70852cab051.jpg"
                  alt=""
                />
                <div className=" flex items-center justify-between ">
                  <div className="">
                    <p className="  text-xs uppercase mb-0 text-card-para opacity-50">
                      Web designing
                    </p>
                    <h6 className="  text-card-para font-medium text-lg">
                      Flow Yak
                    </h6>
                  </div>
                  <span
                    href="https://flowyark.vercel.app/"
                    className="transition duration-300 text-card-para linkicon opacity-20"
                  >
                    <img src={icon} alt="" className="" />
                  </span>
                </div>
              </motion.div>
            </Link>
          </div>

          <div className=" col-span-2">
            <motion.div
              initial={{ scale: 0.7 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: loader ? 0.5 : 0,
              }}
              className="  flex justify-center items-center"
            >
              <img
                src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/star-2.png"
                alt=""
              />
              <h1 className=" text-white font-extrabold text-3xl md:text-5xl lg:text-6xl uppercase ">
                All projects
              </h1>
              <img
                src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/star-2.png"
                alt=""
              />
            </motion.div>

            <div className=" ">
              <div className=" md:my-6 grid grid-cols-1 md:grid-cols-2 gap-5 item-center ">
                <Link
                  to={"https://incomeusage.vercel.app/"}
                  target="_blank"
                >
                  <motion.div
                    initial={{ scale: 0.7 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      // duration: 0.8,
                      delay: loader ? 0.5 : 0,
                    }}
                    className=" bg-card-bg box p-4 pb-6.5 rounded-4xl cursor-pointer"
                  >
                    <img
                      className="rounded-4xl mb-4"
                      src={usage}
                      alt=""
                    />
                    <div className=" flex items-center justify-between ">
                      <div className="">
                        <p className="  text-xs uppercase mb-0 text-card-para opacity-50">
                          Web developing
                        </p>
                        <h6 className="  text-card-para font-medium text-lg">
                          Usage
                        </h6>
                      </div>
                      <span
                        href="https://contact-app-pearl.vercel.app/"
                        className="transition duration-300 text-card-para linkicon opacity-20"
                      >
                        <img src={icon} alt="" className="" />
                      </span>
                    </div>
                  </motion.div>
                </Link>

                <Link to={"https://pandamr.vercel.app/"} target="_blank">
                  <motion.div
                    initial={{ scale: 0.7 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      // duration: 0.8,
                      delay: loader ? 0.5 : 0,
                    }}
                    className=" bg-card-bg box p-4 pb-6.5 rounded-4xl cursor-pointer"
                  >
                    <img
                      className="rounded-4xl mb-4 mt-6 w-full "
                      src={panda}
                      alt=""
                    />
                    <div className=" flex items-center justify-between mt-6">
                      <div className="">
                        <p className="  text-xs uppercase mb-0 text-card-para opacity-50">
                          Web designing
                        </p>
                        <h6 className="  text-card-para font-medium text-lg">
                          Panda
                        </h6>
                      </div>
                      <span
                        href="https://pandamr.vercel.app/"
                        className="transition duration-300 text-card-para linkicon opacity-20"
                      >
                        <img src={icon} alt="" className="" />
                      </span>
                    </div>
                  </motion.div>
                </Link>
              </div>
              <div className="  md:my-6 grid grid-cols-1 md:grid-cols-2 gap-5 item-center ">
                <Link to={"https://velzon-ten.vercel.app/"} target="_blank">
                  <motion.div
                    initial={{ scale: 0.7 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      // duration: 0.8,
                      delay: loader ? 0.5 : 0,
                    }}
                    className=" bg-card-bg box mt-5 md:mt-0 p-4 pb-6.5 rounded-4xl cursor-pointer"
                  >
                    <img
                      className="rounded-4xl mb-4"
                      src="https://i.pinimg.com/564x/70/ed/13/70ed1343ffa5de6bac78558dd6eb37a3.jpg"
                      alt=""
                    />
                    <div className=" flex items-center justify-between ">
                      <div className="">
                        <p className="  text-xs uppercase mb-0 text-card-para opacity-50">
                          Web designing
                        </p>
                        <h6 className="  text-card-para font-medium text-lg">
                          Dashboard
                        </h6>
                      </div>
                      <span
                        href="https://show-now.vercel.app/"
                        className="transition duration-300 text-card-para linkicon opacity-20"
                      >
                        <img src={icon} alt="" className="" />
                      </span>
                    </div>
                  </motion.div>
                </Link>
                <Link to={"https://shelly-school.vercel.app/"} target="_blank">
                  <motion.div
                    initial={{ scale: 0.7 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      // duration: 0.8,
                      delay: loader ? 0.5 : 0,
                    }}
                    className=" bg-card-bg box p-4 pb-6.5 rounded-4xl cursor-pointer"
                  >
                    <img className="rounded-4xl mb-4" src={shelly} alt="" />
                    <div className=" flex items-center justify-between ">
                      <div className="">
                        <p className="  text-xs uppercase mb-0 text-card-para opacity-50">
                          Web designing
                        </p>
                        <h6 className="  text-card-para font-medium text-lg">
                          Shelly
                        </h6>
                      </div>
                      <span
                        href="https://fylo-page-pj.netlify.app/"
                        className="transition duration-300 text-card-para linkicon opacity-20"
                      >
                        <img src={icon} alt="" className="" />
                      </span>
                    </div>
                  </motion.div>
                </Link>

                <Link to={"https://aliposmm.vercel.app/"} target="_blank">
                  <motion.div
                    initial={{ scale: 0.7 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      // duration: 0.8,
                      delay: loader ? 0.5 : 0,
                    }}
                    className=" bg-card-bg box p-4 pb-6.5 rounded-4xl cursor-pointer"
                  >
                    <img className="rounded-4xl mb-4" src={aliPos} alt="" />
                    <div className=" flex items-center justify-between ">
                      <div className="">
                        <p className="  text-xs uppercase mb-0 text-card-para opacity-50">
                          Web development (In progress)
                        </p>
                        <h6 className="  text-card-para font-medium text-lg">
                          Ali Pos
                        </h6>
                      </div>
                      <span
                        href="https://fylo-page-pj.netlify.app/"
                        className="transition duration-300 text-card-para linkicon opacity-20"
                      >
                        <img src={icon} alt="" className="" />
                      </span>
                    </div>
                  </motion.div>
                </Link>

                <Link to={"https://inktattoo.vercel.app/"} target="_blank">
                  <motion.div
                    initial={{ scale: 0.7 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      // duration: 0.8,
                      delay: loader ? 0.5 : 0,
                    }}
                    className=" bg-card-bg box p-4 pb-6.5 rounded-4xl cursor-pointer"
                  >
                    <img className="rounded-4xl mb-4" src={ink} alt="" />
                    <div className=" flex items-center justify-between ">
                      <div className="">
                        <p className="  text-xs uppercase mb-0 text-card-para opacity-50">
                          Web development
                        </p>
                        <h6 className="  text-card-para font-medium text-lg">
                          Ink Tattoo
                        </h6>
                      </div>
                      <span
                        href="https://fylo-page-pj.netlify.app/"
                        className="transition duration-300 text-card-para linkicon opacity-20"
                      >
                        <img src={icon} alt="" className="" />
                      </span>
                    </div>
                  </motion.div>
                </Link>

                <Link to={"https://mkas.vercel.app/"} target="_blank">
                  <motion.div
                    initial={{ scale: 0.7 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      // duration: 0.8,
                      delay: loader ? 0.5 : 0,
                    }}
                    className=" bg-card-bg box p-4 pb-6.5 rounded-4xl cursor-pointer"
                  >
                    <img className="rounded-4xl mb-4" src={mkas} alt="" />
                    <div className=" flex items-center justify-between ">
                      <div className="">
                        <p className="  text-xs uppercase mb-0 text-card-para opacity-50">
                          Web development
                        </p>
                        <h6 className="  text-card-para font-medium text-lg">
                          Mkas
                        </h6>
                      </div>
                      <span
                        href="https://fylo-page-pj.netlify.app/"
                        className="transition duration-300 text-card-para linkicon opacity-20"
                      >
                        <img src={icon} alt="" className="" />
                      </span>
                    </div>
                  </motion.div>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Work;
