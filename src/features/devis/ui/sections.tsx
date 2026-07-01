import { cn } from "@/lib/utils";
import { BadgeHeading, InfoBox, Pill, SectionHeader, Strong, SubHeading } from "./primitives";
import { incl1, incl2, incl3, investment, payments, phases, trust } from "./content";
import { FormuleChoice } from "./formule-choice";
import styles from "./devis.module.css";

/** A styled reference to another document in the set. */
function DocRef({ children }: { children: React.ReactNode }) {
  return <span className={styles.link}>{children}</span>;
}

function CheckList({ items }: { items: ReadonlyArray<{ b: string; t: string }> }) {
  return (
    <div className={styles.checkGrid}>
      {items.map((i) => (
        <div key={i.b} className={styles.check}>
          <span className={styles.checkMark} aria-hidden="true">
            ✓
          </span>
          <span>
            <Strong>{i.b}</Strong>
            {i.t}
          </span>
        </div>
      ))}
    </div>
  );
}

/** Illustrative delay-compensation rows: retard → part du délai → montant. */
const delayRows = [
  { d: "5 jours", frac: "1 / 12", amount: "417 €" },
  { d: "10 jours", frac: "1 / 6", amount: "833 €" },
  { d: "20 jours", frac: "1 / 3", amount: "1 667 €" },
] as const;

