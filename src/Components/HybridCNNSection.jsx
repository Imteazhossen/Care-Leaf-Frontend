import { motion } from "framer-motion";
import hybridImg from "../assets/architecture.png"; // replace with your CNN diagram image

const HybridCNNSection = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
            {/* Text Left */}
            <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-[#3E3E3E] order-2 md:order-1"
            >
                <h2 className="text-3xl font-bold text-green-700 mb-4">
                    How the Hybrid CNN Works
                </h2>

                <p className="leading-relaxed text-lg">
                    The <span className="font-semibold">Hybrid CNN</span> is a custom deep learning model built to classify
                    bottle gourd leaf diseases. It combines multiple convolutional layers with
                    <span className="font-semibold"> batch normalization</span> and <span className="font-semibold">dropout</span> to ensure efficient learning
                    and reduce overfitting. The model was fine-tuned using
                    <span className="font-semibold"> GridSearchCV</span> for optimal accuracy.
                </p>

                <p className="leading-relaxed text-lg mt-4">
                    Convolutional layers extract key features such as edges, color textures, and
                    disease patterns. Batch normalization stabilizes training, while dropout improves
                    generalization. The extracted features are flattened and passed through
                    <span className="font-semibold"> fully connected layers</span> for final classification.
                </p>

                <p className="leading-relaxed text-lg mt-4">
                    The output layer uses <span className="font-semibold">softmax</span> to categorize each image into
                    <span className="font-semibold"> Fresh</span>, <span className="font-semibold">Anthracnose</span>, or
                    <span className="font-semibold"> Downy Mildew</span>. Achieving about
                    <span className="font-semibold"> 97% accuracy</span>, the Hybrid CNN offers a strong balance of precision,
                    efficiency, and interpretability compared to other models.
                </p>

            </motion.div>

            {/* Image Right */}
            <motion.div
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl overflow-hidden shadow-lg order-1 md:order-2"
            >
                <img
                    src={hybridImg}
                    alt="Hybrid CNN"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
            </motion.div>
        </section>
    );
};

export default HybridCNNSection;
