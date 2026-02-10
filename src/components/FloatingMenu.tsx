import { navLinks } from "@/constants";
import { useState } from "react";
import { cn } from "../lib/utils";

const FloatingMenu = () => {
  const [active, setActive] = useState("#hero");
  return (
    <div className="fixed top-1/2 -translate-y-1/5 right-10 border rounded-full pt-4 hidden border-neutral-600 z-50 lg:flex lg:flex-col">
      {navLinks.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.label}
            href={link.link}
            onClick={() => setActive(link.link)}
            className={cn(
              "flex items-center  text-neutral-400 gap-2 hover:text-primary transition duration-200 mb-6 px-4",
              active === link.link && "text-primary",
            )}
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
};

export default FloatingMenu;
