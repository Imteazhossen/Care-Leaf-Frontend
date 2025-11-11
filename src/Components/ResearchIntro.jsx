import { motion } from "framer-motion";
import neuralNetwork from "../assets/neural-network.mp4"; // your video file

const ResearchIntro = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-start">
      {/* Video Left */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl overflow-hidden shadow-lg h-[500px] md:h-[600px] flex items-start"
      >
        <video
          src={neuralNetwork}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-top"
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
          Research Overview
        </h2>

        <p className="leading-relaxed text-lg">
          In the field of agriculture, early detection of plant diseases plays a vital role in
          reducing crop loss and ensuring sustainable farming. Our study explores the use
          of deep learning models for classifying and predicting bottle gourd leaf diseases
          using image-based analysis. Conventional image classification methods often fail
          to capture complex visual patterns, so we implemented several advanced
          Convolutional Neural Network (CNN) architectures, such as Hybrid CNN, VGG19,
          EfficientNetB0, and ResNet50+CBAM, to overcome this limitation.
        </p>

        <p className="leading-relaxed text-lg mt-4">
          The dataset used in our research consists of <span className="font-semibold">Fresh, Anthracnose,</span> and
          <span className="font-semibold"> Downy Mildew</span> leaf images. We applied techniques like GridSearchCV for
          hyperparameter tuning and Stratified K-Fold Cross Validation for balanced model
          evaluation. Our results showed that VGG19 and the Hybrid CNN achieved the
          highest accuracy, while EfficientNetB0 performed faster but required further
          optimization. Additionally, we developed a severity estimation function capable
          of predicting disease stages, mild, moderate, and severe, with high confidence.
        </p>

        <p className="leading-relaxed text-lg mt-4">
          This hybrid approach combines the strengths of multiple CNN architectures to
          provide both accurate classification and interpretable predictions. Using Grad-CAM
          visualization, the model highlights affected areas on leaves, improving transparency
          and user trust. Ultimately, our system supports precision agriculture by equipping
          farmers with early, accurate, and explainable disease detection tools, reducing
          unnecessary pesticide use and improving yield quality.
        </p>
      </motion.div>
    </section>
  );
};

export default ResearchIntro;
