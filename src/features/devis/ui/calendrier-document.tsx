import { Cover } from "./cover";
import { DcHeader } from "./dc-header";
import { DownloadFab } from "./download-fab";
import { Footer } from "./footer";
import { ScrollReveal } from "./scroll-reveal";
import { SectionHeader } from "./primitives";
import { ChapterBand } from "./chapter-band";
import styles from "./devis.module.css";

/* ---------- Cover data (from the renderVals() island) ---------- */
const coverBadges: ReadonlyArray<{ l: string; v: string; u: string }> = [
  { l: "Durée totale", v: "60", u: " j" },
  { l: "Sprints", v: "6", u: "" },
  { l: "Phases", v: "5", u: "" },
  { l: "Mensualités", v: "6", u: "" },
];

const coverMeta: ReadonlyArray<{ l: string; v: string }> = [
  { l: "Projet", v: "Récréo (nom de travail)" },
  { l: "Client", v: "Lamia" },
  { l: "Prestataire", v: "Progix Inc. · NEQ 1181317117" },
  { l: "Référence · Version", v: "SPRINT-PROGIX-2026 · v1.0" },
];

/* ---------- Section 01 — overview data ---------- */
type Stat = { n: string; u: string; l: string };
const stats: ReadonlyArray<Stat> = [
  { n: "60", u: " jours", l: "du cadrage à la publication" },
  { n: "6", u: "", l: "sprints (Sprint 1 → 6)" },
  { n: "5", u: "", l: "phases avec validation client" },
  { n: "5 000", u: " – 6 000 €", l: "selon la formule retenue" },
];

const G_NV = "linear-gradient(90deg,var(--navy),var(--navy-700))";
const G_TL = "linear-gradient(90deg,var(--navy-700),var(--cyan-deep))";
const G_CY = "linear-gradient(90deg,var(--cyan-deep),var(--cyan))";

type GanttRow = {
  name: string;
  sprint: string;
  left: string;
  width: string;
  label: string;
  bg: string;
};
const gantt: ReadonlyArray<GanttRow> = [
  {
    name: "Cadrage & recherche des données",
    sprint: "Semaines 1–2",
    left: "0%",
    width: "13.3%",
    label: "J1–8",
    bg: G_NV,
  },
  {
    name: "Design UI/UX",
    sprint: "Semaines 2–3",
    left: "13.3%",
    width: "16.7%",
    label: "J9–18",
    bg: G_TL,
  },
  {
    name: "Développement — carte & app",
    sprint: "Semaines 3–7",
    left: "30%",
    width: "23.3%",
    label: "J19–44",
    bg: G_CY,
  },
  {
    name: "Back-office & intégrations",
    sprint: "Semaines 5–7",
    left: "50%",
    width: "23.3%",
    label: "J31–44",
    bg: G_CY,
  },
  {
    name: "Développement — comptes & abonnement",
    sprint: "Semaine 7",
    left: "73.3%",
    width: "16.7%",
    label: "J45–54",
    bg: G_CY,
  },
  {
    name: "Recette & publication",
    sprint: "Semaines 8–9",
    left: "90%",
    width: "10%",
    label: "J55–60",
    bg: G_NV,
  },
];

/* ---------- Section 02 — sprint detail data ---------- */
const ACC = "linear-gradient(160deg,var(--cyan-deep),var(--cyan))";
const NAV = "linear-gradient(160deg,var(--navy-900),var(--navy))";

type Tag = { label: string; bg: string; fg: string; bd: string };
const cy = (label: string): Tag => ({
  label,
  bg: "var(--tint)",
  fg: "var(--cyan-ink)",
  bd: "none",
});
const nv = (label: string): Tag => ({
  label,
  bg: "rgba(255,255,255,0.08)",
  fg: "#cdd9ec",
  bd: "none",
});
const gh = (label: string): Tag => ({
  label,
  bg: "rgba(255,255,255,0.05)",
  fg: "var(--muted)",
  bd: "1px solid var(--line)",
});
const okT = (label: string): Tag => ({ label, bg: "var(--ok-bg)", fg: "var(--ok)", bd: "none" });

type Feat = { b: string; t: string };
const F = (b: string, t: string): Feat => ({ b, t });

