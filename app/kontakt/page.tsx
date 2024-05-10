import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AtSign, Copy, Mail, Mailbox, Wrench } from "lucide-react";

export default function Page() {
  return (
    <main className="flex-1 flex items-center justify-center">
      <div className="w-[750px]">
        <div className="flex space-x-4 items-center">
          <div className="flex items-center space-x-2 w-36">
            <AtSign size={20} />
            <span>E-mail</span>
          </div>
          <Separator orientation="vertical" className="h-12" />
          <p>info@ef-o.be</p>
          <Button size={'icon'} variant={'ghost'} className=""><Copy size={16}/></Button>
        </div>
        <Separator />
        <div className="flex space-x-4 items-center">
          <div className="flex items-center space-x-2 w-36">
            <Mailbox size={20} />
            <span>Postadresse</span>
          </div>
          <Separator orientation="vertical" className="h-12" />
          <p>Platzstrasse 18, 4730 Raeren, Belgien</p>
        </div>
        <Separator />
        <div className="flex space-x-4 items-center">
          <div className="flex items-center space-x-2 w-36">
            <Wrench size={20} />
            <span>Werkstatt/Halle</span>
          </div>
          <Separator orientation="vertical" className="h-12" />
          <p>Bahnhofsstrasse, 70B, 4730 Raeren, Belgien</p>
        </div>
      </div>
    </main>
  );
}
