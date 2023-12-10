"use client";

import { DotLottiePlayer } from "@dotlottie/react-player";

export default function DeveloperAnimation() {
  return (
    <DotLottiePlayer
      onEvent={(event) => {
        if (event === "ready") {
          const fallback = document.getElementById("fallback-developer-svg");
          fallback?.remove();
        }
      }}
      src="/assets/animations/developer.lottie"
      loop
      autoplay
      worker
    />
  );
}
