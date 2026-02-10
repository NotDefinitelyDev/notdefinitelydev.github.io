import { type ExperienceType } from "@/types/type";

const ExpCard = ({ year, title, institute, desc }: ExperienceType) => {
  return (
    <>
      <div className="relative group">
        <div className="absolute -left-7.5 top-2 size-3 bg-muted-foreground group-hover:bg-primary rounded-full transition duration-300"></div>
        <span className="text-neutral-300 lining-nums">{year}</span>
        <h3 className="font-semibold text-lg mt-1">{institute}</h3>
        <p className="text-neutral-400 font-medium ">{title}</p>
        <p className="text-neutral-400 text-sm mt-2">{desc}</p>
      </div>
    </>
  );
};

export default ExpCard;
