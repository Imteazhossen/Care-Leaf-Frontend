import { motion } from "framer-motion";
import futureImg from "../assets/imteaz-web.png"; // replace with your relevant image

const FutureScopeSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
      {/* Image Left */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl overflow-hidden shadow-lg"
      >
        <img
          src={futureImg}
          alt="Future Scope"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </motion.div>

      {/* Text Right */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-[#3E3E3E]"
      >
        <h2 className="text-3xl font-bold text-green-700 mb-4">
          Future Scope & Impact
        </h2>
        <p className="leading-relaxed text-lg">
          In the future, Care-Leaf aims to expand beyond bottle gourd leaves to cover other crops
          such as tomato, potato, and rice. Integrating IoT-based sensors and mobile applications
          will allow farmers to capture real-time data from their fields. With continuous learning
          and cloud updates, the model can become more accurate and accessible, promoting smart
          agriculture and sustainability in Bangladesh.
        </p>
      </motion.div>
    </section>
  );
};

export default FutureScopeSection;
