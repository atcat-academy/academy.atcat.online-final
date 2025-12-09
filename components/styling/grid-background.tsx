import React from "react";

export function GridBackground() {
  return (
    <div className="fixed inset-0 w-screen h-screen max-h-[70bvh] dark:bg-grid-large-black/05 bg-grid-large-white dark:opacity-10 opacity-20 pointer-events-none -z-10">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 dark:bg-black/0 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]"></div>
    </div>
  );
}
