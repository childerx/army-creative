import ceo from "../../assets/images/about/ceo.svg";
import photo from "../../assets/images/about/photo.svg";
import fashion from "../../assets/images/about/fashion.svg";
import sales from "../../assets/images/about/sales.svg";
import videograph from "../../assets/images/about/videographer.svg";
import makeup from "../../assets/images/about/makeup.svg";
import se from "../../assets/images/about/se.svg";
import stylist from "../../assets/images/about/stylist.svg";

const members = [
  {
    img: ceo,
    name: "Gabriel Amponsah",
    position: "Founder, Graphic Designer, 3d Artist & UI/UX Designer",
  },
  {
    img: photo,
    name: "Emmanuel Tsini",
    position: "Photographer & Videographer",
  },
  {
    img: fashion,
    name: "Mercy Enyia Achonga",
    position: "Fashion Designer",
  },
  {
    img: sales,
    name: "Marvellous Adraku",
    position: "Sales Secretary/Hair Stylist",
  },
  {
    img: videograph,
    name: "Leslie Abbey",
    position: "Photographer & Videographer",
  },
  {
    img: makeup,
    name: "Peace Adraku",
    position: "Makeup Artist & Nail Technician",
  },
  {
    img: se,
    name: "Emmanuel Dodoo",
    position: "Software Engineer & Developer",
  },
  {
    img: stylist,
    name: "Samuel Tei",
    position: "Fashion Stylist",
  },
];

export default function About() {
  return (
    <main className="bg-black pt-24 pb-14 ">
      <header className="px-20 mobile:px-4">
        <h3 className="text-xl ">
          <span className="text-primary text-3xl font-extrabold">
            OUR MISSION{" "}
          </span>
          is to cultivate a vibrant and inclusive creative community. We strive
          to provide comprehensive tuition, services, and content across diverse
          creative fields, including makeup art, 3D and 2D art, graphic design,
          fashion design, software engineering, photography, and videography. By
          fostering a dynamic environment, we aim to inspire, educate, and
          nurture the next generation of innovative creators.
        </h3>
        <div className="mt-20 mb-10 flex justify-center items-center gap-10">
          <div className="w-4 h-4 rounded-full bg-primary" />
          <div className="w-4 h-4 rounded-full bg-primary" />
          <div className="w-4 h-4 rounded-full bg-primary" />
          <div className="w-4 h-4 rounded-full bg-white" />
          <div className="w-4 h-4 rounded-full bg-white" />
          <div className="w-4 h-4 rounded-full bg-white" />
        </div>
      </header>

      <section className="p-20 mobile:px-4 bg-white">
        <h4 className="font-medium text-black text-xl">
          At ARMY, we envision a future where the flames of creativity burn
          brightly in every young individual. Our vision is to be a cornerstone
          in the creative space, offering a platform that not only imparts
          knowledge but also fuels passion. We aspire to be the catalyst for
          boundless artistic expression, ensuring that the spirit of Always
          Remember My Youth becomes a guiding light for generations to come.
          Together, we build a community that cherishes and harnesses the power
          of youthful creativity, leaving an indelible mark on the world.
        </h4>
      </section>

      <section className="py-20 mobile:px-4 px-28 flex flex-col gap-10 items-center">
        <div className="">
          <h1 className="text-primary font-extrabold text-2xl text-center">
            Meet The Team
          </h1>
          <p className="text-xl text-center ">
            It takes two flints to make a fire. Teamwork makes the dream work.
          </p>
        </div>

        <div className="flex gap-10 items-center justify-center flex-wrap">
          {members.map((member, index) => (
            <div key={index} className="w-56 flex flex-col items-center gap-3">
              <img
                src={member.img}
                alt="member image"
                className="w-full h-64 rounded-2xl"
              />
              <h1 className="text-xl text-center text-primary font-extrabold">
                {member.name}
              </h1>
              <p className="text-center text-base font-semibold">
                {member.position}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
