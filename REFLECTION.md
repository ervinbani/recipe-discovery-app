# Riflessioni e Decisioni di Design – Recipe Discovery App

## Scelte Tecnologiche

- **Vite + React + TypeScript**: scelti per velocità di sviluppo, tipizzazione e supporto moderno.
- **React Router DOM**: per una navigazione SPA semplice e scalabile.
- **TheMealDB API**: scelta per la ricchezza di dati e la facilità di utilizzo.

## Architettura e Struttura

- **Componenti riutilizzabili**: Card, Navbar, Spinner, Feedback, per DRY e manutenzione.
- **Custom hooks**: `useFetch` per gestire fetch asincroni e `useLocalStorage` per sincronizzare lo stato dei preferiti.
- **Context API**: per la gestione globale dei preferiti, evitando prop drilling.
- **CSS responsive**: media query e layout flessibile per una UX gradevole su mobile e desktop.

## UX/UI

- **Navbar sempre visibile** con ricerca integrata.
- **Feedback utente**: spinner e messaggi di errore uniformi.
- **Card cliccabili** per navigazione intuitiva.
- **Pulsante preferiti**: feedback immediato e sincronizzazione locale.

## Difficoltà e Soluzioni

- Gestione asincrona fetch multipli (preferiti): risolta con `Promise.all`.
- Sincronizzazione preferiti tra pagine: risolta con Context e custom hook.
- Responsive design: testato su diverse larghezze, aggiunte media query mirate.

## Possibili Migliorie Future

- Autenticazione utente e preferiti cloud.
- Test automatici (unitari e E2E).
- Animazioni e transizioni più avanzate.
- Miglioramento accessibilità (a11y).

## Conclusioni

Il progetto è stato pensato per essere didattico, scalabile e facilmente estendibile. Ogni scelta è stata motivata dalla chiarezza, semplicità e best practice per uno sviluppatore junior.
