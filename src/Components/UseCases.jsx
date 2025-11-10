import { useState } from "react";
import aniquaImg from "../assets/aniqua.jpeg";
import FloatingBalls from "../Components/FloatingBalls";

export default function UseCases() {


  const CASES = [
    {
      id: 1,
      name: "Md Imteaz Hossen",
      role: "Web Developer | AI ML Engineer",
      university: "University of Liberal Arts Bangladesh",
      field: "Computer Science and Engineering",
      img: aniquaImg,
      about:
        "Specializes in machine learning and data analysis. Leads the project’s AI model development, focusing on disease classification accuracy and dataset refinement.",
    },
    {
      id: 2,
      name: "Aniqua Nawar",
      role: "AI ML Engineer",
      university: "University of Liberal Arts Bangladesh",
      field: "Computer Science and Engineering",
      img: aniquaImg,
      about:
        "In this project, I conducted extensive research on plant disease detection using deep learning techniques. My focus was on developing and evaluating a Hybrid CNN model alongside the VGG19 architecture to classify bottle gourd plant diseases and estimate their severity levels.",
    },
    {
      id: 3,
      name: "Sadia Islam",
      role: "AI ML Engineer",
      university: "University of Liberal Arts Bangladesh",
      field: "Computer Science and Engineering",
      img: aniquaImg,
      about:
        "Handles dataset preprocessing, visualization, and pattern analysis. Focused on preparing clean and balanced data for training and testing deep learning models.",
    },
    {
      id: 4,
      name: "Mahimuz Zaman",
      role: "AI ML Engineer",
      university: "University of Liberal Arts Bangladesh",
      field: "Computer Science and Engineering",
      img: aniquaImg,
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
                  <p className="text-xl font-semibold text-white sm:text-xl">
                    {c.name}
                  </p>
                  <p className="text-xl font-semibold text-white sm:text-xl">
                    {c.role}
                  </p>
                  <i className="mt-1 text-md text-white/85 sm:text-md">{c.university}</i>
                  <p className="mt-1 text-md text-white/85 sm:text-md">{c.field}</p>
                  <p className="mt-1 text-md text-white/85 sm:text-md">{c.about}</p>
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
