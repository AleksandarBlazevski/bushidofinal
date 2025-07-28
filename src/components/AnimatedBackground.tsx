"use client";

export default function AnimatedBackground() {
  return (
    <>
      <div
        aria-hidden="true"
        className="absolute top-[-15rem] left-[-15rem] w-[36rem] h-[36rem] bg-gradient-to-tr from-red-900 via-red-700 to-red-800 opacity-30 rounded-full filter blur-[140px] animate-pulse mix-blend-screen pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[-10rem] right-[-10rem] w-[28rem] h-[28rem] bg-gradient-to-br from-red-950 via-red-800 to-red-900 opacity-25 rounded-full filter blur-[120px] animate-[pulse_8s_ease-in-out_infinite] mix-blend-screen pointer-events-none"
      />
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1440 320"
        style={{ zIndex: 0 }}
      >
        <path
          className="animate-wave"
          fill="rgba(139, 0, 0, 0.25)"
          d="M0,64L80,106.7C160,149,320,235,480,245.3C640,256,800,192,960,165.3C1120,139,1280,149,1360,154.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
        <path
          className="animate-wave animation-delay-2000"
          fill="rgba(102, 0, 0, 0.18)"
          d="M0,224L80,197.3C160,171,320,117,480,117.3C640,117,800,171,960,202.7C1120,235,1280,245,1360,250.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>

      <style jsx>{`
        @keyframes wave {
          0%,
          100% {
            transform: translateX(0) translateY(0);
          }
          50% {
            transform: translateX(-20px) translateY(5px);
          }
        }
        .animate-wave {
          animation: wave 6s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </>
  );
}
