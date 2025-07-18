"use client";

import { useEffect, useRef, useState } from "react";
import { initDraw } from "@/draw";

export default function Canvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [size, setSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const updateSize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas && size.width && size.height) {
            canvas.width = size.width;
            canvas.height = size.height;
            initDraw(canvas);
        }
    }, [size]);

    return <canvas ref={canvasRef} />;
}
