import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./Button";
import { Container } from "./Container";

export const Navbar = () => {
  return (
    <Container
      className="
      relative z-30 py-5 
    flex 
    items-center 
    justify-between
    "
    >
      <Link href={"/"}>
        <Image src={"/hilink-logo.svg"} alt="logo" width={74} height={29} />
      </Link>
      <ul className="hidden lg:flex gap-12 h-full ">
        {NAV_LINKS.map((i) => (
          <Link
            className="font-[400] text-[1rem]
            text-gray-50
           cursor-pointer
           pb-1.5 hover:font-bold transition-all
           "
            href={i.href}
            key={i.key}
          >
            {i.label}
          </Link>
        ))}
      </ul>

      <div className="hidden lg:block">
        <Button
          title="Login"
          type="button"
          variant="px-8 py-4 bg-green-90 text-white transition-all hover:bg-black"
          icon="/user.svg"
        />
      </div>

      <Image
        alt="menu"
        src="/menu.svg"
        width={32}
        height={32}
        className="block cursor-pointer lg:hidden"
      />
    </Container>
  );
};
