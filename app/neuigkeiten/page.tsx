import { Button } from "@/components/ui/button";
import { Frown } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex-1 flex items-center justify-center">
      <div className="flex flex-col space-y-4 max-w-[500px]">
        <div className="flex items-center space-x-4">
          <h2>Sorry...</h2>
          <Frown size={40} />
        </div>
        <p className="text-justify">
          Es gibt bei uns noch nicht viel Neues, schau doch solange mal auf der seite
          der Eisenbahnfreunde Grenzland vorbei.
        </p>
        <Link href={'https://eisenbahnfreunde-grenzland.de/neuigkeiten/'}>
            <Button>Neuigkeiten EFG</Button>
        </Link>
      </div>
    </main>
  );
}
