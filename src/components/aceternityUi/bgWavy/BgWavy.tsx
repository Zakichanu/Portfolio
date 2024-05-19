import { cn } from "../../../utils/cn";
import { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 15,
  speed = "fast",
  waveOpacity = 10,
  ...props
}: {
  children?: any;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: any;
}) => {
  const noise = createNoise3D();
  let w: number,
    h: number,
    nt: number,
    i: number,
    x: number,
    ctx: any,
    canvas: any;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.005;
      default:
        return 0.001;
    }
  };

  const init = () => {
    canvas = canvasRef.current;
    ctx = canvas.getContext("2d");
    w = ctx.canvas.width = window.innerWidth;
    h = ctx.canvas.height = document.body.scrollHeight;
    ctx.filter = `blur(${blur}px)`;
    nt = 0;
    window.onresize = function () {
      w = ctx.canvas.width = window.innerWidth;
      h = ctx.canvas.height = document.body.scrollHeight;
      ctx.filter = `blur(${blur}px)`;
    };
    render();
  };

  const waveColors = colors ?? [
    "#38bdf8",
    "#818cf8",
    "#c084fc",
    "#e879f9",
    "#22d3ee",
  ];
  const drawWave = (n: number) => {
    nt += getSpeed();
    for (i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth || 50;
      ctx.strokeStyle = waveColors[i % waveColors.length];
      for (x = 0; x < w; x += 5) {
        var y = noise(x / 500, 0.5 * i, nt) * 100;
        ctx.lineTo(x, y + h * 0 + x * 0.5); // adjust for height and add a diagonal component
      }
      ctx.stroke();
      ctx.closePath();
    }
  };

  let animationId: number;
  const render = () => {
    ctx.fillStyle = backgroundFill || "black";
    ctx.globalAlpha = waveOpacity || 0.5;
    ctx.fillRect(0, 0, w, h);
    drawWave(5);
    animationId = requestAnimationFrame(render);
  };

  const childrenRef = useRef<HTMLDivElement>(null);

  const [childrenHeight, setChildrenHeight] = useState(0);

  useEffect(() => {
    const updateChildrenHeight = () => {
      if (childrenRef.current) {
        setChildrenHeight(childrenRef.current.offsetHeight);
      }
    };

    window.addEventListener('resize', updateChildrenHeight);

    // Initial update
    updateChildrenHeight();

    return () => {
      window.removeEventListener('resize', updateChildrenHeight);
    };
  }, []);

  useEffect(() => {
    init();
    console.log("init");
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [childrenHeight]);

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    // I'm sorry but i have got to support it on safari.
    setIsSafari(
      typeof window !== "undefined" &&
      navigator.userAgent.includes("Safari") &&
      !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div
        className={cn(
            "h-screen flex flex-col items-center justify-center",
            containerClassName
        )}
    >
        <canvas
            className="absolute inset-0 z-0"
            ref={canvasRef}
            id="canvas"
            style={{
                ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
            }}
        ></canvas>
        <div className={cn("z-10", className)} ref={childrenRef} {...props}>
            {children}
        </div>
    </div>
  );
};
