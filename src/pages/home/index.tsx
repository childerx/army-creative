import React from "react";
import Marquee from "react-fast-marquee";
import headerImg from "../../assets/images/header-img.svg";
import slide1 from "../../assets/images/slide-1.svg";
import slide2 from "../../assets/images/slide-2.svg";
import midSlide1 from "../../assets/images/mid-img1.svg";
import midSlide2 from "../../assets/images/mid-img2.svg";
import midSlide3 from "../../assets/images/mid-img3.svg";
import midSlide4 from "../../assets/images/mid-img4.svg";
import midSlide5 from "../../assets/images/mid-img5.svg";
import midSlide6 from "../../assets/images/mid-img6.svg";
import { ABOUT } from "../../constants/page-path";
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";

const slides = [
  {
    img: slide1,
    text: "ARMY CLOTHING",
  },
  {
    img: slide2,
    text: "PHOTOGRAPHY/VIDEOGRAPHY",
  },
  {
    img: slide1,
    text: "ARMY CLOTHING",
  },
];

export default function Home() {
  return (
    <div className=" py-14 mt-16">
      <header className="flex  items-center">
        <div className="flex-1">
          <h1 className="pl-20 font-extrabold text-8xl text-white leading-[8.25rem]">
            ALWAYS <br />
            <span className="text-primary">
              REMEMBER <br /> MY
            </span>{" "}
            YOUTH
          </h1>
        </div>
        <div className="flex-1 relative">
          <div className="absolute top-0 -left-20 w-1/2 h-full hoffy-left" />
          <img
            src={headerImg}
            alt="header image"
            className="w-full object-contain"
          />
        </div>
      </header>

      <section className="w-full bg-white py-5 mb-5">
        <Marquee className="font-medium text-2xl text-black">
          ALWAYS REMEMBER MY YOUTH. YOUTH . PASSION . CREATIVITY
        </Marquee>
      </section>

      <section className="mt-20 px-10">
        <Marquee pauseOnHover={true} pauseOnClick={true} speed={20} delay={5}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative w-[36rem] h-[22rem] overflow-hidden rounded-3xl mr-10"
            >
              <img src={slide.img} alt="item image" className="w-full h-full" />
              <div className="absolute flex justify-center items-center bottom-0 left-0 right-0 hoffy-top bg-opacity-20 py-6 ">
                <h1 className="font-medium text-3xl">{slide.text}</h1>
              </div>
            </div>
          ))}
        </Marquee>
        <div className="mt-10 flex justify-center items-center gap-10">
          <div className="w-4 h-4 rounded-full bg-primary" />
          <div className="w-4 h-4 rounded-full bg-primary" />
          <div className="w-4 h-4 rounded-full bg-primary" />
          <div className="w-4 h-4 rounded-full bg-white" />
          <div className="w-4 h-4 rounded-full bg-white" />
          <div className="w-4 h-4 rounded-full bg-white" />
        </div>
      </section>

      <section className="mt-20 px-20 flex flex-col gap-5 items-center justify-center">
        <h1 className="font-extrabold text-2xl text-primary">WHO ARE WE?</h1>
        <p className="text-center text-xl ">
          Our Page is targeted to the Youth who are passionate and want to learn
          or want to showcase their works in the creative space. We have
          professionals from different creative space; Makeup Art, Fashion
          design, Fashion styling, Graphic design, 2D/3D Art, UI/UX Design,
          Software engineer, Photography & Videography. We provide tuition &
          services for each category, posting content daily on our social media
          platforms so anyone passionate can learn or join us. Our platform is
          also opened to anyone who wants to display or showcase their works.
          Any works at all that fall in the creative space will be posted for
          free when submitted to us.
        </p>

        <Link
          to={ABOUT}
          className="w-32 h-9 flex justify-center items-center rounded-md ring-1 ring-primary text-primary"
        >
          <span className="text-xs">Meet The Team</span>
          <BsArrowRightShort className="w-5 h-5 " />
        </Link>
      </section>

      <section className=" w-full h-96 mt-10 px-20 ">
        <div className="w-full h-full flex gap-5 items-center justify-between">
          <div className=" mb-36">
            <img src={midSlide1} alt="slide image" className="object-contain" />
          </div>
          <div className=" mt-10">
            <img src={midSlide2} alt="slide image" className="object-contain" />
          </div>
          <div className=" ">
            <img src={midSlide3} alt="slide image" className="object-contain" />
          </div>
          <div className=" mt-40">
            <img src={midSlide4} alt="slide image" className="object-contain" />
          </div>
          <div className=" ">
            <img src={midSlide5} alt="slide image" className="object-contain" />
          </div>
          <div className=" mt-32">
            <img src={midSlide6} alt="slide image" className="object-contain" />
          </div>
        </div>
      </section>

      <section className="mt-20 px-20 flex flex-col gap-5 items-center justify-center">
        <h1 className="font-extrabold text-2xl text-primary">
          WANT TO SUPPORT OUR MISSION?
        </h1>
        <p className="text-center text-xl ">
          <span className="font-extrabold text-primary">BECOME A PARTNER</span> at ARMY Creative Studios. Support us on our mission
          as we engage and lift the spirit of the youth and their aspirations in
          the creative space. There are over 1000s of youth out there who needs
          support and little push to reach their aspirations and goals, and also
          to cause a change and impact to the creative space in the country and
          the world at large.
        </p>

        <Link
          to={ABOUT}
          className="w-32 h-9 flex justify-center items-center rounded-md ring-1 ring-primary text-primary"
        >
          <span className="text-xs">Partner With Us</span>
          <BsArrowRightShort className="w-5 h-5 " />
        </Link>

        <div className="mt-20 flex justify-center items-center gap-10">
          <div className="w-4 h-4 rounded-full bg-primary" />
          <div className="w-4 h-4 rounded-full bg-primary" />
          <div className="w-4 h-4 rounded-full bg-primary" />
          <div className="w-4 h-4 rounded-full bg-white" />
          <div className="w-4 h-4 rounded-full bg-white" />
          <div className="w-4 h-4 rounded-full bg-white" />
        </div>
      </section>
    </div>
  );
}