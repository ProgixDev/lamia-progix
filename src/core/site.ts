/**
 * Central site config — the single source for metadata, robots, sitemap, and
 * manifest. Replace name/description and set NEXT_PUBLIC_SITE_URL per app (it
 * drives canonical + Open Graph URLs).
 */
export const site = {
  name: "Progix — Récréo",
  shortName: "Récréo",
  description:
    "Devis contractuel Progix : développement de Récréo — application mobile qui aide les parents à localiser les lieux adaptés aux enfants (parcs, aires de jeux, espaces verts, zones familiales) en Île-de-France : cartographie, recherche et filtres, fiches de lieux, back-office, site vitrine et accompagnement marketing jusqu’à la mise en marché.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "fr_FR",
} as const;
