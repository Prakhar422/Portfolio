import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        window.history.replaceState(null, "", "/");
      }}
      className="fixed bottom-8 right-8 z-50 grid h-12 w-12 place-items-center rounded-full border border-cyan-200/30 bg-slate-900/80 text-cyan-200 backdrop-blur-xl shadow-[0_0_25px_rgba(34,211,238,0.25)] transition hover:bg-cyan-300 hover:text-slate-950"
    >
      <FiArrowUp size={20} />
    </button>
  );
}

export default ScrollToTop;