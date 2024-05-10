import { AlertTriangle, ArrowRight, Megaphone } from "lucide-react";
import Link from "next/link";


export default function BetaAnnouncement() {


  return (
    <div className="w-full h-12 bg-red-500 text-white flex items-center justify-between px-4 text-sm">

        <div className="flex items-center space-x-2">
          <AlertTriangle size={20} />
          <span>Warnhinheis</span>
        </div>
        <div className="flex items-center space-x-4">
          <span>Sie befinden sich zurzeit auf der test-seite der EFO, einige links und funktionen der seite könnten möglicherweise nicht richtig funktionieren!</span>
        </div>
        <Link
          href={"https://eisenbahnfreunde-grenzland.de"}
          className="flex items-center space-x-2 underline"
        >
          <span>Zurück zur hauptseite</span>
          <ArrowRight size={20} />
        </Link>
      </div>

  );
}
