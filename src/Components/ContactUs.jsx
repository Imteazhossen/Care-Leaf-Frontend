import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router'; // ✅ Correct import
import contactBg from "../assets/contact-bg.jpg";

export default function ContactUs() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <section
      className="relative mx-auto max-w-7xl mb-10 px-4 sm:px-4 lg:px-4"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <div
        className="relative overflow-hidden rounded-lg h-[360px] sm:h-[420px] md:h-[500px] lg:h-[560px]"
        style={{
          backgroundImage: `url(${contactBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 h-full w-full grid place-items-center text-center text-white">
          <div className="flex flex-col items-center gap-8 md:gap-10">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
              Got a Project?
            </h2>
            <p className="max-w-md text-sm md:text-base opacity-90">
              Let’s collaborate to build AI solutions that detect bottle gourd leaf diseases 
              and support smarter farming decisions.
            </p>
          </div>
        </div>
      </div>

      {/* Floating Button — only visible inside the section */}
      {isHovered && (
        <Link
          to="/contact"
          aria-label="Contact us"
          className="fixed grid place-items-center rounded-full bg-green-600 text-white shadow-xl"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            transform: "translate(-50%, -50%)",
            width: "90px",
            height: "90px",
            zIndex: 50,
            cursor: "pointer",
          }}
        >
          <span className="flex flex-col items-center">
            <span className="text-[10px] sm:text-xs font-semibold">Contact us</span>
            <ArrowUpRight className="mt-1 h-4 w-4 sm:h-5 sm:w-5 text-white" />
          </span>
        </Link>
      )}
    </section>
  );
}
