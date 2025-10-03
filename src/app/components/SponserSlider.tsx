"use client";

import Image from "next/image";

const sponsors = [
  "/logos/logo1.png",
  "/logos/logo2.png",
  "/logos/logo3.png",
  "/logos/logo4.png",
  "/logos/logo5.png",
  "/logos/logo6.png",
];

export default function SponsorSlider() {
  return (
    <div className="container">
      <section className="sponsor-slider bg-gray-50 overflow-hidden">
        <div className="sponsor-track flex">
          {[...sponsors, ...sponsors].map((logo, i) => (
            <div
              key={i}
              className="sponsor__inner-card flex justify-center items-center px-8"
            >
              <Image
                src={logo}
                alt={`Sponsor ${i + 1}`}
                width={150}
                height={70}
                className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
