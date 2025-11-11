import { useState } from "react";
import aniquaImg from "../assets/aniqua-2.png";
import mahimuzImg from "../assets/mahimuz.jpeg";
import imteazImg from "../assets/imteaz-web.png";
import FloatingBalls from "../Components/FloatingBalls";

export default function UseCases() {


  const CASES = [
    {
      id: 1,
      name: "Md Imteaz Hossen",
      role: "Web Developer | AI ML Engineer",
      university: "University of Liberal Arts Bangladesh",
      field: "Computer Science and Engineering",
      img: imteazImg,
      about:
        "In this project, I selected the research area of plant disease detection and conducted extensive research on the topic using deep learning techniques. I developed and evaluated a Hybrid CNN model along with several other model architectures to classify bottle gourd plant diseases and estimate their severity levels. I also designed and implemented the severity estimation function to analyze disease stages. In addition to the research and model development, I built both the frontend and backend of our web application Care-Leaf. I used Matplotlib to visualize and analyze model performance through various graphs. Furthermore, I integrated several useful packages and features into the website to enhance its functionality and user experience. I also presented the concepts of image segmentation and severity estimation as part of the project’s implementation.",
    },
    {
      id: 2,
      name: "Aniqua Nawar",
      role: "AI ML Engineer",
      university: "University of Liberal Arts Bangladesh",
      field: "Computer Science and Engineering",
      img: aniquaImg,
      about:
        "In this project, I conducted extensive research on plant disease detection using deep learning techniques. My focus was on optimizing and evaluating a Hybrid CNN model alongside the VGG19 architecture to classify bottle gourd plant diseases and estimate their severity levels. I analyzed the performance of both models to determine which provided higher accuracy and efficiency for disease classification and severity estimation. Through this work, I contributed to improving the model selection process and enhancing the overall effectiveness of the Bottle Gourd plant disease detection system.",
    },
    {
      id: 3,
      name: "Sadia Islam",
      role: "AI ML Engineer",
      university: "University of Liberal Arts Bangladesh",
      field: "Computer Science and Engineering",
      img: aniquaImg,
      about:
        "In this capstone project, I have contributed to multiple key areas including: Topic Research – conducted background research on the project and related studies; Literature Review – prepared a detailed literature review summarizing existing works and identifying research gaps; Model Selection – took part in choosing suitable deep learning models; Model Development – built, implemented, and trained the EfficientNetB0 and ResNet50+CBAM models; Report Writing – authored and organized major sections of the project report, ensuring clarity, coherence, and technical accuracy.",
    },
    {
      id: 4,
      name: "Mahimuz Zaman",
      role: "AI ML Engineer",
      university: "University of Liberal Arts Bangladesh",
      field: "Computer Science and Engineering",
      img: mahimuzImg,
      about:
        "Designs and manages the backend system, API integration, and database operations to support efficient data flow between the web app and AI model.",
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <section className="relative mx-auto my-10 w-full  overflow-hidden rounded-lg border border-black/5 bg-white">
      {/* Background pattern */}
      {/* <div className="absolute inset-0 -z-10 opacity-30">
        <img src={bgSrc} alt="" className="w-full h-full object-cover" />
      </div> */}
      <FloatingBalls color="#4CAF50" speed={3}></FloatingBalls>

      {/* Content */}
      <div className="px-3 sm:px-4 md:px-6 lg:px-32 py-20">
        <h2 className="pb-6 text-3xl font-semibold tracking-tight text-[#3E3E3E] sm:text-4xl md:text-5xl">
          OUR TEAM
        </h2>

        {/* Horizontal accordion */}
        <div
          className="
            relative z-10 flex h-[400px] gap-3 overflow-hidden rounded-xl
            sm:h-[420px] md:h-[440px] lg:h-[460px] xl:h-[500px]
            flex-col sm:flex-row
          "
        >
          {CASES.map((c, i) => {
            const isActive = active === i;

            return (
              <button
                key={c.id}
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onBlur={() => setActive(null)}
                className={`
                  group relative isolate overflow-hidden rounded-xl
                  ring-1 ring-black/10
                  transition-[flex-grow] duration-500 ease-out
                  ${isActive ? "flex-[5]" : "flex-[1.2]"}
                  h-64 sm:h-auto
                `}
                aria-label={c.name}
              >
                {/* Image */}
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={c.img}
                    alt={c.name}
                    className={`
                      w-full h-full object-cover object-center
                      transition-all duration-500 ease-out
                      ${isActive ? "grayscale-0 scale-105" : "grayscale brightness-75"}
                    `}
                  />
                </div>

                {/* Gradient overlay */}
                <div
                  className="
                    pointer-events-none absolute inset-0
                    bg-gradient-to-t from-black/70 via-black/30 to-transparent
                    transition-opacity duration-500 ease-out
                    group-hover:opacity-90
                  "
                />

                {/* Text content */}
                <div
                  className={`
                    absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-left
                    transition-all duration-500 ease-out
                    ${isActive ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}
                  `}
                >
                  <p className="text-xl font-extrabold text-white sm:text-xl">
                    {c.name}
                  </p>
                  <p className="text-xl font-extrabold text-white sm:text-xl">
                    {c.role}
                  </p>
                  <i className="mt-1 text-sm text-white/85 font-semibold sm:text-sm">{c.university}</i>
                  <p className="mt-1 text-sm text-white/85 font-semibold sm:text-sm">{c.field}</p>
                  <p className="mt-1 text-sm text-white/85  font-semibold sm:text-sm">{c.about}</p>
                </div>

                {/* Border glow on active */}
                <div
                  className={`
                    pointer-events-none absolute inset-0 rounded-xl ring-2
                    transition-opacity duration-500
                    ${isActive ? "ring-[#7B5BD1]/50 opacity-100" : "opacity-0"}
                  `}
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
