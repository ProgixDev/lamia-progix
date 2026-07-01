/**
 * Faithful content for the Progix "Devis contractuel" — Récréo (nom de travail).
 * List-shaped data lives here; prose with inline emphasis is authored in the
 * section JSX.
 *
 * All copy uses French typography (’ « » … —) — keep it that way.
 */

export const cover = {
  tag: "Devis contractuel · Bon de commande",
  title: "Développement de votre",
  titleLight: "application de sorties en famille",
  subtitle:
    "Application mobile qui aide les parents à localiser les lieux adaptés aux enfants — parcs, aires de jeux, espaces verts et zones familiales — partout en Île-de-France. Cartographie, recherche et filtres, fiches de lieux, plus back-office, site vitrine et accompagnement marketing jusqu’à la mise en marché. Un prix fixe, une équipe senior, votre propriété à 100 %.",
  badges: [
    { l: "Investissement", v: "5 000 – 6 000 €", u: "" },
    { l: "Délai de livraison", v: "60", u: " jours" },
    { l: "Accompagnement", v: "90", u: " jours" },
  ],
  meta: [
    { l: "Projet", v: "Récréo (nom de travail)" },
    { l: "Client", v: "Lamia" },
    { l: "Prestataire", v: "Progix Inc. · NEQ 1181317117" },
    { l: "Référence · Date", v: "DEVIS-PROGIX-2026 · ____________" },
  ],
} as const;

export const trust = [
  { n: "12", l: "ingénieurs dédiés" },
  { n: "100+", l: "projets livrés" },
  { n: "100 %", l: "propriété au Client" },
  { n: "CA · FR", l: "équipe Canada & France" },
] as const;

/** Section 02 — prestations included, grouped. `b` is emphasized, `t` follows. */
export const incl1 = [
  { b: "Application mobile iOS & Android", t: ", design sur mesure inclus" },
  { b: "Cartographie & géolocalisation", t: " des lieux adaptés aux enfants" },
  {
    b: "Recherche & filtres",
    t: " : parcs, aires de jeux, espaces verts, zones familiales",
  },
  { b: "Fiches de lieux détaillées", t: " (photos, équipements, accessibilité)" },
  { b: "Favoris, itinéraires & partage", t: " d’un lieu en un geste" },
  { b: "Contribution & signalement", t: " de lieux par la communauté (selon cadrage)" },
  { b: "Back-office d’administration", t: " & modération des lieux" },
  { b: "Landing page / site vitrine", t: ", optimisé acquisition" },
  { b: "3 révisions de maquettes", t: " incluses dans le forfait" },
] as const;

export const incl2 = [
  {
    b: "Phase de cadrage & recherche des données",
    t: " : API cartographiques existantes vs collecte sur mesure",
  },
  {
    b: "Système d’abonnement / monétisation in-app",
    t: " : essai gratuit puis 4,99 €/mois",
  },
  { b: "API & infrastructure cloud scalable", t: " selon la charge utilisateur" },
  { b: "Publication", t: " sur l’App Store & le Google Play Store" },
] as const;

export const incl3 = [
  {
    b: "Formation marketing complète",
    t: " : UGC, Meta Ads, Apple Search Ads, Google Play Ads (scripts fournis)",
  },
  { b: "Suivi hebdomadaire", t: " des KPIs pendant 90 jours" },
  { b: "Optimisation du coût d’acquisition", t: " (tests de paywalls, A/B testing)" },
  { b: "Support technique 90 jours", t: " + documentation technique complète" },
] as const;

/** Section 03 — investment table, poste par poste. `alt` rows get the tinted
 * background; the priced lines sum to the 5 000 € Formule Essentielle (la
 * Formule Premium porte le total à 6 000 €, marketing entièrement géré). */
export const investment = [
  {
    strong: "Application mobile iOS + Android",
    text: " (design sur mesure)",
    amount: "1 700 €",
    alt: false,
  },
  {
    text: "Phase de cadrage & recherche des données cartographiques",
    amount: "600 €",
    alt: true,
  },
  { text: "Cartographie, géolocalisation & filtres des lieux", amount: "750 €", alt: false },
  { text: "Back-office d’administration & modération", amount: "650 €", alt: true },
  { text: "Landing page / site vitrine", amount: "250 €", alt: false },
  { text: "API & infrastructure cloud scalable", amount: "500 €", alt: true },
  { text: "Déploiement App Store + Play Store", amount: "150 €", alt: false },
  {
    text: "Accompagnement marketing 90 j (Offre n°1 — formation, scripts, suivi)",
    amount: "400 €",
    alt: true,
  },
  {
    text: "Documentation, maintenance & support 90 jours",
    amount: "Inclus",
    included: true,
    alt: false,
  },
] as const;

