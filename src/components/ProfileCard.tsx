import { Button } from "@/components/ui/button";
import { socialLinks } from "@/constants";

const ProfileCard = () => {
  return (
    <aside className="m-w-3xl border m-6 border-neutral-600 p-5 bg-neutral-900 rounded-lg lg:sticky lg:top-6 lg:left-0 lg:w-96">
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center justify-between gap-x-10">
          <h2 className="text-3xl font-bold">Nour</h2>
          <p className="text-sm">Fullstack Developer</p>
        </div>
        <img
          src="/1770594321417.jpg"
          alt="Nour El-Deen"
          className="lg:w-96 rounded-2xl object-cover"
        />
        <div className="mt-6">
          <p className="text-neutral-300 text-sm">Specialization:</p>
          <p className="text-xl capitalize">MEARN STACK</p>
        </div>
        <div>
          <p className="text-neutral-300 text-sm">Based in:</p>
          <p className="text-xl capitalize">Alexandria, Egypt</p>
        </div>
        <div className="flex gap-3">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.link}
                className="border-2 text-neutral-700 rounded-full p-2 hover:border-primary hover:text-primary transition duration-200"
              >
                <Icon className="size-4" />
              </a>
            );
          })}
        </div>
        <Button className="mt-2 cursor-pointer" size="lg" asChild>
          <a href="#contact">Let's Work</a>
        </Button>
      </div>
    </aside>
  );
};

export default ProfileCard;
