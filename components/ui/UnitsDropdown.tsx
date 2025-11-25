import Units from "@/public/icon-units.svg";
import Dropdown from "@/public/icon-dropdown.svg";

import Image from "next/image";

export default function UnitsDropdown() {
  return (
    <div className="flex items-center gap-2.5 bg-cards rounded-2xl py-2.5 px-3.5">
      <Image alt="Units Icon" src={Units}></Image>
      Units
      <Image alt="Dropdown Icon" src={Dropdown}></Image>
    </div>
  );
}
