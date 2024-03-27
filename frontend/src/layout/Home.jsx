import React from "react";

export default function Home() {
  return (
    <div>
  <section className="relative h-screen flex flex-col items-center justify-center text-center text-white ">
    <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
      <video className="min-w-full min-h-full absolute object-cover" src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" type="video/mp4" autoPlay muted loop />
    </div>
    <div className="video-content space-y-2 z-10">
      <h1 className="font-light text-6xl">IT RMU</h1>
      <h3 className="font-light text-3xl">Information Technology branch</h3>
    </div>
  </section>
  <style dangerouslySetInnerHTML={{__html: "\n    .video-docker video {\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n    }\n\n    .video-docker::after {\n        content: \"\";\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n        background: rgba(0, 0, 0, 0.6);\n        z-index: 1;\n    }\n" }} />
</div>

  );
}
