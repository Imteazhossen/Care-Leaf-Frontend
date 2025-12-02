import React, { useState } from "react";
import { FaLeaf, FaCloudUploadAlt } from "react-icons/fa";

const Banner = () => {
  const [image, setImage] = useState(null); // preview image
  const [file, setFile] = useState(null);   // actual file
  const [result, setResult] = useState(null); // prediction results
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const selected = e.target.files[0];
    console.log(selected);
    if (selected) {
      setFile(selected);
      // console.log(setFile);
      setImage(URL.createObjectURL(selected));
      setResult(null); // reset old result
    }
  };

  const handleAnalyze = async () => {
    if (!file) {
      alert("Please upload an image first!");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    console.log(formData);
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:8000/predict", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setResult(data);
    } catch (err) {
      console.error("Prediction error:", err);
    }

    setLoading(false);
  };

  return (
    <section className="w-full py-10 md:py-16 bg-transparent flex justify-center items-center">
      <div className="w-[90%] md:w-[80%] border-2 border-green-200 rounded-3xl shadow-xl bg-white p-6 md:p-12">

        {/* Title */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-green-700 flex justify-center items-center gap-3">
            <FaLeaf className="text-green-500 animate-bounce" />
            Smart Gourd Leaf Disease Detector
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Upload an image of a bottle gourd leaf and let our AI analyze the disease 
            and severity using our Hybrid CNN model.
          </p>
        </div>

        {/* Upload Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-10">
          
          {/* Upload Box */}
          <div className="flex flex-col justify-center items-center bg-green-50 border-2 border-green-200 p-6 rounded-xl shadow-sm hover:shadow-md transition w-full md:w-1/2">
            
            <label htmlFor="leaf-upload" className="cursor-pointer flex flex-col items-center">
              <FaCloudUploadAlt className="text-6xl text-green-500 hover:scale-110 transition-transform duration-300" />
              <p className="text-gray-600 mt-3">Click to upload leaf image</p>

              <input 
                id="leaf-upload" 
                type="file" 
                accept="image/*" 
                className="hidden"
                onChange={handleImageChange}
              />
            </label>

            {/* Preview */}
            {image && (
              <div className="mt-5 rounded-xl">
                <img
                  src={image}
                  alt="Uploaded Leaf"
                  className="rounded-xl h-48 w-48 object-cover border-2 border-green-300"
                />
              </div>
            )}

            {/* Button */}
            <button 
              onClick={handleAnalyze}
              className="btn btn-success mt-5 rounded-full px-8 text-white"
            >
              {loading ? "Analyzing..." : "Analyze Disease"}
            </button>

            {/* Results */}
            {result && (
              <div className="mt-6 text-center">
                <h3 className="text-xl font-bold text-green-700">Prediction Result</h3>
                <p className="text-gray-700 mt-1">
                  <span className="font-semibold">Disease:</span> {result.disease}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Severity:</span> {result.severity}
                </p>

                {/* Grad-CAM image */}
                {result.heatmap && (
                  <img
                    src={`data:image/png;base64,${result.heatmap}`}
                    alt="Heatmap"
                    className="mt-4 rounded-xl border-2 border-green-300 w-48 h-48 object-cover"
                  />
                )}
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;
