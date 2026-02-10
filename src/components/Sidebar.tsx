import { Button } from "@/components/ui/button";
import {
  SheetTrigger,
  Sheet,
  SheetTitle,
  SheetContent,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { navLinks, socialLinks } from "@/constants";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const [active, setActive] = useState("#hero");

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="bg-neutral-800 hover:text-primary border-2
            fixed top-4 right-4 hover:border-primary p-5 cursor-pointer mt-4 z-50 "
          >
            <MenuIcon size={33} />
          </Button>
        </SheetTrigger>
        <SheetContent className="bg-neutral-900 w-84 text-white py-6 pl-10 z-100">
          <SheetTitle className="text-lg font-bold mb-4">Menu</SheetTitle>
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.link}
                  onClick={() => setActive(link.link)}
                  className={cn(
                    "text-neutral-300 flex gap-3 items-center  hover:text-primary transition-colors duration-200 text-base,",
                    active === link.link && "text-primary",
                  )}
                >
                  <Icon className="size-4" />
                  {link.label}
                </a>
              );
            })}
          </nav>
          <div className="mt-30">
            <p className="pb-3">Socials</p>
            <div className="flex gap-4 text-neutral-500">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.link}
                    className="border-2 rounded-full p-2 hover:border-primary hover:text-primary transition duration-200"
                  >
                    <Icon className="size-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Sidebar;
