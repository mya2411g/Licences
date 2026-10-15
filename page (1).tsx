import Link from "next/link";

const LIEN_PAIEMENT =
  process.env.NEXT_PUBLIC_STRIPE_LINK ?? "https://buy.stripe.com/test_dRmaER2gw69NgqU0f82kw00";

function Bouton({ className = "" }: { className?: string }) {
  return (
    <a
      href={LIEN_PAIEMENT}
      className={`block rounded-md bg-feu px-6 py-4 text-center text-lg font-semibold text-white active:opacity-90 ${className}`}
    >
      Réserver mon audit, 79 € par mois
    </a>
  );
}

export default function Accueil() {
  return (
    <main className="mx-auto max-w-xl px-5 pb-32 pt-10">
      <h1 className="font-[family-name:var(--font-titre)] text-4xl font-extrabold leading-tight">
        Les logiciels que votre entreprise paie et que personne n&apos;utilise
      </h1>
      <p className="mt-4 text-lg">
        Nous listons vos abonnements, trouvons les comptes oubliés et les doublons, et vous disons combien vous récupérez.
      </p>

      <section className="mt-8 border-y border-ink/30 py-6">
        <p className="font-[family-name:var(--font-titre)] text-5xl font-extrabold text-feu">900 € par an</p>
        <p className="mt-2">
          Exemple : 3 comptes restés ouverts après un départ, à 25 € par mois chacun. Personne ne les a décidés, tout le monde les paie.
        </p>
      </section>

      <ul className="mt-8 space-y-5">
        <li><b>Comptes inutilisés.</b> Chaque abonnement payé sans utilisateur actif est repéré.</li>
        <li><b>Doublons.</b> Deux équipes qui paient deux outils pour la même fonction sont signalées.</li>
        <li><b>Rappel de renouvellement.</b> Vous êtes prévenu avant chaque reconduction annuelle.</li>
      </ul>

      <section className="mt-10 rounded-md border-2 border-ink p-5">
        <h2 className="font-[family-name:var(--font-titre)] text-2xl font-bold">Satisfait ou remboursé 30 jours</h2>
        <p className="mt-2">
          Si l&apos;audit ne vous convient pas, écrivez-nous dans les 30 jours. Remboursement sous 5 jours ouvrés, sans justification.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="font-[family-name:var(--font-titre)] text-2xl font-bold">Offre fondateur</h2>
        <p className="mt-2">
          79 € par mois, soit 2,60 € par jour. Vous recevez sous 5 jours l&apos;audit de vos abonnements, puis l&apos;accès à l&apos;outil dès sa sortie. Sans engagement, résiliable à tout moment.
        </p>
        <Bouton className="mt-5" />
      </section>

      <footer className="mt-14 text-sm">
        <Link href="/legal#mentions" className="mr-4 underline">Mentions légales</Link>
        <Link href="/legal#cgv" className="mr-4 underline">CGV</Link>
        <Link href="/legal#confidentialite" className="underline">Confidentialité</Link>
      </footer>

      <div className="fixed inset-x-0 bottom-0 border-t border-ink/20 bg-creme p-3 md:hidden">
        <Bouton />
      </div>
    </main>
  );
}
