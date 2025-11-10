import { useEffect, useState } from "react";

// Utility function to get random number between min and max
function rand(min, max) {
  return Math.random() * (max - min) + min;
}

export default function FloatingBalls({
  count = 200,
  color = "#4CAF50", // default light purple
  speed = 2, // speed multiplier (higher = faster)
}) {
  const [balls, setBalls] = useState([]);

  useEffect(() => {
    const arr = Array.from({ length: count }).map((_, i) => {
      const size = rand(6, 14);
      const x = rand(0, 100);
      const y = rand(0, 100);
      const dx = rand(-10, 10); // move farther horizontally
      const dy = rand(-8, 8); // move farther vertically
      const dur = rand(4, 8) / speed; // smaller duration = faster motion
      const delay = rand(-dur, 0);
      const opacity = rand(0.25, 0.8);
      const blur = rand(0, 1.5);
      return { id: i, size, x, y, dx, dy, dur, delay, opacity, blur };
    });
    setBalls(arr);
  }, [count, speed]);

  return (
    <>
      {/* Animation keyframes */}
      <style>{`
        @keyframes floating-drift {
          from {
            transform: translate(var(--x), var(--y)) scale(1);
          }
          to {
            transform: translate(
              calc(var(--x) + var(--dx)),
              calc(var(--y) + var(--dy))
            ) scale(1);
          }
        }
      `}</style>

      {/* Floating balls container */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        {balls.map((b) => (
          <span
            key={b.id}
            className="absolute top-0 left-0 rounded-full will-change-transform"
            style={{
              ["--x"]: `${b.x}vw`,
              ["--y"]: `${b.y}vh`,
              ["--dx"]: `${b.dx}vw`,
              ["--dy"]: `${b.dy}vh`,
              width: `${b.size}px`,
              height: `${b.size}px`,
              background: color,
              opacity: b.opacity,
              filter: `blur(${b.blur}px)`,
              animation: `floating-drift ${b.dur}s ease-in-out ${b.delay}s infinite alternate`,
            }}
          />
        ))}
      </div>
    </>
  );
}
