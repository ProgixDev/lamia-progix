"use client";

import { cn } from "@/lib/utils";
import { formules } from "./content";
import { useFormule, writeFormule } from "./use-formule";
import styles from "./devis.module.css";

/**
 * Section 04 — the two accompaniment formules, presented as selectable cards.
 * The development price is identical across both; only the marketing tier
 * changes. Selecting a card persists the choice to localStorage and broadcasts
 * it so the signature block below reflects the retained formule. Nothing leaves
 * the device.
 */
export function FormuleChoice() {
  const selected = useFormule();

  return (
    <div className={styles.formuleGrid}>
      {formules.map((f) => {
        const active = selected === f.key;
        const premium = f.key === "premium";
        return (
          <button
            key={f.key}
            type="button"
            onClick={() => writeFormule(f.key)}
            aria-pressed={active}
            className={cn(styles.formuleCard, active && styles.formuleCardActive)}
          >
            <span className={styles.formuleRadio} aria-hidden="true">
              {active ? "✓" : ""}
            </span>
            <span
              className={cn(styles.formuleBadge, premium && styles.formuleBadgePremium)}
              aria-hidden="true"
            >
              {f.badge}
            </span>
            <h3 className={styles.formuleName}>{f.name}</h3>
            <div className={styles.formulePrice}>
              {f.price}
              {f.priceUnit ? <small>{f.priceUnit}</small> : null}
            </div>
            <div className={styles.formulePriceNote}>{f.priceNote}</div>
            <p className={styles.formuleTagline}>{f.tagline}</p>
            <ul className={styles.formuleList}>
              {f.points.map((p) => (
                <li key={p.b} className={styles.formuleListItem}>
                  <span className={styles.formuleCheck} aria-hidden="true">
                    ✓
                  </span>
                  <span>
                    <strong>{p.b}</strong>
                    {p.t}
                  </span>
                </li>
              ))}
            </ul>
            <div className={styles.formuleResult}>{f.result}</div>
            <span className={styles.formuleSelect} aria-hidden="true">
              {active ? "Formule retenue" : "Choisir cette formule"}
            </span>
          </button>
        );
      })}
    </div>
  );
}
