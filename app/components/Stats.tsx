"use client";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Define the type for the props
interface CounterProps {
  end: number;
  duration?: number;
}

const Counter = ({ end, duration = 2 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setCount((prev) => {
          if (prev < end) {
            return Math.min(prev + 1, end);
          } else {
            clearInterval(interval);
            return end;
          }
        });
      }, (duration * 1000) / end); // Adjust timing of increment based on duration
    }
  }, [inView, end, duration]);

  return (
    <motion.div
      ref={ref}
      className="text-gray-600"
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration }}
    >
      {Math.floor(count)}+
    </motion.div>
  );
};

const Stats = () => {
  return (
    <div className="flex justify-around my-10">
      {[
        { title: "Projects", end: 150 },
        { title: "Clients", end: 50 },
        { title: "Experts", end: 15 },
      ].map((item, index) => (
        <div key={index} className="text-[30px]">
          <div className="font-bold">{item.title}</div>
          <Counter end={item.end} />
        </div>
      ))}
    </div>
  );
};

export default Stats;
