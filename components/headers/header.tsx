import { ModeToggle } from "../toggle-theme";
import Logo from "./logo";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CountPing } from "@/utils/count";

export default async function Header() {
  const counter = await CountPing();
  return (
    <>
      <header className="container md:mx-auto max-w-7xl justify-between flex flex-row py-4">
        <div className="flex flex-row space-x-10 ease-linear">
          <Link href="/">
            <Logo />
          </Link>
          <div className="pt-1 flex flex-row space-x-5  max-lg:hidden ">
            <Link
              href="#"
              className="hover:border-b border-dotted border-gray-500 text-sm group flex flex-row"
            >
              Github
              <span className="display group-hover:block">
                <ArrowUpRight size={10} />
              </span>
            </Link>
            <div className=" text-stone-700 text-sm font-extralight">
              {counter} pings
            </div>
          </div>
        </div>
        <div className="flex flex-row space-x-2 ">
          <ModeToggle />
        </div>
      </header>
      <Separator />
    </>
  );
}
