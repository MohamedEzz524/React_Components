import kasper from "./assets/images/kasper.webp";
import leona from "./assets/images/leonagency.webp";
import { MdOutlineArrowOutward } from "react-icons/md";
import { BsChevronBarExpand } from "react-icons/bs";

const dahy = [
  {
    id: "ind",
    image: kasper,
    title: "Kasper Ai",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind"],
  },
  {
    id: "ind",
    image: leona,
    title: "Leon Ai",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind"],
  },
  {
    id: "ind",
    image: leona,
    title: "Leon Ai",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind"],
  },
  {
    id: "ind",
    image: kasper,
    title: "Kasper Ai",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind"],
  },
];
export default function Dahy() {
  return (
    <div className="w-screen min-h-[1000px] bg-black text-white z-[100000]">
      <div className="py-[90px]">
        <div className="container min-h-full max-md:grid grid-cols-1 md:columns-2 gap-10">
          {/* Card */}
          {dahy.map(({ id, title, image, skills }, i) => (
            <div
              key={id + i}
              className="mb-5 p-4 break-inside-avoid flex flex-row gap-2 transition-all duration-500 border-stylish transform-gpu relative group"
            >
              <div className="flex flex-col">
                {/* Bullets */}
                <div className="flex gap-1 pb-4">
                  <div className="w-2 h-2 rounded-full bg-white/30 backdrop:blur-md animate-pulse group-hover:bg-[#ff4500] "></div>
                  <div className="w-2 h-2 rounded-full bg-white/30 backdrop:blur-md animate-pulse group-hover:bg-[#0ff]"></div>
                  <div className="w-2 h-2 rounded-full bg-white/30 backdrop:blur-md animate-pulse group-hover:bg-[#ffa500]"></div>
                  <div className="shadow-circle rotate-45 relative ml-auto group-hover:shadow-[inset_0_0_0_3px_rgb(255,255,0,0.5)]"></div>
                </div>
                {/* Image */}
                <div className="w-full relative shadow-[inset_0px_0px_50px_rgba(255,255,255,.5),0px_0px_5px_2px_rgba(255,255,255,0.4)] overflow-hidden">
                  <img
                    src={image}
                    alt="Kasper"
                    loading="lazy"
                    className="object-cover w-full aspect-[16/9] transition-all duration-300"
                  />
                  <div className="absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0 bg-gradient-to-t from-black/70 to-black/20"></div>
                </div>
                {/* Title */}
                <div className="flex w-full justify-between items-center mt-4">
                  <h3 className="text-2xl">{title}</h3>
                  <div className="group-hover:hidden flex items-center gap-1">
                    <BsChevronBarExpand />
                    <div>Expand View</div>
                  </div>
                  <div className="hidden group-hover:flex gap-1">
                    <button className="button-card flex gap-1 items-center">
                      Code <MdOutlineArrowOutward />
                    </button>
                    <button className="button-card flex gap-1 items-center">
                      Live <MdOutlineArrowOutward />
                    </button>
                  </div>
                </div>
                {/* Desc */}
                <div className="sub-card origin-bottom max-h-0 group-hover:max-h-40 group-hover:p-2 group-hover:mt-5">
                  <p className="text-[#999]">
                    A Creative modern React project styled with Modern CSS,
                    React Animation, designed and coded from scratch to showcase
                    my skills and past work, focused on responsive design.{" "}
                  </p>
                </div>
              </div>
              {/* Buttons */}
              <div className="flex flex-col flex-wrap mt-4 shrink-0 items-start gap-2 transition-[max-width,padding] duration-300 max-w-0 group-hover:max-w-[100px] group-hover:p-2 sub-card">
                {skills.map((s) => (
                  <div key={s} className="skill-card">
                    {s}
                  </div>
                ))}
              </div>
            </div>
          ))}
          {/*  */}
          {/*  */}
          {/*  */}
          {/*  */}
        </div>
      </div>
    </div>
  );
}
