"use client";

export default function AnimatedBackground() {
  return (
    <>
      {/* Crveni animirani krugovi so glow efekt - pojasneti */}
      <div
        aria-hidden="true"
        className="absolute top-[-15rem] left-[-15rem] w-[36rem] h-[36rem] bg-gradient-to-tr from-red-900 via-red-700 to-red-800 opacity-60 rounded-full blur-[140px] animate-float-fast mix-blend-screen pointer-events-none"
        style={{ filter: "drop-shadow(0 0 20px rgba(239,68,68,1))" }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[-10rem] right-[-10rem] w-[28rem] h-[28rem] bg-gradient-to-br from-red-950 via-red-800 to-red-900 opacity-50 rounded-full blur-[120px] animate-float-slow mix-blend-screen pointer-events-none"
        style={{ filter: "drop-shadow(0 0 15px rgba(239,68,68,0.8))" }}
      />

      {/* SVG branovi - posilni crveni prelazi */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1440 320"
        style={{ zIndex: 0 }}
      >
        <path
          className="animate-wave-fast"
          fill="rgba(255, 0, 0, 0.55)"
          d="M0,64L80,106.7C160,149,320,235,480,245.3C640,256,800,192,960,165.3C1120,139,1280,149,1360,154.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
        <path
          className="animate-wave-slow"
          fill="rgba(180, 0, 0, 0.45)"
          d="M0,224L80,197.3C160,171,320,117,480,117.3C640,117,800,171,960,202.7C1120,235,1280,245,1360,250.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes wave {
          0%, 100% {
            transform: translateX(0) translateY(0) rotate(0deg);
          }
          50% {
            transform: translateX(-25px) translateY(10px) rotate(1deg);
          }
        }

        @keyframes floatFast {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.05);
          }
        }

        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-10px) scale(1.02);
          }
        }

        .animate-wave-fast {
          animation: wave 5s ease-in-out infinite;
        }

        .animate-wave-slow {
          animation: wave 8s ease-in-out infinite;
          animation-delay: 2s;
        }

        .animate-float-fast {
          animation: floatFast 6s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: floatSlow 10s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
