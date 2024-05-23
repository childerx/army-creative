import React from "react";

export default function Contact() {
  return (
    <main className="bg-white pt-24 pb-14 ">
      <div className="w-full h-full flex flex-col justify-center items-center gap-16 text-black ">
        <div className="text-center">
          <h1 className="mobile:text-4xl text-6xl">CONTACT US</h1>
          <h5 className="mobile:text-xl text-2xl text-[#0D7711] ">
            Hi, we're so happy to see you here
          </h5>
        </div>

        <div className="text-center">
          <h5 className="text-[#0D7711] font-bold text-xl ">
            For Partnership/Services
          </h5>
          <p className="text-xl">
            <span className="text-[#0D7711]">Call/WhatsApp us on</span> +233
            570172318 / +233 535371891
          </p>
        </div>

        <div className="text-center">
          <h5 className="text-[#0D7711] font-bold text-xl ">
            For orders on ARMY clothing
          </h5>
          <p className="text-xl">
            <span className="text-[#0D7711]">Contact us on</span> +233 591506239
          </p>
        </div>

        <div className="text-center">
          <h5 className="text-[#0D7711] font-bold text-xl ">
            Leave a message in our mail
          </h5>
          <p className="text-xl">armycreativestudios@gmail.com</p>
        </div>
      </div>
    </main>
  );
}
