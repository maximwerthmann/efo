import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Page() {
  return (
    <main className="p-16 flex-1 items-center justify-center flex flex-col space-y-16">
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
      <div className="flex flex-col w-full max-w-[750px]">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Vorstand</AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarFallback>MW</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span>Marc Werthmann</span>
                    <p>Vorsitzender</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarFallback>SF</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span>Sylvia Fassbender</span>
                    <p>Kassenführerin</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarFallback>ES</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span>Elmar Scheuerer</span>
                    <p>Schriftführer</p>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Registrierung</AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col">
                <span>
                  <span className="font-bold">Amtsgericht</span> Eupen
                </span>
                <span>
                  <span className="font-bold">Staatsblatt Nr.</span> 23420939
                  vom 06/11/2023
                </span>
                <span>
                  <span className="font-bold">Firmenidentifikation</span>{" "}
                  1001.847.078
                </span>
                <span>
                  <span className="font-bold">Mehrwertsteuernummer</span> BE
                  1001.847.078
                </span>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Bank</AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col">
                <span>KBC Eupen</span>
                <span className="pb-4">Eisenbahnfreunde Ostbelgien VoG</span>
                <span>
                  <span className="text-foreground font-bold">IBAN</span> BE59
                  7340 7408 0626
                </span>
                <span>
                  <span className="text-foreground font-bold">BIC</span>{" "}
                  KREDBEBB
                </span>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </main>
  );
}
