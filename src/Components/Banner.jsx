import React from "react";
import { FaLeaf } from "react-icons/fa";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section   className="w-full py-12 md:py-20 bg-transparent flex justify-center items-center">
      <div className="
        w-[90%] md:w-[80%]
        bg-white
        p-8 md:p-14
        rounded-3xl
        shadow-xl
        border-2 
        border-transparent
        bg-gradient-to-br 
        from-green-200/60 to-green-50/40
        relative
      ">

        {/* Gradient Border Wrapper */}
        <div className="
          absolute inset-0 
          rounded-3xl 
          p-[3px]
          bg-gradient-to-r 
          from-green-50 via-yellow-50 to-green-50
          opacity-60
          pointer-events-none
        "></div>

        {/* Title Section */}
        <div className="relative text-center space-y-4">
          <h1 className="text-3xl md:text-5xl font-extrabold text-green-700 flex justify-center items-center gap-3">
            <FaLeaf className="text-green-500 animate-bounce" />
            Smart Gourd Leaf Disease Detector
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Instantly identify disease type and severity using our AI 
            model deployed on HuggingFace.
          </p>
        </div>

        {/* Card-style CTA Button */}
        <div className="flex justify-center mt-12 relative">
          <motion.a
            href="https://huggingface.co/spaces/nosttradamus/advanced-bottlegourd-classifier"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.98 }}
            className="
              group
              bg-white
              shadow-xl
              rounded-3xl
              p-6
              w-full md:w-[420px]
              border-[3px]
              border-green-400
              transition-all duration-300
              cursor-pointer
              relative
              overflow-hidden
            "
          >
            {/* Glow effect */}
            <div className="
              absolute inset-0 
              bg-gradient-to-r 
              from-green-400 via-lime-300 to-green-400
              opacity-0
              group-hover:opacity-20
              blur-xl
              transition-all 
              duration-500
            "></div>

            <div className="relative flex flex-col items-center gap-3 text-center">
              <span className="text-2xl font-bold text-green-700">
                Analyze Disease
              </span>
              <p className="text-gray-600 text-sm">
                Use our HuggingFace-powered model to detect leaf disease & severity estimation.
              </p>

              {/* Button inside card */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="
                  bg-green-600 
                  hover:bg-green-700
                  text-white font-bold
                  px-6 py-3
                  rounded-xl
                  shadow-md 
                  mt-3
                  transition-all
                "
              >
                Start Analysis
              </motion.div>
            </div>
          </motion.a>
        </div>

        {/* Footer note */}
        <p className="text-center text-gray-500 mt-8 text-sm relative">
          Powered by BottleGourdNet for high-accuracy predictions.
        </p>
      </div>
    </section>
  );
};

export default Banner;