type Sprint = {
  hasPhase: boolean;
  phaseNum?: string;
  phaseTitle?: string;
  phaseDays?: string;
  phaseDotBg?: string;
  leftBg: string;
  num: string;
  days: string;
  name: string;
  feats: ReadonlyArray<Feat>;
  tags: ReadonlyArray<Tag>;
};

const sprints: ReadonlyArray<Sprint> = [
  {
    hasPhase: true,
    phaseNum: "1",
    phaseTitle: "Phase 1 — Cadrage & recherche",
    phaseDays: "J1 – J8",
    phaseDotBg: "var(--navy)",
    leftBg: NAV,
    num: "1",
    days: "J1–J8",
    name: "Cadrage & recherche des sources de données",
    feats: [
      F("", "Réunion de kickoff et ateliers de cadrage détaillé du projet."),
      F(
        "Étude des sources de données cartographiques",
        " : API existantes (parcs, aires de jeux, espaces verts) vs collecte de données sur mesure avec le client.",
      ),
      F(
        "Définition des besoins",
        " et des parcours parents (recherche, carte, fiches de lieu, favoris).",
      ),
      F("", "Validation de la stratégie de cartographie et de l’UX avant développement."),
    ],
    tags: [cy("Cadrage validé"), nv("Stratégie de données"), gh("Backlog priorisé")],
  },
  {
    hasPhase: true,
    phaseNum: "2",
    phaseTitle: "Phase 2 — Design",
    phaseDays: "J9 – J18",
    phaseDotBg: "var(--cyan-deep)",
    leftBg: ACC,
    num: "2",
    days: "J9–J18",
    name: "Design UI/UX",
    feats: [
      F("Maquettes des écrans principaux", " : carte, recherche, fiches de lieu, favoris."),
      F("", "Design des parcours parents et de l’expérience de navigation sur la carte."),
      F("Direction artistique", " et identité visuelle de l’app."),
      F("", "Design system et composants réutilisables · jusqu’à 3 révisions incluses."),
    ],
    tags: [cy("Maquettes validées"), nv("Design system")],
  },
  {
    hasPhase: true,
    phaseNum: "3",
    phaseTitle: "Phase 3 — Développement",
    phaseDays: "J19 – J44",
    phaseDotBg: "var(--cyan)",
    leftBg: ACC,
    num: "3",
    days: "J19–J30",
    name: "Carte, géolocalisation & recherche",
    feats: [
      F("Carte interactive géolocalisée", " des lieux adaptés aux enfants en Île-de-France."),
      F("Recherche et filtres", " (parcs, aires de jeux, espaces verts, zones familiales)."),
      F("", "Intégration des sources de données retenues lors du cadrage."),
      F("", "Premier build de test (TestFlight / APK) et itérations."),
    ],
    tags: [cy("Carte & recherche"), nv("Géolocalisation")],
  },
  {
    hasPhase: false,
    leftBg: ACC,
    num: "4",
    days: "J31–J44",
    name: "Fiches de lieux, favoris & contribution",
    feats: [
      F("Fiches de lieux détaillées", " (photos, équipements, accessibilité, avis)."),
      F("Favoris et itinéraires", " vers les lieux sélectionnés."),
      F("Contribution et signalement", " par les parents (ajout et mise à jour de lieux)."),
      F("", "Notifications sur les nouveautés et les lieux à proximité."),
    ],
    tags: [cy("Fiches & favoris"), nv("Contribution & notifications")],
  },
  {
    hasPhase: true,
    phaseNum: "4",
    phaseTitle: "Phase 4 — Comptes & back-office",
    phaseDays: "J45 – J54",
    phaseDotBg: "var(--cyan)",
    leftBg: ACC,
    num: "5",
    days: "J45–J54",
    name: "Compte, abonnement & modération",
    feats: [
      F("Création de compte", " et gestion du profil parent."),
      F("Abonnement", " : essai gratuit puis 4,99 €/mois (intégration de la monétisation)."),
      F("", "Back-office : gestion des lieux, des sources et modération des contributions."),
      F("", "Tableau de bord administrateur et suivi de la qualité des données."),
    ],
    tags: [cy("Compte & abonnement"), nv("Back-office & modération")],
  },
  {
    hasPhase: true,
    phaseNum: "5",
    phaseTitle: "Phase 5 — Recette & publication",
    phaseDays: "J55 – J60",
    phaseDotBg: "var(--navy)",
    leftBg: NAV,
    num: "6",
    days: "J55–J60",
    name: "Tests, finitions & publication",
    feats: [
      F("Tests qualité (QA)", " et correction des bugs."),
      F("", "Optimisation des performances et de l’expérience utilisateur."),
      F("", "Préparation des fiches stores (textes, visuels, captures)."),
      F("Publication", " sur l’App Store et le Google Play Store."),
    ],
    tags: [okT("Application publiée"), nv("Fiches stores")],
  },
];

