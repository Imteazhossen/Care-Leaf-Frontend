import React, { useState } from "react";
import { FaLeaf, FaCloudUploadAlt } from "react-icons/fa";
import banner from "../assets/banner-img-1.jpg";
import banner2 from "../assets/banner2.jpg";

const Banner = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <section className="w-full py-10 md:py-16 bg-white flex justify-center items-center">
      <div className="w-[90%] md:w-[80%] border-2 border-green-200 rounded-3xl shadow-xl bg-white p-6 md:p-12">
        {/* Text Section */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-5xl font-extrabold text-green-700 flex justify-center items-center gap-3">
            <FaLeaf className="text-green-500 animate-bounce" />
            Smart Gourd Leaf Disease Detector
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Upload an image of a bottle gourd leaf and let our AI model identify
            the disease and classify its severity. Powered by our own Hybrid CNN Model and
            deep learning for accurate, reliable predictions.
          </p>
        </div>

        {/* Upload Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-10">
          {/* Upload Box */}
          <div className="flex flex-col justify-center items-center bg-green-50 border-2 border-green-200 p-6 rouded-xl shadow-sm hover:shadow-md transition duration-300 ease-in-out w-full md:w-1/2">
            <label
              htmlFor="leaf-upload"
              className="cursor-pointer flex flex-col items-center justify-center"
            >
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

            {image && (
              <div className="mt-5">
                <img
                  src={image}
                  alt="Uploaded Leaf"
                  className="rounded-xl h-48 w-48 object-cover border-2 border-green-300"
                />
              </div>
            )}
            <button className="btn btn-success mt-5 rounded-full px-8 text-white">
              Analyze Disease
            </button>
          </div>

          {/* Right-side Banner Images */}
          <div className="flex flex-col md:w-1/2 gap-4">
            <img
              src={banner}
              alt="Plant Banner"
              className="rouded-xl shadow-md hover:scale-105 transition-transform duration-300"
            />
            <img
              src={banner2}
              alt="Plant Banner 2"
              className="rouded-xl shadow-md hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