/** Sections 01–08 of the devis (section 09, the signature block, is separate). */
export function BodySections() {
  return (
    <>
      {/* 01 — OBJET */}
      <section id="s1" data-dc-section className={cn(styles.section, styles.sectionA)}>
        <div className={styles.container}>
          <SectionHeader num="01 — OBJET" title="Objet du devis" />
          <p className={styles.pLead}>
            Le présent devis contractuel (le « Devis ») définit les modalités selon lesquelles{" "}
            <Strong>Progix Inc.</Strong> (le « Prestataire ») s’engage à concevoir, développer et
            livrer <Strong>Récréo</Strong> (l’« Application »), une application mobile qui aide les
            parents à localiser les lieux adaptés aux enfants — parcs, aires de jeux, espaces verts
            et zones familiales — pour le compte de la cliente signataire (la « Cliente »).
          </p>
          <p className={styles.p}>
            Il précise les prestations incluses, l’investissement et son échéancier, les{" "}
            <Strong>deux formules d’accompagnement</Strong> proposées, ainsi que les engagements
            respectifs des Parties. Le périmètre fonctionnel et technique détaillé fait l’objet du{" "}
            <DocRef>cahier des charges</DocRef> associé, qui complète le présent Devis. La signature
            du Devis, avec la formule retenue, vaut acceptation de l’ensemble de ses termes et
            engagement ferme.
          </p>
          <div className={styles.trust}>
            {trust.map((t) => (
              <div key={t.l} className={styles.trustCell}>
                <div className={styles.trustNum}>{t.n}</div>
                <div className={styles.trustLabel}>{t.l}</div>
              </div>
            ))}
          </div>
          <InfoBox icon="i" title="Un partenaire, pas un simple prestataire">
            Un freelance exécute une commande. Une ESN facture 15 000 à 20 000 €. Progix se situe
            entre les deux : l’expertise d’une équipe senior et un accompagnement business complet,
            au prix d’un lancement.
          </InfoBox>
        </div>
      </section>

      {/* 02 — PRESTATIONS */}
      <section id="s2" data-dc-section className={cn(styles.section, styles.sectionB)}>
        <div className={styles.container}>
          <SectionHeader
            num="02 — PRESTATIONS"
            title="Tout ce qui est inclus"
            lead="Une prestation complète, de la conception jusqu’à la mise en marché et au lancement commercial. Rien à gérer en plus."
          />
          <SubHeading first>Conception & développement</SubHeading>
          <CheckList items={incl1} />
          <SubHeading>Cartographie, abonnement & mise en ligne</SubHeading>
          <CheckList items={incl2} />
          <SubHeading>Lancement & accompagnement</SubHeading>
          <CheckList items={incl3} />
        </div>
      </section>

      {/* 03 — INVESTISSEMENT */}
      <section id="s3" data-dc-section className={cn(styles.section, styles.sectionA)}>
        <div className={styles.container}>
          <SectionHeader
            num="03 — INVESTISSEMENT"
            title="Votre investissement"
            lead="Décomposition transparente, poste par poste. Formule Essentielle à 5 000 € (forfait) ou Formule Premium à 6 000 € (réglée à 1 000 €/mois). Le tableau ci-dessous détaille la Formule Essentielle ; la Formule Premium porte le total à 6 000 € (campagnes entièrement gérées)."
          />
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Composante de la prestation</th>
                  <th className={styles.thRight}>Montant</th>
                </tr>
              </thead>
              <tbody>
                {investment.map((row, idx) => (
                  <tr key={idx} className={row.alt ? styles.tableAlt : undefined}>
                    <td>
                      {"strong" in row && row.strong ? (
                        <>
                          <Strong>{row.strong}</Strong>
                          {row.text}
                        </>
                      ) : (
                        row.text
                      )}
                    </td>
                    <td
                      className={cn(
                        styles.tableNum,
                        "included" in row && row.included && styles.tableIncluded,
                      )}
                    >
                      {row.amount}
                    </td>
                  </tr>
                ))}
                <tr className={styles.tableTotal}>
                  <td>
                    <strong>Formule Essentielle — tout compris</strong>
                  </td>
                  <td className={styles.tableTotalAmount}>5 000 €</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={cn(styles.totalPanel, styles.lift)}>
            <div className={styles.totalPanelInner}>
              <span className={styles.totalArrow} aria-hidden="true">
                —
              </span>
              <div className={styles.totalEyebrow}>Investissement · selon la formule</div>
              <div className={styles.totalValue}>5 000 € – 6 000 €</div>
              <div className={styles.totalNote}>
                <Strong>Formule Essentielle : 5 000 €</Strong> (forfait).{" "}
                <Strong>Formule Premium : 6 000 €</Strong>, réglée à 1 000 €/mois. Prix ferme, aucun
                coût caché.
              </div>
            </div>
          </div>
          <InfoBox icon="€" title="Aucune taxe applicable">
            Progix étant une entreprise <Strong>canadienne</Strong> et la Cliente étant établie en{" "}
            <Strong>France</Strong>, la prestation n’est pas assujettie à la TVA ni à aucune taxe de
            vente (service transfrontalier — autoliquidation par le preneur le cas échéant).{" "}
            <Strong>
              Le montant retenu (5 000 € ou 6 000 €) correspond au montant net à payer.
            </Strong>
          </InfoBox>
          <SubHeading>Échéancier de paiement — Formule Premium</SubHeading>
          <div className={styles.grid3} style={{ margin: "6px 0 16px" }}>
            {payments.map((p) => (
              <div key={p.pct} className={cn(styles.payCard, styles.lift)}>
                <div className={styles.payPct}>{p.pct}</div>
                <div className={styles.payWhen}>{p.when}</div>
                <div className={styles.payDesc}>{p.desc}</div>
                <div className={styles.payAmount}>{p.amount}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "13px", color: "var(--slate)", margin: 0, lineHeight: 1.6 }}>
            La <Strong>Formule Premium (6 000 €)</Strong> est réglée à{" "}
            <Strong>1 000 €/mois sur 6 mois</Strong> par <Strong>Stripe</Strong> ou{" "}
            <Strong>virement bancaire</Strong>, en euros ; la{" "}
            <Strong>Formule Essentielle (5 000 €)</Strong> est un forfait, selon les modalités
            convenues à la signature. La livraison intervient dès ≈ 60 jours. Aucun travail de
            développement ne débute avant réception du premier versement. La monétisation de
            l’Application repose sur un{" "}
            <Strong>essai gratuit puis un abonnement à 4,99 €/mois</Strong>, modèle éprouvé sur ce
            type d’application.
          </p>
        </div>
      </section>

      {/* 04 — FORMULES */}
      <section id="s4" data-dc-section className={cn(styles.section, styles.sectionB)}>
        <div className={styles.container}>
          <SectionHeader
            num="04 — FORMULES"
            title="Deux formules, au choix"
            lead="Deux formules au choix — Essentielle à 5 000 € ou Premium à 6 000 € (réglée à 1 000 €/mois). Le périmètre de développement est identique ; seul l’accompagnement marketing change : à vous d’exécuter avec notre méthode, ou à nous de tout piloter. Sélectionnez la formule qui vous convient — votre choix est reporté dans le bon de commande."
          />
          <FormuleChoice />
          <SubHeading>Ce que comprend l’accompagnement (90 jours)</SubHeading>
          <div className={styles.grid2}>
            <div className={cn(styles.card, styles.lift)}>
              <h3 className={styles.cardTitle}>
                <span className={styles.cardNum} aria-hidden="true">
                  1
                </span>
                Formation & méthode
              </h3>
              <p className={styles.cardText}>
                Créer des vidéos publicitaires (UGC) qui convertissent, lancer et optimiser des
                campagnes <Strong>Meta Ads</Strong>, <Strong>Apple Search Ads</Strong> et{" "}
                <Strong>Google Play Ads</Strong>.
              </p>
            </div>
            <div className={cn(styles.card, styles.lift)}>
              <h3 className={styles.cardTitle}>
                <span className={cn(styles.cardNum, styles.cardNumNavy)} aria-hidden="true">
                  2
                </span>
                Scripts & création
              </h3>
              <p className={styles.cardText}>
                Scripts UGC, conseils créatifs et publicitaires issus du playbook interne de Progix.
                En Formule Premium, Progix <Strong>produit et gère tout</Strong>.
              </p>
            </div>
            <div className={cn(styles.card, styles.lift)}>
              <h3 className={styles.cardTitle}>
                <span className={styles.cardNum} aria-hidden="true">
                  3
                </span>
                Plan d’action & suivi hebdomadaire
              </h3>
              <p className={styles.cardText}>
                Plan d’action hebdomadaire, revue des KPIs et consignes concrètes pour la semaine
                suivante — réunion chaque semaine.
              </p>
            </div>
            <div className={cn(styles.card, styles.lift)}>
              <h3 className={styles.cardTitle}>
                <span className={cn(styles.cardNum, styles.cardNumNavy)} aria-hidden="true">
                  4
                </span>
                Analyse & optimisation
              </h3>
              <p className={styles.cardText}>
                Analyse des performances, tests de paywalls et A/B testing pour optimiser le coût
                d’acquisition et le taux de conversion.
              </p>
            </div>
          </div>
          <InfoBox variant="ok" icon="★" title="Objectifs — obligation de résultat">
            L’accompagnement vise un <Strong>coût d’acquisition inférieur à 1 €</Strong> et un{" "}
            <Strong>taux de conversion supérieur à 25 %</Strong> (passage de l’utilisateur gratuit
            vers l’abonnement payant). En <Strong>Formule Essentielle</Strong>, cette obligation
            s’applique sous réserve que la Cliente applique l’ensemble des recommandations. En{" "}
            <Strong>Formule Premium</Strong>, si les objectifs ne sont pas atteints malgré le
            respect des conditions du contrat, Progix poursuit les campagnes à ses frais jusqu’à les
            atteindre — par exemple, si un budget de 2 000 € devait acquérir 2 000 utilisateurs et
            que 1 800 sont obtenus, Progix finance l’acquisition des 200 restants.
          </InfoBox>
          <p className={styles.note}>
            La Cliente prévoit un <Strong>budget publicitaire minimum de 2 000 €</Strong> au
            lancement, réparti entre Apple Search Ads, Google Play Ads, Meta Ads et la production de
            vidéos UGC. Ce budget média est <Strong>distinct</Strong> du montant du présent devis.
            Zone ciblée : <Strong>Île-de-France</Strong> · public : <Strong>parents</Strong>.
          </p>
        </div>
      </section>

      {/* 05 — APRÈS-LIVRAISON */}
      <section id="s5" data-dc-section className={cn(styles.section, styles.sectionA)}>
        <div className={styles.container}>
          <SectionHeader num="05 — APRÈS-LIVRAISON" title="Support, maintenance & propriété" />
          <InfoBox variant="ok" icon="★" title="Vous êtes propriétaire à 100 %">
            La Cliente est propriétaire de l’intégralité de l’Application. La propriété
            intellectuelle est <Strong>transférée progressivement à mesure des paiements</Strong> :
            chaque mensualité réglée transfère la portion correspondante des travaux. À la livraison
            finale, une documentation technique complète est remise — l’Application peut être
            reprise par tout développeur de votre choix. <Strong>Aucun verrouillage.</Strong>
          </InfoBox>
          <SubHeading>Support inclus — 90 jours</SubHeading>
          <ul className={styles.arrowList}>
            <li className={styles.arrowItem}>
              Correction des bugs et ajustements mineurs (hors nouvelles fonctionnalités).
            </li>
            <li className={styles.arrowItem}>
              Temps de réponse sous <Strong>24 heures</Strong> + point de suivi hebdomadaire.
            </li>
          </ul>
          <SubHeading>
            Au-delà des 90 jours <Pill>Optionnel</Pill>
          </SubHeading>
          <div className={styles.grid2}>
            <div className={cn(styles.card, styles.lift)}>
              <h3 className={styles.cardTitle}>
                <span className={cn(styles.cardNum, styles.cardNumNavy)} aria-hidden="true">
                  ♲
                </span>
                Maintenance mensuelle
              </h3>
              <p className={styles.cardText}>
                <Strong>90 € / mois</Strong> — support continu, correction de bugs et petites
                corrections, disponibilité étendue grâce à l’équipe sur plusieurs fuseaux horaires.
              </p>
            </div>
            <div className={cn(styles.card, styles.lift)}>
              <h3 className={styles.cardTitle}>
                <span className={styles.cardNum} aria-hidden="true">
                  +
                </span>
                Évolutions & nouvelles fonctionnalités
              </h3>
              <p className={styles.cardText}>
                <Strong>80 $ / heure</Strong> — pour toute évolution postérieure de l’Application
                (itinéraires avancés, avis et notes, modules premium, fonctionnalités
                additionnelles…).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 06 — DÉLAI */}
      <section id="s6" data-dc-section className={cn(styles.section, styles.sectionB)}>
        <div className={styles.container}>
          <SectionHeader
            num="06 — DÉLAI"
            title="Délai, stores & compensation"
            lead="Livraison sous 60 jours à compter de la date de démarrage (réception du premier versement + réunion de cadrage). Une phase de cadrage de 2 semaines précède le développement. Réalisation itérative, avec validation de la Cliente à chaque étape clé."
          />
          <div className={styles.grid3} style={{ margin: "16px 0" }}>
            {phases.map((p) => (
              <div key={p.tag} className={cn(styles.payCard, styles.lift)}>
                <div className={styles.payPct}>{p.tag}</div>
                <div className={styles.payWhen}>{p.title}</div>
                <div className={styles.phaseDesc}>{p.desc}</div>
              </div>
            ))}
          </div>
          <InfoBox icon="i" title="Délais liés aux stores (hors de notre contrôle)">
            Ce délai peut être prolongé lorsque l’<Strong>App Store</Strong> ou le{" "}
            <Strong>Google Play Store</Strong> demandent des modifications, des validations
            supplémentaires ou refusent une première soumission. Ces délais ne sont pas sous le
            contrôle de Progix et ne donnent pas lieu à compensation.
          </InfoBox>
          <BadgeHeading badge="§">Compensation de retard (proportionnelle)</BadgeHeading>
          <p className={styles.p}>
            En cas de retard de livraison <Strong>imputable au Prestataire</Strong>, la Cliente
            bénéficie d’une compensation financière <Strong>proportionnelle</Strong> à la durée du
            retard, calculée sur le montant de la formule retenue. La compensation correspond à la
            part du délai dépassée : <Strong>(jours de retard ÷ 60) × le montant retenu</Strong>.
            Ainsi, sur la Formule Essentielle (5 000 €), 10 jours de retard équivalent à 1/6 du
            délai, soit une compensation de 833 €.
          </p>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Retard imputable à Progix</th>
                  <th className={styles.thRight}>Part du délai (/60 j)</th>
                  <th className={styles.thRight}>Compensation (sur 5 000 €)</th>
                </tr>
              </thead>
              <tbody>
                {delayRows.map((r, idx) => (
                  <tr key={r.d} className={idx % 2 === 1 ? styles.tableAlt : undefined}>
                    <td>{r.d}</td>
                    <td className={styles.tableNum}>{r.frac}</td>
                    <td className={styles.tableNum}>{r.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={styles.note}>
            Ne donnent <Strong>pas</Strong> lieu à compensation les retards dus : aux stores (Apple
            / Google), aux validations ou demandes de modification de leur part, aux demandes de
            changement de la Cliente, ou aux retards de réponse de la Cliente.
          </p>
        </div>
      </section>

      {/* 07 — ENGAGEMENTS */}
      <section id="s7" data-dc-section className={cn(styles.section, styles.sectionA)}>
        <div className={styles.container}>
          <SectionHeader num="07 — ENGAGEMENTS" title="Engagements de la Cliente" />
          <BadgeHeading badge="A" first>
            Ce que la Cliente fournit
          </BadgeHeading>
          <p className={styles.p}>
            Pour permettre la tenue du délai et la qualité de la livraison, la Cliente s’engage à :
          </p>
          <ul className={styles.arrowList}>
            <li className={styles.arrowItem}>
              Fournir en temps utile les <Strong>contenus, informations et validations</Strong>{" "}
              nécessaires à l’avancement, notamment lors de la phase de cadrage cartographie.
            </li>
            <li className={styles.arrowItem}>
              Créer les comptes <Strong>Apple Developer</Strong> (99 $/an) et{" "}
              <Strong>Google Play Console</Strong> (25 $ une fois) et fournir les accès — Progix
              accompagne la création et publie pour la Cliente.
            </li>
            <li className={styles.arrowItem}>
              Créer un compte <Strong>Stripe</Strong> pour l’abonnement et fournir un accès
              développeur le cas échéant.
            </li>
            <li className={styles.arrowItem}>
              Prévoir le <Strong>budget publicitaire minimum</Strong> de 2 000 € pour le lancement.
            </li>
            <li className={styles.arrowItem}>
              Participer aux <Strong>points hebdomadaires</Strong> et appliquer les recommandations
              marketing — condition de l’obligation de résultat.
            </li>
          </ul>
          <BadgeHeading badge="B">Retards imputables à la Cliente</BadgeHeading>
          <p className={styles.p}>
            Les retards liés à l’absence de validation, de contenu ou d’accès, ou aux demandes de
            modification de la Cliente, ne sont pas pris en compte dans le calcul de la compensation
            de retard (section 06) et peuvent décaler la date de livraison d’autant.
          </p>
        </div>
      </section>

      {/* 08 — DISPOSITIONS */}
      <section id="s8" data-dc-section className={cn(styles.section, styles.sectionB)}>
        <div className={styles.container}>
          <SectionHeader num="08 — DISPOSITIONS" title="Dispositions générales" />
          <BadgeHeading badge="1" first>
            Droit applicable & juridiction
          </BadgeHeading>
          <p className={styles.p}>
            Le présent Devis est régi par les lois de la province de Québec et les lois fédérales du
            Canada applicables. Tout litige est soumis à la compétence exclusive des tribunaux de la
            province de Québec, district de Montréal.
          </p>
          <BadgeHeading badge="2">Intégralité de l’entente</BadgeHeading>
          <p className={styles.p}>
            Le présent Devis, complété par le <DocRef>cahier des charges</DocRef> associé et la
            formule retenue, constitue l’intégralité de l’entente entre les Parties relativement à
            son objet et remplace toute entente ou communication antérieure.
          </p>
          <BadgeHeading badge="3">Modifications</BadgeHeading>
          <p className={styles.p}>
            Toute modification du présent Devis ou du périmètre convenu doit faire l’objet d’un
            écrit signé par les deux Parties.
          </p>
          <BadgeHeading badge="4">Divisibilité</BadgeHeading>
          <p className={styles.p}>
            Si une disposition du présent Devis est jugée invalide ou inapplicable, les autres
            dispositions demeurent en vigueur et de plein effet.
          </p>
        </div>
      </section>
    </>
  );
}
