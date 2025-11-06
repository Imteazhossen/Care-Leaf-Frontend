import React from "react";
import CountUp from "react-countup";
import { FaSeedling, FaLeaf, FaUsers, FaFlask } from "react-icons/fa";

const Numbers = () => {
  return (
    <section className="my-16 bg-gradient-to-b from-green-50 to-green-100 py-16 rounded-3xl shadow-inner">
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-extrabold text-green-800">
          Growing with Innovation 🌱
        </h1>
        <p className="mt-4 text-green-700 text-lg max-w-2xl mx-auto">
          At <span className="font-semibold">CareLeaf</span>, we combine AI and agricultural science 
          to detect plant diseases, support farmers, and promote sustainable growth.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6 md:px-16">
        {/* Datasets */}
        <div className="bg-white rouded-xl shadow-md hover:shadow-xl transition p-8 text-center">
          <div className="flex justify-center mb-4">
            <FaLeaf className="text-green-500 text-5xl" />
          </div>
          <h2 className="text-5xl font-extrabold text-green-700">
            <CountUp end={1200} duration={10} />+
          </h2>
          <p className="mt-3 text-green-700 font-semibold">Leaf Images Trained</p>
        </div>

        {/* Models */}
        <div className="bg-white rouded-xl shadow-md hover:shadow-xl transition p-8 text-center">
          <div className="flex justify-center mb-4">
            <FaFlask className="text-green-500 text-5xl" />
          </div>
          <h2 className="text-5xl font-extrabold text-green-700">
            <CountUp end={8} duration={5} />+
          </h2>
          <p className="mt-3 text-green-700 font-semibold">AI Models Tested</p>
        </div>

        {/* Collaborations */}
        <div className="bg-white rouded-xl shadow-md hover:shadow-xl transition p-8 text-center">
          <div className="flex justify-center mb-4">
            <FaUsers className="text-green-500 text-5xl" />
          </div>
          <h2 className="text-5xl font-extrabold text-green-700">
            <CountUp end={15} duration={5} />+
          </h2>
          <p className="mt-3 text-green-700 font-semibold">Research Collaborations</p>
        </div>

        {/* Accuracy */}
        <div className="bg-white rouded-xl shadow-md hover:shadow-xl transition p-8 text-center">
          <div className="flex justify-center mb-4">
            <FaSeedling className="text-green-500 text-5xl" />
          </div>
          <h2 className="text-5xl font-extrabold text-green-700">
            <CountUp end={97} duration={8} />%
          </h2>
          <p className="mt-3 text-green-700 font-semibold">Model Accuracy</p>
        </div>
      </div>
    </section>
  );
};

export default Numbers;