/* ---------- Section 03 — payment milestones data ---------- */
type Mile = { pct: string; nm: string; when: string; amt: string; trig: string };
const miles: ReadonlyArray<Mile> = [
  {
    pct: "MOIS 1–2 · 1 000 €/MOIS",
    nm: "Démarrage & cadrage",
    when: "À la signature, puis mensuellement — lance le cadrage et la recherche des données",
    amt: "2 000 €",
    trig: "Déclenche le cadrage",
  },
  {
    pct: "MOIS 3–4 · 1 000 €/MOIS",
    nm: "Développement",
    when: "Développement de la carte, des fiches de lieux et des favoris",
    amt: "2 000 €",
    trig: "Cœur du produit",
  },
  {
    pct: "MOIS 5–6 · 1 000 €/MOIS",
    nm: "Livraison & lancement",
    when: "Comptes, abonnement, recette et publication sur les stores",
    amt: "2 000 €",
    trig: "Solde final",
  },
];

const dispFont = "var(--font-disp)";

/**
 * "Calendrier des sprints" document — header, hero cover, the four content
 * sections (overview + Gantt, sprint detail, payment milestones, cadence &
 * validation), and the footer. A Server Component composing client leaves
 * (header, FAB, scroll-reveal) at the edges.
 */
export function CalendrierDocument() {
  return (
    <div className={styles.root} data-devis-root>
      <DcHeader active="calendrier" />
      <main className={styles.main}>
        <DownloadFab />
        <Cover
          tag="Calendrier des sprints · Planning de réalisation"
          title="Le plan de"
          titleLight="livraison, sprint par sprint"
          subtitle="Découpage détaillé de la réalisation de Récréo sur environ 60 jours — une phase de cadrage et de recherche des données de 2 semaines en amont, puis 6 sprints de livraison itérative avec validation à chaque étape. Aligné sur l’échéancier du devis."
          badges={coverBadges}
          meta={coverMeta}
        />

        {/* 01 — VUE D’ENSEMBLE */}
        <section
          id="s1"
          data-dc-section
          style={{
            width: "100%",
            backgroundColor: "var(--band-a)",
          }}
        >
          <div
            style={{
              maxWidth: "1040px",
              margin: "0 auto",
              padding: "clamp(56px,7vw,94px) clamp(24px,5vw,48px)",
            }}
          >
            <SectionHeader
              num="01 — VUE D’ENSEMBLE"
              title="Vue d’ensemble du planning"
              lead="Le projet démarre par 2 semaines de cadrage et de recherche des données, puis est livré de façon itérative sur environ 60 jours, jusqu’à la publication sur les stores. Le calendrier ci-dessous s’aligne sur les phases du devis, tandis que le paiement reste échelonné sur 6 mois."
            />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,150px),1fr))",
                gap: "1px",
                background: "var(--line)",
                border: "1px solid var(--line)",
                borderRadius: "14px",
                overflow: "hidden",
                margin: "18px 0",
              }}
            >
              {stats.map((t) => (
                <div
                  key={t.l}
                  style={{ background: "var(--card)", padding: "20px 16px", textAlign: "center" }}
                >
                  <div
                    style={{
                      fontFamily: dispFont,
                      fontWeight: 700,
                      fontSize: "28px",
                      color: "#fff",
                      letterSpacing: "-.02em",
                    }}
                  >
                    {t.n}
                    <small style={{ fontSize: "14px", color: "var(--cyan)", fontWeight: 600 }}>
                      {t.u}
                    </small>
                  </div>
                  <div
                    style={{
                      fontSize: "11.5px",
                      color: "var(--muted)",
                      marginTop: "4px",
                      lineHeight: 1.35,
                    }}
                  >
                    {t.l}
                  </div>
                </div>
              ))}
            </div>
            <h3
              style={{
                fontFamily: dispFont,
                fontSize: "18px",
                color: "#fff",
                fontWeight: 600,
                margin: "30px 0 12px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span style={{ color: "var(--cyan)", fontSize: "13px" }}>◆</span>Diagramme de Gantt
            </h3>
            <div style={{ overflowX: "auto", margin: "16px 0" }}>
              <div
                style={{
                  border: "1px solid var(--line)",
                  borderRadius: "14px",
                  padding: "22px 22px 18px",
                  background: "var(--paper)",
                  minWidth: "640px",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    height: "16px",
                    marginLeft: "172px",
                    marginBottom: "12px",
                    borderBottom: "1px solid var(--line)",
                  }}
                >
                  {(
                    [
                      { left: "0%", label: "J1" },
                      { left: "18%", label: "J12" },
                      { left: "38%", label: "J24" },
                      { left: "58%", label: "J36" },
                      { left: "78%", label: "J48" },
                      { left: "98%", label: "J60" },
                    ] as const
                  ).map((mark) => (
                    <span
                      key={mark.label}
                      style={{
                        position: "absolute",
                        left: mark.left,
                        top: 0,
                        fontFamily: dispFont,
                        fontSize: "10px",
                        fontWeight: 600,
                        color: "var(--muted)",
                      }}
                    >
                      {mark.label}
                    </span>
                  ))}
                </div>
                {gantt.map((g) => (
                  <div
                    key={g.sprint}
                    style={{ display: "flex", alignItems: "center", marginBottom: "9px" }}
                  >
                    <div style={{ width: "172px", flexShrink: 0, paddingRight: "14px" }}>
                      <div
                        style={{
                          fontFamily: dispFont,
                          fontWeight: 600,
                          fontSize: "12.5px",
                          color: "#fff",
                          lineHeight: 1.25,
                        }}
                      >
                        {g.name}
                      </div>
                      <div style={{ fontSize: "10.5px", color: "var(--muted)" }}>{g.sprint}</div>
                    </div>
                    <div
                      style={{
                        position: "relative",
                        flex: 1,
                        height: "30px",
                        background: "var(--card)",
                        borderRadius: "7px",
                        border: "1px solid var(--line)",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: "3px",
                          bottom: "3px",
                          borderRadius: "5px",
                          display: "flex",
                          alignItems: "center",
                          padding: "0 9px",
                          color: "#fff",
                          fontSize: "10.5px",
                          fontWeight: 600,
                          fontFamily: dispFont,
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          boxShadow: "0 2px 7px rgba(12,35,64,.20)",
                          left: g.left,
                          width: g.width,
                          background: g.bg,
                        }}
                      >
                        {g.label}
                      </div>
                    </div>
                  </div>
                ))}
                <div
                  style={{
                    display: "flex",
                    gap: "18px",
                    marginLeft: "172px",
                    marginTop: "14px",
                    flexWrap: "wrap",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "7px",
                      fontSize: "11.5px",
                      color: "var(--slate)",
                    }}
                  >
                    <span
                      style={{
                        width: "14px",
                        height: "10px",
                        borderRadius: "3px",
                        background: "var(--navy)",
                      }}
                    />
                    Cadrage & mise en production
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "7px",
                      fontSize: "11.5px",
                      color: "var(--slate)",
                    }}
                  >
                    <span
                      style={{
                        width: "14px",
                        height: "10px",
                        borderRadius: "3px",
                        background: "var(--cyan-deep)",
                      }}
                    />
                    Design
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "7px",
                      fontSize: "11.5px",
                      color: "var(--slate)",
                    }}
                  >
                    <span
                      style={{
                        width: "14px",
                        height: "10px",
                        borderRadius: "3px",
                        background: "var(--cyan)",
                      }}
                    />
                    Développement
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                background: "var(--tint-2)",
                border: "1px solid rgba(56,182,255,0.22)",
                borderRadius: "14px",
                padding: "18px 22px",
                margin: "16px 0",
                display: "flex",
                gap: "14px",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  flexShrink: 0,
                  width: "30px",
                  height: "30px",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "14px",
                  fontFamily: dispFont,
                  background: "var(--cyan)",
                }}
              >
                i
              </div>
              <div>
                <h4
                  style={{
                    fontFamily: dispFont,
                    fontSize: "14px",
                    margin: "0 0 4px",
                    color: "#fff",
                    fontWeight: 600,
                  }}
                >
                  Durée indicative & jalonnement
                </h4>
                <p
                  style={{
                    fontSize: "13.6px",
                    margin: 0,
                    color: "var(--slate)",
                    lineHeight: 1.55,
                  }}
                >
                  Les bornes en jours sont indicatives et peuvent légèrement glisser selon les
                  retours de validation. Le démarrage (J1) correspond au versement de la première
                  mensualité et à la réunion de cadrage. Sprints d’environ une semaine, avec une
                  démo en fin de chaque sprint. La livraison intervient en environ 60 jours, tandis
                  que le paiement reste mensuel sur 6 mois.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ChapterBand
          eyebrow="Méthode"
          title="Itératif, validé"
          titleAccent="à chaque étape."
          sub="Vous validez chaque sprint via TestFlight ou APK lors d’un point hebdomadaire — de la carte aux fiches de lieux, la livraison finale ne réserve aucune surprise."
        />

        {/* 02 — DÉTAIL */}
        <section
          id="s2"
          data-dc-section
          style={{
            width: "100%",
            backgroundColor: "var(--band-b)",
          }}
        >
          <div
            style={{
              maxWidth: "1040px",
              margin: "0 auto",
              padding: "clamp(56px,7vw,94px) clamp(24px,5vw,48px)",
            }}
          >
            <SectionHeader num="02 — DÉTAIL" title="Détail des sprints" />
            {sprints.map((s) => (
              <div key={s.num}>
                {s.hasPhase ? (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      margin: "30px 0 6px",
                      paddingBottom: "10px",
                      borderBottom: "2px solid var(--line)",
                    }}
                  >
                    <div
                      style={{
                        width: "34px",
                        height: "34px",
                        borderRadius: "9px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        fontFamily: dispFont,
                        fontWeight: 700,
                        fontSize: "13px",
                        flexShrink: 0,
                        background: s.phaseDotBg,
                      }}
                    >
                      {s.phaseNum}
                    </div>
                    <div
                      style={{
                        fontFamily: dispFont,
                        fontWeight: 600,
                        fontSize: "17px",
                        color: "#fff",
                      }}
                    >
                      {s.phaseTitle}
                    </div>
                    <div
                      style={{
                        marginLeft: "auto",
                        fontFamily: dispFont,
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "var(--cyan-ink)",
                        background: "var(--tint)",
                        padding: "4px 12px",
                        borderRadius: "999px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {s.phaseDays}
                    </div>
                  </div>
                ) : null}
                <div
                  style={{
                    display: "flex",
                    border: "1px solid var(--line)",
                    borderRadius: "14px",
                    margin: "12px 0",
                    background: "var(--card)",
                    boxShadow: "var(--shadow)",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: "104px",
                      flexShrink: 0,
                      color: "#fff",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "18px 10px",
                      textAlign: "center",
                      background: s.leftBg,
                    }}
                  >
                    <div
                      style={{
                        fontFamily: dispFont,
                        fontSize: "10px",
                        letterSpacing: "1.2px",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,.7)",
                      }}
                    >
                      Sprint
                    </div>
                    <div
                      style={{
                        fontFamily: dispFont,
                        fontWeight: 700,
                        fontSize: "34px",
                        lineHeight: 1,
                        margin: "2px 0 6px",
                      }}
                    >
                      {s.num}
                    </div>
                    <div
                      style={{
                        fontFamily: dispFont,
                        fontSize: "11px",
                        fontWeight: 600,
                        color: "#fff",
                        background: "rgba(255,255,255,.16)",
                        padding: "3px 9px",
                        borderRadius: "999px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {s.days}
                    </div>
                  </div>
                  <div style={{ flex: 1, padding: "18px 22px", minWidth: 0 }}>
                    <div
                      style={{
                        fontFamily: dispFont,
                        fontWeight: 600,
                        fontSize: "16px",
                        color: "#fff",
                        marginBottom: "10px",
                      }}
                    >
                      {s.name}
                    </div>
                    {s.feats.map((f, fi) => (
                      <div
                        key={fi}
                        style={{
                          display: "flex",
                          gap: "9px",
                          padding: "4px 0",
                          fontSize: "13.4px",
                          color: "var(--slate)",
                          lineHeight: 1.5,
                        }}
                      >
                        <span
                          style={{
                            color: "var(--cyan-ink)",
                            flexShrink: 0,
                            fontWeight: 700,
                            fontSize: "12px",
                            marginTop: "3px",
                          }}
                        >
                          ✓
                        </span>
                        <span>
                          <strong style={{ color: "var(--ink)", fontWeight: 600 }}>{f.b}</strong>
                          {f.t}
                        </span>
                      </div>
                    ))}
                    <div
                      style={{
                        marginTop: "12px",
                        paddingTop: "12px",
                        borderTop: "1px solid var(--line)",
                        display: "flex",
                        gap: "8px",
                        alignItems: "baseline",
                        flexWrap: "wrap",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: dispFont,
                          fontSize: "10px",
                          letterSpacing: ".8px",
                          textTransform: "uppercase",
                          color: "var(--muted)",
                        }}
                      >
                        Livrables
                      </span>
                      {s.tags.map((t) => (
                        <span
                          key={t.label}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            fontFamily: dispFont,
                            fontWeight: 600,
                            fontSize: "10.5px",
                            letterSpacing: ".6px",
                            textTransform: "uppercase",
                            padding: "4px 11px",
                            borderRadius: "999px",
                            whiteSpace: "nowrap",
                            background: t.bg,
                            color: t.fg,
                            border: t.bd,
                          }}
                        >
                          {t.label}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div
              style={{
                background: "var(--ok-bg)",
                border: "1px solid rgba(52,226,192,0.25)",
                borderRadius: "14px",
                padding: "18px 22px",
                margin: "16px 0",
                display: "flex",
                gap: "14px",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  flexShrink: 0,
                  width: "30px",
                  height: "30px",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "14px",
                  fontFamily: dispFont,
                  background: "var(--ok)",
                }}
              >
                —
              </div>
              <div>
                <h4
                  style={{
                    fontFamily: dispFont,
                    fontSize: "14px",
                    margin: "0 0 4px",
                    color: "#7ef0d2",
                    fontWeight: 600,
                  }}
                >
                  Puis : accompagnement marketing (90 jours)
                </h4>
                <p
                  style={{
                    fontSize: "13.6px",
                    margin: 0,
                    color: "var(--slate)",
                    lineHeight: 1.55,
                  }}
                >
                  À la suite de la publication débute l’accompagnement marketing : formation à la
                  création de vidéos publicitaires (UGC), lancement et optimisation des campagnes
                  Meta Ads et Apple Search Ads ciblées sur les parents en Île-de-France, et suivi
                  hebdomadaire des KPIs pour développer la base d’utilisateurs actifs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 03 — JALONS */}
        <section
          id="s3"
          data-dc-section
          style={{
            width: "100%",
            backgroundColor: "var(--band-a)",
          }}
        >
          <div
            style={{
              maxWidth: "1040px",
              margin: "0 auto",
              padding: "clamp(56px,7vw,94px) clamp(24px,5vw,48px)",
            }}
          >
            <SectionHeader
              num="03 — JALONS"
              title="Jalons de paiement"
              lead="Échéancier de la Formule Premium (6 000 €), réglée à 1 000 €/mois sur 6 mois — identique au devis. La Formule Essentielle (5 000 €) est un forfait, selon les modalités convenues à la signature. La livraison intervient en environ 60 jours."
            />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,200px),1fr))",
                gap: "14px",
                margin: "16px 0",
              }}
            >
              {miles.map((m) => (
                <div
                  key={m.pct}
                  style={{
                    border: "1px solid var(--line)",
                    borderRadius: "14px",
                    padding: "18px 18px",
                    background: "var(--card)",
                    boxShadow: "var(--shadow)",
                    transition: "transform .25s ease,box-shadow .3s ease,border-color .25s ease",
                  }}
                >
                  <div
                    style={{
                      fontFamily: dispFont,
                      fontWeight: 700,
                      fontSize: "13px",
                      color: "var(--cyan-ink)",
                    }}
                  >
                    {m.pct}
                  </div>
                  <div
                    style={{
                      fontFamily: dispFont,
                      fontWeight: 600,
                      fontSize: "14px",
                      color: "#fff",
                      margin: "7px 0 3px",
                    }}
                  >
                    {m.nm}
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "var(--muted)",
                      minHeight: "30px",
                      lineHeight: 1.4,
                    }}
                  >
                    {m.when}
                  </div>
                  <div
                    style={{
                      fontFamily: dispFont,
                      fontWeight: 700,
                      fontSize: "24px",
                      color: "#fff",
                      marginTop: "8px",
                      borderTop: "1px solid var(--line)",
                      paddingTop: "10px",
                    }}
                  >
                    {m.amt}
                  </div>
                  <div
                    style={{
                      fontSize: "11px",
                      color: "var(--cyan-ink)",
                      marginTop: "6px",
                      fontWeight: 600,
                    }}
                  >
                    {m.trig}
                  </div>
                </div>
              ))}
            </div>
            <div
              style={{
                background: "var(--tint-2)",
                border: "1px solid rgba(56,182,255,0.22)",
                borderRadius: "14px",
                padding: "18px 22px",
                margin: "16px 0",
                display: "flex",
                gap: "14px",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  flexShrink: 0,
                  width: "30px",
                  height: "30px",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "14px",
                  fontFamily: dispFont,
                  background: "var(--cyan)",
                }}
              >
                €
              </div>
              <div>
                <h4
                  style={{
                    fontFamily: dispFont,
                    fontSize: "14px",
                    margin: "0 0 4px",
                    color: "#fff",
                    fontWeight: 600,
                  }}
                >
                  Montant total : 5 000 € – 6 000 €
                </h4>
                <p
                  style={{
                    fontSize: "13.6px",
                    margin: 0,
                    color: "var(--slate)",
                    lineHeight: 1.55,
                  }}
                >
                  Formule Premium : 6 000 €, réglée à 1 000 €/mois (6 mensualités). Formule
                  Essentielle : 5 000 €, forfait selon les modalités convenues à la signature.
                  Paiements par Stripe ou virement bancaire, en euros. Aucune taxe applicable
                  (prestataire canadien / client français). Aucun travail de développement ne débute
                  avant réception du premier versement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 04 — CADENCE */}
        <section
          id="s4"
          data-dc-section
          style={{
            width: "100%",
            backgroundColor: "var(--band-b)",
          }}
        >
          <div
            style={{
              maxWidth: "1040px",
              margin: "0 auto",
              padding: "clamp(56px,7vw,94px) clamp(24px,5vw,48px)",
            }}
          >
            <SectionHeader num="04 — CADENCE" title="Cadence & validation" />
            <h3
              style={{
                fontFamily: dispFont,
                fontSize: "18px",
                color: "#fff",
                fontWeight: 600,
                margin: "14px 0 10px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span style={{ color: "var(--cyan)", fontSize: "13px" }}>◆</span>Rythme de travail
            </h3>
            <ul style={{ listStyle: "none", margin: "8px 0", padding: 0 }}>
              <li
                style={{
                  position: "relative",
                  padding: "5px 0 5px 22px",
                  fontSize: "13.8px",
                  color: "var(--slate)",
                  lineHeight: 1.55,
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "5px",
                    color: "var(--cyan)",
                    fontWeight: 700,
                    fontSize: "12px",
                  }}
                >
                  —
                </span>
                Sprints d’environ{" "}
                <b style={{ color: "var(--ink)", fontWeight: 600 }}>une semaine</b>, avec une{" "}
                <b style={{ color: "var(--ink)", fontWeight: 600 }}>démo en fin de chaque sprint</b>
                .
              </li>
              <li
                style={{
                  position: "relative",
                  padding: "5px 0 5px 22px",
                  fontSize: "13.8px",
                  color: "var(--slate)",
                  lineHeight: 1.55,
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "5px",
                    color: "var(--cyan)",
                    fontWeight: 700,
                    fontSize: "12px",
                  }}
                >
                  —
                </span>
                <b style={{ color: "var(--ink)", fontWeight: 600 }}>
                  Point d’avancement hebdomadaire
                </b>{" "}
                : revue de ce qui a été livré et priorités de la semaine suivante.
              </li>
              <li
                style={{
                  position: "relative",
                  padding: "5px 0 5px 22px",
                  fontSize: "13.8px",
                  color: "var(--slate)",
                  lineHeight: 1.55,
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "5px",
                    color: "var(--cyan)",
                    fontWeight: 700,
                    fontSize: "12px",
                  }}
                >
                  —
                </span>
                Développement <b style={{ color: "var(--ink)", fontWeight: 600 }}>itératif</b> :
                chaque sprint livre un incrément testable.
              </li>
            </ul>
            <h3
              style={{
                fontFamily: dispFont,
                fontSize: "18px",
                color: "#fff",
                fontWeight: 600,
                margin: "30px 0 10px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span style={{ color: "var(--cyan)", fontSize: "13px" }}>◆</span>Points de validation
            </h3>
            <ul style={{ listStyle: "none", margin: "8px 0", padding: 0 }}>
              <li
                style={{
                  position: "relative",
                  padding: "5px 0 5px 22px",
                  fontSize: "13.8px",
                  color: "var(--slate)",
                  lineHeight: 1.55,
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "5px",
                    color: "var(--cyan)",
                    fontWeight: 700,
                    fontSize: "12px",
                  }}
                >
                  —
                </span>
                Validation du Client à chaque{" "}
                <b style={{ color: "var(--ink)", fontWeight: 600 }}>fin de phase clé</b> (design,
                fonctionnalités, publication) avant de poursuivre.
              </li>
              <li
                style={{
                  position: "relative",
                  padding: "5px 0 5px 22px",
                  fontSize: "13.8px",
                  color: "var(--slate)",
                  lineHeight: 1.55,
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "5px",
                    color: "var(--cyan)",
                    fontWeight: 700,
                    fontSize: "12px",
                  }}
                >
                  —
                </span>
                Les{" "}
                <b style={{ color: "var(--ink)", fontWeight: 600 }}>retards imputables au Client</b>{" "}
                (absence de validation, de contenu ou d’accès) décalent d’autant le calendrier et ne
                sont pas comptés dans le délai.
              </li>
              <li
                style={{
                  position: "relative",
                  padding: "5px 0 5px 22px",
                  fontSize: "13.8px",
                  color: "var(--slate)",
                  lineHeight: 1.55,
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "5px",
                    color: "var(--cyan)",
                    fontWeight: 700,
                    fontSize: "12px",
                  }}
                >
                  —
                </span>
                Toute modification du périmètre fait l’objet d’un accord écrit (voir{" "}
                <a
                  href="/devis"
                  style={{ color: "var(--cyan-ink)", fontWeight: 600, textDecoration: "none" }}
                >
                  devis
                </a>{" "}
                &{" "}
                <a
                  href="/cahier-des-charges"
                  style={{ color: "var(--cyan-ink)", fontWeight: 600, textDecoration: "none" }}
                >
                  cahier des charges
                </a>
                ).
              </li>
            </ul>
            <div
              style={{
                background: "var(--amber-bg)",
                border: "1px solid rgba(232,161,58,0.3)",
                borderRadius: "14px",
                padding: "18px 22px",
                margin: "16px 0",
                display: "flex",
                gap: "14px",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  flexShrink: 0,
                  width: "30px",
                  height: "30px",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "14px",
                  fontFamily: dispFont,
                  background: "var(--amber)",
                }}
              >
                ▸
              </div>
              <div>
                <h4
                  style={{
                    fontFamily: dispFont,
                    fontSize: "14px",
                    margin: "0 0 4px",
                    color: "#f0c98a",
                    fontWeight: 600,
                  }}
                >
                  Ce qui peut décaler la date
                </h4>
                <p
                  style={{
                    fontSize: "13.6px",
                    margin: 0,
                    color: "var(--slate)",
                    lineHeight: 1.55,
                  }}
                >
                  La tenue des 60 jours dépend de la réactivité des validations et de la fourniture
                  des contenus et accès en temps utile. La date de livraison peut être prolongée
                  lorsque l’App Store ou le Google Play Store demandent des modifications, des
                  validations supplémentaires ou rejettent une première soumission — des délais
                  indépendants de la volonté de Progix. De même, les retards côté client
                  (validation, contenu, accès) décalent d’autant la date.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer
          heading="Un plan clair, une livraison maîtrisée"
          text="Ce calendrier accompagne le devis et le cahier des charges. Sprint après sprint, vous voyez Récréo prendre forme jusqu’à la mise en marché."
        />
      </main>
      <ScrollReveal />
    </div>
  );
}
