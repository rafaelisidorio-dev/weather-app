import Logo from "@/public/logo.svg";
import Image from "next/image";

import UnitsDropdown from "../ui/UnitsDropdown";

export default function Header() {
  return (
    <header>
      <div className="flex justify-between items-center pt-12 pb-17.5">
        <Image alt="Logo Image" src={Logo} loading="eager"></Image>

        {/* TODO: Transform this into a dropdown menu */}
        <UnitsDropdown />
      </div>
    </header>
  );
}
