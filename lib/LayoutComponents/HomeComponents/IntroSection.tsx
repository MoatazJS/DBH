import React from "react";

export default function IntroSection() {
  return (
    <>
      <section className="min-h-screen bg-black px-14 flex justify-center items-center">
        <div className="flex flex-col gap-8 justify-start w-1/2">
          <h1 className="text-6xl text-gray-200 font-extrabold">
            WE MAKE{" "}
            <span className="text-[#BD50FD]">
              <i>SENSE</i>
            </span>
            .
          </h1>
          <h1 className="text-6xl text-gray-200 font-extrabold">
            NOT JUST{" "}
            <span className="bg-linear-to-r from-[#00AAFF] to-[#AB49FF] bg-clip-text text-transparent">
              LOOKS
            </span>
            .
          </h1>
          <p className="text-[#9898A1] text-xl">
            We&apos;re the place where brands come when they&apos;re ready to
            become memorable. We blur the line between commerce and creation,
            crafting identities that don&apos;t shout, but echo.
          </p>
          <p className="text-[#9898A1] text-xl">
            Unlike agencies that chase fleeting trends, we create work that
            lives. Not content that vanishes in the scroll, but stories that
            stay with you.
          </p>
        </div>
        <div className="w-1/2 bg-white text-center">Photo place holder.</div>
      </section>
    </>
  );
}
