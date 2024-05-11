import { Button } from "@/components/ui/button";
import { File } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <main className="p-16 flex-1 items-center justify-center flex flex-col space-y-16">
      <div className="flex flex-col items-start space-y-4 max-w-[750px]">
        <h2>Mitglied werden</h2>
        <p className="text-justify">
          Mitmachen kann bei uns jeder, der Lust hat einen Teil seiner Freizeit
          für den Erhalt des Historischen Erbguts Eisenbahn zu investieren. Die
          Strecke Stolberg-Eupen zu erhalten, sowie die Restaurierung und den
          Betrieb von historischen Eisenbahnfahrzeugen zu realisieren. Wir
          können jede helfende Hand brauchen, ganz egal ob jung oder alt,
          handwerklich geschickt oder mit zwei linken Händen; für jeden ist was
          Passendes dabei! Sie können uns aber auch finanziell durch eine
          Fördermitgliedschaft unterstützen. Bitte entnehmen sie die Details zur
          Mitgliedschaft, der Beitrittsordnung und der
          Datenschutz-Grundverordnung, welche dem Mitgliedsantrag angehängt
          sind.
        </p>
        <Link href={'/EFO-Mitgliedsantrag.pdf'}>
        <Button className="space-x-2">
            <span>Zum Mitgliedsantrag</span>
            <File size={16}/>
        </Button>
        </Link>
      </div>
    </main>
  );
}
