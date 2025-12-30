import React from "react";
import { motion } from "framer-motion";
import aniquaImg from "../assets/aniqua-2.png";
import imteazImg from "../assets/imteaz-zoom.png";
import UseCases from "../Components/UseCases";
import mahimuzImg from "../assets/mahimuz.jpeg"
import sadiaImg from "../assets/sadia.png"

const teamMembers = [
  {
    id: 1,
    name: "Md Imteaz Hossen",
    role: "Web Developer | AI ML Engineer",
    university: "University of Liberal Arts Bangladesh",
    field: "Computer Science and Engineering",
    img: imteazImg,
    email:
      "imteaz.hossen693@gmail.com",
      number: "01621189202"
  },
  {
    id: 2,
    name: "Aniqua Nawar",
    role: "AI ML Engineer",
    university: "University of Liberal Arts Bangladesh",
    field: "Computer Science and Engineering   Email: aniqua.nawar4614@gmail.com",
    img: aniquaImg,
    email:
      "aniqua.nawar.cse@gmail.com",
    number : "01771500675",
   },
  {
    id: 3,
    name: "Sadia Islam",
    role: "AI ML Engineer",
    university: "University of Liberal Arts Bangladesh",
    field: "Computer Science and Engineering",
    img: sadiaImg,
    email:
      " saaadiaislam@gmail.com",
    number: "01771002017",
  },
  {
    id: 4,
    name: "Mahimuz Zaman",
    role: "AI ML Engineer",
    university: "University of Liberal Arts Bangladesh",
    field: "Computer Science and Engineering",
    img: mahimuzImg,
    email:
      " mahimuzzaman2001@gmail.com",
    number: "01301710109",
  },
];

const About = () => {
  return (
    <section className="min-h-screen bg-white text-white px-6 overflow-x-hidden">
      {/* Header Section */}
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-6 text-green-700"
        >
          About Our Project
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="max-w-4xl mx-auto text-[#3E3E3E] text-lg leading-relaxed"
        >
          Our capstone project focuses on developing an AI-powered system that can
          detect and classify bottle gourd leaf diseases using deep learning.
          By analyzing images, the system can identify early signs of infections and
          classify disease severity as mild, moderate, or severe. This helps farmers
          make informed decisions to protect their crops and improve agricultural
          productivity.
        </motion.p>
      </div>

      {/* Mission & Vision Section */}
      <div className="max-w-5xl mx-auto mb-20 grid md:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-emerald-50 rounded-xl p-8 shadow-lg hover:shadow-lime-500/20 transition-shadow duration-300"
        >
          <h2 className="text-3xl font-bold text-green-700 mb-4">Our Mission</h2>
          <p className="text-[#3E3E3E] leading-relaxed">
            Our mission is to apply advanced technologies like Machine Learning, Deep Learning and
            Computer Vision to revolutionize plant disease detection. We aim to
            reduce crop loss, support farmers with reliable tools, and contribute to
            sustainable agriculture in Bangladesh and beyond.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-emerald-50 rounded-xl p-8 shadow-lg hover:shadow-lime-500/20 transition-shadow duration-300"
        >
          <h2 className="text-3xl font-bold text-green-700 mb-4">Our Vision</h2>
          <p className="text-[#3E3E3E] leading-relaxed">
            Our vision is to create a scalable, intelligent system that not only
            identifies diseases but also provides real-time insights, helping to
            build a smarter and more connected agricultural ecosystem.
          </p>
        </motion.div>
      </div>

      {/* Technologies Used */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h2 className="text-3xl font-bold text-green-700 mb-4">
          Technologies We Used
        </h2>
        <p className="text-[#3E3E3E] max-w-3xl mx-auto leading-relaxed">
          Our system integrates Python, TensorFlow, PyTorch, React, and
          Tailwind CSS for both the deep learning model and user interface.
          We’ve also utilized Google Colab for training, Flask for API
          integration, and Hugging Face for using deployed model.
        </p>
      </motion.div>

      {/* Team Section */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl font-bold mb-10 text-green-700"
      >
        Meet Our Team
      </motion.h2>

      <div className="max-w-7xl mx-auto flex flex-col gap-10 px-4">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -120 : 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="bg-emerald-50 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:shadow-lime-500/30 flex flex-col md:flex-row items-center"
          >
            {/* Image Section */}
            <div className="md:w-1/3 w-full h-64 md:h-72 overflow-hidden relative">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Text Section */}
            <div className="p-6 flex flex-col justify-center text-center md:text-left md:w-2/3">
              <h3 className="text-2xl font-semibold mb-2 text-green-700">
                {member.name}
              </h3>
              <p className="text-[#3E3E3E] text-base mb-2 font-medium">
                {member.role}
              </p>
              <p className="text-sm italic text-[#3E3E3E] mb-1">
                {member.university}
              </p>
              <p className="text-sm text-[#3E3E3E] mb-3">{member.field}</p>
              <p className="text-[#3E3E3E] text-sm leading-relaxed">
                {member.email}
              </p>
              <p className="text-[#3E3E3E] text-sm leading-relaxed">
                {member.number}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Use Cases Section */}
      <section className="mt-20">
        <UseCases />
      </section>

      {/* Footer Note */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center mt-16 text-gray-400 text-sm"
      >
        <p>
          © {new Date().getFullYear()} University of Liberal Arts Bangladesh | Capstone
          Project — Bottle Gourd Disease Detection
        </p>
      </motion.div>
    </section>
  );
};

export default About;
