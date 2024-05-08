import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full">
        <div className="container mx-auto">
          <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
            <div>
              <Badge>À venir</Badge>
            </div>
            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-6xl max-w-2xl tracking-tighter text-center font-regular">
                Production vidéo et photo pour entreprises
              </h1>
              <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
                Chez Prise 1, nous aidons les entreprises à faire rayonner leur
                professionalisme et savoir-faire. Nous nous spécialisons dans la
                production de photos et vidéos d'équipes, de présentations
                d'offres de services et de témoignages clients.
              </p>
            </div>
            <div className="flex flex-row gap-3">
              <Button size="lg" className="gap-4">
                Contactez-nous <MoveRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
