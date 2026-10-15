export const metadata = { title: "Informations légales" };

export default function Legal() {
  return (
    <main className="mx-auto max-w-xl space-y-10 px-5 py-10">
      <a href="/" className="underline">Retour à l&apos;accueil</a>
      <section id="mentions">
        <h1 className="font-[family-name:var(--font-titre)] text-3xl font-bold">Mentions légales</h1>
        <p className="mt-3">Éditeur : [À COMPLÉTER : nom ou raison sociale], [À COMPLÉTER : SIRET], [À COMPLÉTER : adresse], [À COMPLÉTER : email de contact].</p>
        <p className="mt-3">Hébergeur : Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.</p>
      </section>
      <section id="cgv">
        <h2 className="font-[family-name:var(--font-titre)] text-3xl font-bold">Conditions générales de vente</h2>
        <p className="mt-3">Offre : abonnement mensuel de 79 € par entreprise, sans engagement, résiliable à tout moment. Livraison : audit des abonnements sous 5 jours, puis accès à l&apos;outil dès sa sortie.</p>
        <p className="mt-3">Garantie : remboursement intégral sur simple email dans les 30 jours suivant le paiement, versé sous 5 jours ouvrés. [À COMPLÉTER : conditions de TVA et droit de rétractation à valider.]</p>
      </section>
      <section id="confidentialite">
        <h2 className="font-[family-name:var(--font-titre)] text-3xl font-bold">Politique de confidentialité</h2>
        <p className="mt-3">Nous collectons votre email et les relevés que vous nous envoyez, uniquement pour réaliser votre audit. Le paiement est traité par Stripe. Vous pouvez demander la suppression de vos données à [À COMPLÉTER : email].</p>
      </section>
    </main>
  );
}
