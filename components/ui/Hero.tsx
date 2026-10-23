import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 pt-40 pb-24 max-w-4xl mx-auto">
      
      {/* Petit badge au-dessus du titre (optionnel mais très pro) */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-zinc-600 text-sm font-medium mb-8">
        <span className="w-2 h-2 rounded-full bg-green-500"></span>
        Sécurisé et audité
      </div>

      {/* Titre principal */}
      <h1 className="text-6xl md:text-7xl font-bold tracking-tighter text-[#0f1c32] mb-6">
        Le futur de votre épargne <br className="hidden md:block" /> est ici.
      </h1>

      {/* Sous-titre */}
      <p className="text-xl md:text-2xl text-zinc-500 font-light mb-12 max-w-2xl">
        Ktemas est un coffre-fort numérique décentralisé. Déposez vos tokens, générez des récompenses et participez à la gouvernance du protocole.
      </p>

      {/* Boutons d'action */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
        <Link href="/app">
          <Button className="bg-[#0f1c32] hover:bg-[#1a2d4a] text-white rounded-full px-8 py-6 text-lg w-full sm:w-auto">
            Ouvrir mon Vault
          </Button>
        </Link>
        <Link href="/documentation">
          <Button variant="outline" className="border-zinc-200 text-[#0f1c32] rounded-full px-8 py-6 text-lg hover:border-[#0f1c32] w-full sm:w-auto">
            Lire le whitepaper
          </Button>
        </Link>
      </div>
    </section>
  );
}