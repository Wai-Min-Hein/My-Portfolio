import { useEffect, useState } from "react";
import me from "../../Img/me1.png";
import Loader from "./Loader";
import { motion } from "framer-motion";

import { AiOutlineDribbble } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { BiLogoInstagram } from "react-icons/bi";

const Credential = () => {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);
  const name = "Nyan Lin Htet.".split("");


  return (
    <>
      {loader && <Loader />}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{once:true}}
        transition={{
          duration: 0.8,
          delay: 0.5,
        }}
        className="xl:container xl:mx-auto min-h-screen px-[1rem] md:px-[2rem]  xl:px-[4.5rem]  pb-20 flex flex-col md:flex-row items-start justify-between gap-20 mt-14"
      >
        
        <motion.div 
        initial={{ y:'150px',scale:0.8 }}
        whileInView={{ y:0,scale:1 }}
        viewport={{once:true}}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: loader ? 0.5 : 0,
        }}
        className="basis-1/3 bg-card-bg rounded-3xl px-6 py-6 relative mx-auto md:mx-0 md:sticky md:top-[2%]  after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:bg-card-background after:rounded-[2rem] after:opacity-[.25] z-10">
          <div className="   bg-home-gradient rounded-3xl overflow-hidden z-50">
            <img src={me} className="block  sm:w-full sm:h-full" alt="" />
          </div>
          <div className="text-center py-6">
            <h1 className="text-white text-2xl font-semibold">
              {name.map((letter, i) => (
                <span key={i}>{letter}</span>
              ))}
            </h1>
            <p className="text-card-para opacity-50">@davidhanderson</p>
          </div>
          <div className="flex items-center justify-center gap-2 pb-6">
            <span className="w-10 h-10 z-50 group duration-150 grid place-items-center border border-[rgba(255,255,255,0.1)] rounded-full  hover:bg-white relative cursor-pointer after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:bg-card-background after:rounded-[2rem] after:opacity-[.25]">
              <AiOutlineDribbble className="text-white duration-150 group-hover:text-gray text-xl" />
            </span>
            <span className="w-10 h-10 grid hover:bg-white group z-50 cursor-pointer duration-150 place-items-center border border-[rgba(255,255,255,0.1)] rounded-full  relative after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:bg-card-background after:rounded-[2rem] after:opacity-[.25]">
              <CiTwitter className="text-white text-xl group-hover:text-gray duration-150" />
            </span>
            <span className="w-10 h-10 grid hover:bg-white group z-50 cursor-pointer duration-150 place-items-center border border-[rgba(255,255,255,0.1)] rounded-full  relative after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:bg-card-background after:rounded-[2rem] after:opacity-[.25]">
              <BiLogoInstagram className="text-white text-xl group-hover:text-gray duration-150" />
            </span>
            <span className="w-10 h-10 grid hover:bg-white group z-50 cursor-pointer duration-150 place-items-center border border-[rgba(255,255,255,0.1)] rounded-full  relative after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:bg-card-background after:rounded-[2rem] after:opacity-[.25]">
              <FaFacebookF className="text-white text-xl group-hover:text-gray duration-150" />
            </span>
          </div>
          <div className=" z-50 relative">
            <button className="w-full py-2 rounded-xl bg-btn-bg hover:bg-white cursor-pointer hover:text-btn-bg text-white text-lg leading-normal tracking-wider">
              Contact me
            </button>
          </div>
        </motion.div>

        <div className="basis-2/3">
          <motion.div 
          initial={{ scale:0.7 }}
          whileInView={{ scale: 1 }}
          viewport={{once:true}}
          transition={{
            duration: 0.8,
            delay:loader? 0.5:0,
          }}
          className="about">
            <h1 className="c uppercase text-white text-xl font-medium">
              about me
            </h1>
            <p className="text-white text-[1.1rem]  leading-normal tracking-wide opacity-80 mt-6 mb-9">
            I am a front-end developer who use react.js mainly with a focus on web design,state management, appropriate with backend api and problem solving.
            </p>
            
          </motion.div>

          <motion.div 
          initial={{ scale:0.7 }}
          whileInView={{ scale: 1 }}
          viewport={{once:true}}
          transition={{
            duration: 0.8,
            delay:loader? 0.5:0,
          }}
          className="experience mt-10">
            <motion.h1 
            initial={{ x:20, y:60 }}
            whileInView={{ x:0, y:0 }}
            viewport={{once:true}}
            transition={{
              duration: 0.8,
              delay:loader? 0.5:0,
            }}
            className="text-white text-xl font-medium">Experience</motion.h1>
            <h6 className="text-lg text-primary font-normal capitalize mt-2 mb-4">react js developer</h6>
            <p className="text-white opacity-80 text-[1.1rem] leading-normal tracking-wide">During my journey as a React developer, I have completed an intensive React course and gained practical experience by working on various projects. Through these experiences, I have honed my skills and demonstrated my ability to create robust and efficient web applications.</p>
            <p  className="text-white opacity-80 text-[1.1rem] leading-normal tracking-wide mt-4">I also participated in a two-month workshop focused on enhancing my React skills and staying up-to-date with the latest industry trends. During the workshop, I explored advanced topics such as server-side rendering, performance optimization, and state management with React hooks.</p>
          </motion.div>

          <motion.div
          initial={{ scale:0.7 }}
          whileInView={{ scale: 1 }}
          viewport={{once:true}}
          transition={{
            duration: 0.8,
            delay:loader? 0.5:0,
          }}
          className="education mt-10">
            <motion.h1 
            initial={{ x:20, y:60 }}
            whileInView={{ x:0, y:0 }}
            viewport={{once:true}}
            transition={{
              duration: 0.8,
              delay:loader? 0.5:0,
            }}
            className="text-white text-xl font-medium ">Education</motion.h1>
            <h6 className="text-lg text-primary font-normal capitalize mt-2 mb-4">first year student</h6>
            <p className="text-white opacity-80 text-[1.1rem] leading-normal tracking-wide">I successfully completed my matriculation exam in 2019, demonstrating a strong foundation in various subjects, including Mathematics, English. This examination provided me with a comprehensive understanding of core concepts, critical thinking, and problem-solving skills.</p>
            <p className="text-white opacity-80 text-[1.1rem] leading-normal tracking-wide mt-2">I am currently a first-year computer science student pursuing a Bachelor's degree in Computer University Mandalay. Although my education has been impacted by the COVID-19, I have remained dedicated to my studies and have adapted to the challenges presented by remote learning.</p>
          </motion.div>

          <motion.div 
          initial={{ scale:0.7 }}
          whileInView={{ scale: 1 }}
          viewport={{once:true}}
          transition={{
            duration: 0.8,
            delay:loader? 0.5:0,
          }}
          className="skills mt-10">
          <motion.h1 
          initial={{ x:20, y:60 }}
          whileInView={{ x:0, y:0 }}
          viewport={{once:true}}
          transition={{
            duration: 0.8,
            delay:loader? 0.5:0,
          }}
          className="c uppercase text-white text-xl font-medium">
              skills
            </motion.h1>
            <div className="flex items-center justify-between flex-wrap gap-y-6 mt-8">
                <div className="basis-1/2">
                    <span className="text-white opacity-40">80%</span>
                    <h4 className="text-white text-lg font-normal c capitalize">html</h4>
                </div>
                <div className="basis-1/2">
                    <span className="text-white opacity-40">80%</span>
                    <h4 className="text-white text-lg font-normal c capitalize">css</h4>
                </div>
                <div className="basis-1/2">
                    <span className="text-white opacity-40">70%</span>
                    <h4 className="text-white text-lg font-normal c capitalize">javascript</h4>
                </div>
                <div className="basis-1/2">
                    <span className="text-white opacity-40">70%</span>
                    <h4 className="text-white text-lg font-normal c capitalize">react</h4>
                </div>
                <div className="basis-1/2">
                    <span className="text-white opacity-40">85%</span>
                    <h4 className="text-white text-lg font-normal capitalize">tailwind</h4>
                </div>
                <div className="basis-1/2">
                    <span className="text-white opacity-40">70%</span>
                    <h4 className="text-white text-lg font-normal capitalize">bootstrap</h4>
                </div>
            </div>

          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Credential;
