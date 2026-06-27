import React from "react";
import { AuroraText } from "./components/AuroraText";

const App = () => {
  return (
    <div className="h-screen w-screen overflow-hidden relative bg-black text-white flex flex-col">

      {/* CONTENT */}
        {/* HERO */}
        <main className="flex flex-1 flex-col items-center justify-center text-center px-4">
          {/* BADGE */}
          <div className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm backdrop-blur">
            Thankyou for using
          </div>

          {/* HEADING */}
          <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
            <AuroraText>
              <code>fast-apps</code>
            </AuroraText>
          </h1>
          <a
            href="https://github.com/satendra03"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <code className="mt-2 mb-6 rounded bg-white/10 px-3 py-1 text-xs backdrop-blur">
              by @satendra03
            </code>
          </a>
        </main>
    </div>
  );
};

export default App;
