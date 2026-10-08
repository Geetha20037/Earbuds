
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((value) => {
        if (value >= 100) {
          clearInterval(timer);
          return 100;
        }

        return value + 1;
      });
    }, 22);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden bg-[#030303] text-white">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.25) 1px, transparent 1px)",
          backgroundSize: "55px 55px",
        }}
      />

      {/* Large ambient circle */}
      <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.035]" />

      <div className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.04]" />

      <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.05]" />

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="w-full max-w-2xl">

          {/* Top technical label */}
          <div className="mb-14 flex items-center justify-between text-[8px] font-medium uppercase tracking-[0.35em] text-white/30">
            <span>Audio System / 001</span>

            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
              System Online
            </span>
          </div>

          {/* Logo area */}
          <div className="text-center">

            <div className="relative mx-auto h-28 w-28">

              {/* Outer rotating ring */}
              <div className="absolute inset-0 animate-[spin_8s_linear_infinite] rounded-full border border-dashed border-white/20" />

              {/* Inner rotating ring */}
              <div className="absolute inset-4 animate-[spin_5s_linear_infinite_reverse] rounded-full border border-white/10" />

              {/* Center */}
              <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/[0.04] shadow-[0_0_60px_rgba(255,255,255,0.08)]">

                {/* Sonic pulse */}
                <div className="absolute h-3 w-3 animate-ping rounded-full bg-white/30" />

                <span className="relative text-xl font-black tracking-tight">
                  A
                </span>
              </div>
            </div>

            {/* Brand */}
            <h1 className="mt-9 text-5xl font-black tracking-[0.3em] sm:text-7xl">
              AURALIS
            </h1>

            <div className="mt-4 flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-white/20" />

              <span className="text-[9px] font-medium uppercase tracking-[0.6em] text-white/40">
                Pure Sound
              </span>

              <span className="h-px w-12 bg-white/20" />
            </div>
          </div>

          {/* Sound waveform */}
          <div className="relative mx-auto mt-16 h-24 max-w-xl overflow-hidden">

            {/* Center line */}
            <div className="absolute left-0 right-0 top-1/2 h-px bg-white/[0.08]" />

            {/* Wave bars */}
            <div className="absolute inset-0 flex items-center justify-center gap-[3px]">
              {Array.from({ length: 61 }).map((_, index) => {
                const distance = Math.abs(index - 30);
                const height = Math.max(8, 58 - distance * 3);

                return (
                  <span
                    key={index}
                    className="w-[2px] rounded-full bg-white/50 transition-all duration-300"
                    style={{
                      height: `${height + ((index * 13) % 17)}px`,
                      animation: `soundWave ${
                        0.55 + ((index * 7) % 10) / 20
                      }s ease-in-out infinite alternate`,
                      animationDelay: `${(index % 9) * 0.06}s`,
                    }}
                  />
                );
              })}
            </div>

            {/* Scanning line */}
            <div className="absolute bottom-0 top-0 w-px bg-white shadow-[0_0_25px_rgba(255,255,255,0.8)] animate-[scan_2.2s_ease-in-out_infinite]" />
          </div>

          {/* Status */}
          <div className="mx-auto mt-8 flex max-w-xl items-end justify-between">

            <div>
              <p className="text-[9px] uppercase tracking-[0.35em] text-white/25">
                Calibrating audio
              </p>

              <p className="mt-2 text-xs font-medium text-white/50">
                {progress < 35
                  ? "Detecting sound profile..."
                  : progress < 70
                  ? "Tuning acoustic environment..."
                  : progress < 95
                  ? "Optimizing listening experience..."
                  : "Experience ready."}
              </p>
            </div>

            <span className="text-3xl font-light tabular-nums text-white/70">
              {String(progress).padStart(3, "0")}
            </span>
          </div>

          {/* Progress */}
          <div className="mt-5 h-px w-full bg-white/10">
            <div
              className="h-full bg-white transition-all duration-100"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>

          {/* Bottom technical information */}
          <div className="mt-6 flex items-center justify-between text-[8px] uppercase tracking-[0.3em] text-white/20">
            <span>Noise Control</span>

            <span>Spatial Audio</span>

            <span>Hi-Res Sound</span>

            <span>Active EQ</span>
          </div>
        </div>
      </div>

      {/* Corners */}
      <div className="absolute left-6 top-6 h-8 w-8 border-l border-t border-white/10" />

      <div className="absolute right-6 top-6 h-8 w-8 border-r border-t border-white/10" />

      <div className="absolute bottom-6 left-6 h-8 w-8 border-b border-l border-white/10" />

      <div className="absolute bottom-6 right-6 h-8 w-8 border-b border-r border-white/10" />

      {/* CSS animations */}
      <style>{`
        @keyframes soundWave {
          0% {
            transform: scaleY(0.35);
            opacity: 0.3;
          }

          100% {
            transform: scaleY(1);
            opacity: 1;
          }
        }

        @keyframes scan {
          0% {
            left: 0%;
            opacity: 0;
          }

          10% {
            opacity: 1;
          }

          50% {
            opacity: 1;
          }

          90% {
            opacity: 1;
          }

          100% {
            left: 100%;
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