/** Section 03 — échéancier de la Formule Premium : 1 000 €/mois × 6 (6 000 €).
 * La Formule Essentielle (5 000 €) est un forfait, hors paiement mensuel. */
export const payments = [
  {
    pct: "MOIS 1",
    when: "Au démarrage",
    desc: "Signature + réunion de cadrage",
    amount: "1 000 €",
  },
  {
    pct: "MOIS 2",
    when: "Cadrage & design",
    desc: "Recherche des données, maquettes",
    amount: "1 000 €",
  },
  {
    pct: "MOIS 3",
    when: "Développement",
    desc: "Cartographie & fonctionnalités",
    amount: "1 000 €",
  },
  { pct: "MOIS 4", when: "Développement", desc: "Back-office & intégrations", amount: "1 000 €" },
  {
    pct: "MOIS 5",
    when: "Recette & publication",
    desc: "Tests, stores, mise en ligne",
    amount: "1 000 €",
  },
  { pct: "MOIS 6", when: "Lancement", desc: "Mise en marché & accompagnement", amount: "1 000 €" },
] as const;

/** Section 04 — les deux formules proposées au Client : Essentielle 5 000 €
 * (forfait, marketing guidé) ou Premium 6 000 € réglée à 1 000 €/mois (marketing
 * entièrement géré). Le périmètre de développement est identique ; seul
 * l’accompagnement marketing change. La cliente choisit une formule, puis signe. */
export const formules = [
  {
    key: "essentielle",
    name: "Formule Essentielle",
    badge: "Accompagnement inclus",
    tagline:
      "Tout le développement, plus un accompagnement marketing guidé — vous exécutez, Progix vous guide.",
    price: "5 000 €",
    priceUnit: "",
    priceNote: "forfait unique, tout compris",
    points: [
      { b: "Application, cartographie, back-office, site vitrine", t: " & déploiement complet" },
      { b: "Accompagnement marketing Offre n°1", t: " — inclus pendant 90 jours" },
      { b: "Formation, scripts UGC", t: ", conseils créatifs & publicitaires" },
      { b: "Plan d’action & réunion KPI", t: " hebdomadaires" },
      { b: "Vous exécutez les actions", t: ", accompagné pas à pas par Progix" },
    ],
    result:
      "Obligation de résultat sous réserve que la cliente applique l’ensemble des recommandations fournies.",
  },
  {
    key: "premium",
    name: "Formule Premium — clé en main",
    badge: "Gestion complète",
    tagline: "Tout le développement, et Progix pilote entièrement vos campagnes publicitaires.",
    price: "6 000 €",
    priceUnit: "",
    priceNote: "tout compris · 1 000 €/mois × 6",
    points: [
      { b: "Tout le périmètre de la Formule Essentielle", t: "" },
      { b: "Création des vidéos UGC, visuels & publicités", t: " par Progix" },
      { b: "Lancement & gestion des campagnes", t: " : Meta, Apple Search & Google Play Ads" },
      { b: "Optimisations quotidiennes", t: " & reporting détaillé" },
      { b: "Progix fait tout", t: " — vous suivez les résultats" },
    ],
    result:
      "Objectifs non atteints malgré le respect des conditions du contrat ? Progix poursuit les campagnes à ses frais jusqu’à les atteindre.",
  },
] as const;

/** Section 06 — delivery phases (≈ 60 jours au total). */
export const phases = [
  {
    tag: "PHASE 1",
    title: "Cadrage & recherche",
    desc: "≈ Semaines 1 – 2 · ateliers, sources de données, stratégie cartographie",
  },
  {
    tag: "PHASE 2",
    title: "Design & développement",
    desc: "≈ Semaines 3 – 7 · app, cartographie, filtres, back-office",
  },
  {
    tag: "PHASE 3",
    title: "Recette & publication",
    desc: "≈ Semaines 8 – 9 · tests, corrections, mise en ligne sur les stores",
  },
] as const;

/** Header / footer navigation across the document set. */
export const navLinks = [
  { key: "accueil", label: "Présentation", href: "/" },
  { key: "cahier", label: "Cahier des charges", href: "/cahier-des-charges" },
  { key: "calendrier", label: "Calendrier", href: "/calendrier" },
  { key: "devis", label: "Devis contractuel", href: "/devis" },
] as const;
