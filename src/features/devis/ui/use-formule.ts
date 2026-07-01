"use client";

import { useSyncExternalStore } from "react";

const KEY = "progix.devis.v1";
const EVENT = "progix:formule";

/** Read the retained formule key from localStorage (empty string if none). */
export function readFormule(): string {
  try {
    const store = JSON.parse(window.localStorage.getItem(KEY) || "{}") as Record<string, string>;
    return store.formule || "";
  } catch {
    return "";
  }
}

/** Persist the chosen formule and broadcast it to any subscribed component. */
export function writeFormule(formule: string) {
  try {
    const store = JSON.parse(window.localStorage.getItem(KEY) || "{}") as Record<string, string>;
    store.formule = formule;
    window.localStorage.setItem(KEY, JSON.stringify(store));
  } catch {
    // localStorage unavailable — the choice simply isn't persisted.
  }
  try {
    window.dispatchEvent(new CustomEvent(EVENT, { detail: formule }));
  } catch {
    // CustomEvent unsupported — subscribers fall back to the storage event.
  }
}

function subscribe(callback: () => void) {
  window.addEventListener(EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

/**
 * Reactive selected-formule value, shared across the choice cards (section 04)
 * and the signature recap (section 09). Uses an external store so there is no
 * synchronous setState inside an effect; the server snapshot is empty.
 */
export function useFormule(): string {
  return useSyncExternalStore(subscribe, readFormule, () => "");
}
