import { useEffect, useRef } from "react";
import lottie from "lottie-web";
export default function Lottie({ animation }) {
  let animationContainer = useRef(null);
  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: animation,
    });
    return () => anim.destroy();
  }, []);
  return (
    <div ref={animationContainer} style={{ width: "100%", height: "60%" }} />
  );
}
