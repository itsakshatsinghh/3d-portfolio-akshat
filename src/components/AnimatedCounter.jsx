import { useRef } from "react";
import { counterItems } from "../constants";

const AnimatedCounter = () => {
  const counterRef = useRef(null);
  const countersRef = useRef([]);

  return (
    <div id="counter" ref={counterRef} className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item, index) => (
          <div
            key={index}
            ref={(el) => el && (countersRef.current[index] = el)}
            className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center"
          >
            {item.showValue && item.value !== undefined ? (
              <div className="counter-number text-white-50 text-5xl font-bold mb-2">
                {item.value} {item.suffix}
              </div>
            ) : (
              <div className="counter-number text-white-50 text-5xl font-bold mb-2">
                {/* If no value, show placeholder text */}
                {item.showValue ? "No Value" : ""}
              </div>
            )}
            <div className="text-white-50 text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
