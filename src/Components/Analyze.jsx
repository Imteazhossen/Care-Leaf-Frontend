import React, { useState } from "react";
import { FaUpload, FaLeaf, FaMicroscope } from "react-icons/fa";
import { motion } from "framer-motion";
import { Client } from "@gradio/client";
import ReactMarkdown from "react-markdown";

/* ---------- Frontend Formatter ---------- */
const formatAnalysisText = (html) => {
  if (!html) return "";

  return html
    .replace(/<span[^>]*>/gi, "")
    .replace(/<\/span>/gi, "")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/Disease Detection Results/gi, "## Disease Detection Results")
    .replace(/Severity Assessment/gi, "## Severity Assessment")
    .replace(/Disease Type:/gi, "**Disease Type:**")
    .replace(/Confidence:/gi, "**Confidence:**")
    .replace(/Infected Area:/gi, "**Infected Area:**")
    .replace(/Severity Level:/gi, "**Severity Level:**")
    .replace(/<[^>]+>/g, "")
    .trim();
};

const Analyze = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [analysisText, setAnalysisText] = useState("");
  const [gradcamUrl, setGradcamUrl] = useState("");
  const [error, setError] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
    setAnalysisText("");
    setGradcamUrl("");
    setError("");
  };

  const handleSubmit = async () => {
    if (!image) {
      setError("Please upload a leaf image first.");
      return;
    }

    try {
      setLoading(true);
      const client = await Client.connect(
        "nosttradamus/advanced-bottlegourd-classifier"
      );

      const result = await client.predict("/predict_disease", {
        image: image,
      });

      setAnalysisText(formatAnalysisText(result.data[0]));
      setGradcamUrl(result.data[1]?.url || "");
    } catch (err) {
      setError("Failed to analyze image. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full py-24 bg-gradient-to-b from-green-50 to-white flex justify-center">
      <div className="w-[90%] md:w-[80%]">

        {/* HERO HEADER */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-extrabold text-green-700 flex justify-center items-center gap-3">
            <FaLeaf className="text-green-500" />
            Smart Gourd Leaf Disease Detector
          </h1>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
            Instantly identify disease type and severity using our AI model
            deployed on HuggingFace.
          </p>
        </div>

        {/* ANALYZE CARD */}
        <div className="flex justify-center mb-24">
          <div className="w-full md:w-[520px] bg-white rounded-3xl shadow-xl border-4 border-green-400 p-10 text-center">

            <h2 className="text-3xl font-bold text-green-700 mb-4">
              Analyze Disease
            </h2>
            <p className="text-gray-600 mb-8">
              Use our HuggingFace-powered model to detect leaf disease and
              severity estimation.
            </p>

            {/* Upload */}
            <label className="block border-2 border-dashed border-green-400 rounded-2xl p-6 cursor-pointer hover:bg-green-50 transition mb-6">
              <FaUpload className="text-3xl text-green-600 mx-auto mb-2" />
              <p className="text-sm text-gray-600">
                Upload Bottle Gourd Leaf Image
              </p>
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={handleImageChange}
              />
            </label>

            {preview && (
              <img
                src={preview}
                alt="Uploaded Leaf"
                className="w-56 mx-auto rounded-xl shadow mb-6"
              />
            )}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSubmit}
              disabled={loading}
              className="bg-green-600 text-white px-8 py-3 rounded-xl font-bold shadow-md disabled:opacity-60"
            >
              {loading ? "Analyzing..." : "Start Analysis"}
            </motion.button>

            {error && (
              <p className="text-red-500 text-sm mt-4">{error}</p>
            )}
          </div>
        </div>

        {/* RESULTS */}
        {(analysisText || gradcamUrl) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* Analysis */}
            <div className="bg-green-50 rounded-2xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-green-700 flex items-center gap-2 mb-4">
                
                Analysis Results
              </h3>

              <div className="prose prose-green max-w-none">
                <ReactMarkdown>{analysisText}</ReactMarkdown>
              </div>
            </div>

            {/* GradCAM */}
            <div className="bg-white rounded-2xl p-6 shadow-md border">
              <h3 className="text-xl font-bold text-center text-gray-700 mb-4">
                GradCAM Disease Visualization
              </h3>

              {gradcamUrl ? (
                <img
                  src={gradcamUrl}
                  alt="GradCAM Visualization"
                  className="rounded-xl shadow-lg mx-auto"
                />
              ) : (
                <p className="text-center text-gray-500">
                  GradCAM image not available
                </p>
              )}
            </div>
          </div>
        )}

        {/* FOOTER NOTE */}
        <p className="text-center text-gray-500 mt-20 text-sm">
          Powered by BottleGourdNet for high-accuracy predictions.
        </p>
      </div>
    </section>
  );
};

export default Analyze;
