import React from "react";
import { FaBrain, FaSeedling, FaGlobeAsia } from "react-icons/fa";
import leafAI from "../assets/leaf-ai.jpg"; // 🌿 replace this with your own image
import ParticlesBackground from "./ParticlesBackground";

const MissionSection = () => {
  return (

    <section className="bg-transparent border-2 border-green-200 py-20 px-6 md:px-16">
      <ParticlesBackground color="#008000" density={100} />
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div className="flex justify-center">
          <img
            src={leafAI}
            alt="AI detecting plant disease"
            className="rounded-3xl shadow-xl w-10/12 hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right: Text Content */}
        <div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-green-800 mb-6 leading-snug">
            Empowering Farmers with <br />
            <span className="text-green-600">AI-driven Plant Health Detection</span>
          </h2>

          <p className="text-green-700 mb-6 text-lg leading-relaxed">
            <span className="font-semibold">CareLeaf</span> bridges the gap between technology and
            agriculture. Our AI model detects and classifies gourd leaf diseases from simple images,
            allowing farmers to identify issues early and take timely actions — all through a
            simple, accessible interface.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            <div className="bg-white rouded-xl shadow-md p-6 hover:shadow-lg transition">
              <FaBrain className="text-green-500 text-4xl mb-3" />
              <h3 className="font-bold text-green-700 text-lg">AI Innovation</h3>
              <p className="text-green-600 text-sm mt-2">
                We use deep learning models to identify and classify leaf diseases with high accuracy.
              </p>
            </div>

            <div className="bg-white rouded-xl shadow-md p-6 hover:shadow-lg transition">
              <FaSeedling className="text-green-500 text-4xl mb-3" />
              <h3 className="font-bold text-green-700 text-lg">Sustainability</h3>
              <p className="text-green-600 text-sm mt-2">
                Promoting healthy crops and minimizing pesticide use through early disease detection.
              </p>
            </div>

            <div className="bg-white rouded-xl shadow-md p-6 hover:shadow-lg transition">
              <FaGlobeAsia className="text-green-500 text-4xl mb-3" />
              <h3 className="font-bold text-green-700 text-lg">Global Reach</h3>
              <p className="text-green-600 text-sm mt-2">
                Designed to assist both local and international farmers with scalable technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
