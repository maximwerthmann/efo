import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Page() {
  return (
    <main className="p-16 flex-1 items-center flex flex-col space-y-16">
      <div className="flex flex-col space-y-4 max-w-[750px]">
        <h2>über den verein</h2>
        <p className="text-justify">
          Der Verein „Eisenbahnfreunde Ostbelgien VoG“ wurde gegründet um das
          technische Kulturgut Eisenbahn unserer Region zu erhalten.
          Gleichermaßen soll so die Geschichte der Eisenbahn im Raum Ostbelgien
          festgehalten werden. Zur Umsetzung des Zwecks verfolgen die
          Eisenbahnfreunde Ostbelgien VoG gemeinsam mit ihrem
          SchwestervereinEisenbahnfreunde Grenzland e.V.folgende Aktivitäten:
          Erhalt von historischen Gebäuden, Infrastruktur und Fahrzeugen, um sie
          einem breiten Publikum näher zu bringen. Besonderes Augenmerk wird
          dabei auf die unter Denkmalschutz gestellte Eisenbahninfrastruktur des
          Bahnhofs Raeren, sowie auf historisch wertvolle
          Eisenbahneinrichtungen, Gebäude, Fahrzeuge und Infrastruktur im Gebiet
          Ostbelgien gelegt.
        </p>
      </div>
      <Separator/>
      <div className="flex flex-col space-y-4 max-w-[750px]">
        <h2>Vorstand</h2>
        <p className="text-justify">
          Der Verein „Eisenbahnfreunde Ostbelgien VoG“ wurde gegründet um das
          technische Kulturgut Eisenbahn unserer Region zu erhalten.
          Gleichermaßen soll so die Geschichte der Eisenbahn im Raum Ostbelgien
          festgehalten werden. Zur Umsetzung des Zwecks verfolgen die
          Eisenbahnfreunde Ostbelgien VoG gemeinsam mit ihrem
          SchwestervereinEisenbahnfreunde Grenzland e.V.folgende Aktivitäten:
          Erhalt von historischen Gebäuden, Infrastruktur und Fahrzeugen, um sie
          einem breiten Publikum näher zu bringen. Besonderes Augenmerk wird
          dabei auf die unter Denkmalschutz gestellte Eisenbahninfrastruktur des
          Bahnhofs Raeren, sowie auf historisch wertvolle
          Eisenbahneinrichtungen, Gebäude, Fahrzeuge und Infrastruktur im Gebiet
          Ostbelgien gelegt.
        </p>
      </div>

    </main>
  );
}
