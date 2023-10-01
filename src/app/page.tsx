import Image from "next/image";
import { HeaderMegaMenu } from "../app/components/header/header";

import { BadgeCard } from "../app/components/card/card";
export default function Home() {
  return (
    <div>
      <HeaderMegaMenu />
      <BadgeCard />
    </div>
  );
}
