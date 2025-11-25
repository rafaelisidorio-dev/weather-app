import Logo from "@/public/logo.svg";
import Image from "next/image";

import UnitsDropdown from "../ui/UnitsDropdown";
import Form from "../ui/Form";

import { bricolageGrotesque } from "@/app/layout";

export default function Header() {
  return (
    <header>
      <div className="flex justify-between items-center pt-12 pb-17.5">
        <Image alt="Logo Image" src={Logo} loading="eager"></Image>

        {/* TODO: Transform this into a dropdown menu */}
        <UnitsDropdown />
      </div>

      <h1
        className={`${bricolageGrotesque.className} text-center text-5xl/15 sm:text-5xl`}
      >
        How's the sky looking today?
      </h1>

      <div className="flex justify-center mt-18 mb-12">
        <Form />
      </div>
    </header>
  );
}
