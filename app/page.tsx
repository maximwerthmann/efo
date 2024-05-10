"use client";

import Autoplay from "embla-carousel-autoplay";

import { Button } from "@/components/ui/button";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import Logo from "@/components/logo";

const carouselItems = [
  {
    imageUrl: "/img/bahn1.jpg",
  },
  {
    imageUrl: "/img/bahn3.jpg",
  },
  {
    imageUrl: "/img/bahn4.jpg",
  },
  {
    imageUrl: "/img/bahn5.jpg",
  },
  {
    imageUrl: "/img/bahn6.jpg",
  },
  {
    imageUrl: "/img/bahn7.jpg",
  },
];

export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      <div className="h-full w-full flex">
        <Carousel
          opts={{ loop: true }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="flex-1 flex"
        >
          <CarouselContent id="carouselcontent" className="h-full w-screen m-0">
            {carouselItems.map((item) => {
              return (
                <CarouselItem
                  id="carouselitem"
                  key={item.imageUrl}
                  className={`w-screen p-0 relative`}
                >
                  <Image
                    alt={item.imageUrl}
                    fill
                    src={item.imageUrl}
                    style={{ objectFit: "cover" }}
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="absolute left-8" />
          <CarouselNext className="absolute right-8" />
        </Carousel>
      </div>
      <div className="flex justify-center bg-background w-full">
        <div className="p-8 flex space-x-16 items-center">
          <Logo size="200" />
          <Separator orientation="vertical" />
          <div className="flex flex-col space-y-6 w-full lg:max-w-[750px]">
            <h3 className="font-semibold">Die Eisenbahnfreunde Ost-belgien</h3>
            <p className="text-muted-foreground text-sm text-justify">
              Die Eisenbahnfreunde Ost-belgien VoG ist ein verein der gegründet
              worden ist mit dem Ziel sich einzusetzen für den Erhalt und die
              zur Zurschaustellung des historischen Kulturguts Eisenbahn in der
              Region Ostbelgien. Gegründet im November 2023 in Raeren setzt sich
              der Verein, in Zusammenarbeit mit der{" "}
              <Link
                href={"https://eisenbahnfreunde-grenzland.de/"}
                className="text-foreground underline"
              >
                Eisenbahnfreunde Grenzland e.V.
              </Link>{" "}
              für den Erhalt des technischen und historischen Materials der
              Eisenbahn (insbesondere der ehemaligen Vennbahnstrecke) ein.
            </p>
            <Link href={"/about"}>
              <Button variant={"outline"}>Mehr erfahren</Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
