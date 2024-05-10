import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Page() {
  return (
    <main className="flex-1 flex items-center justify-center">
      <div className="flex flex-col space-y-4 max-w-[750px]">
        <h2>Spenden</h2>
        <p>
          Spenden dürfen sie natürlich auch. 😊 Wie jeder Verein sind auch wir
          auf Spenden angewiesen, um unsere Ziele zu verwirklichen. Wir danken
          im Voraus für Ihre Großzügigkeit!
        </p>
        <p>
          Sie können uns aber auch finanziell durch eine Fördermitgliedschaft
          unterstützen.
        </p>
        <Card>
            <CardHeader>
                <CardTitle>Kontoverbindung</CardTitle>
            </CardHeader>
            <CardContent>
                
            </CardContent>
        </Card>
      </div>
    </main>
  );
}
