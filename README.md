![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefee28c7c493a6346c4f15d667ab976d596c.svg)(https://classroom.github.com/a/pAqJXfzR)

Projektablauf: Cybersicherheit Website
 6.3.2026  
- Projektstart: Titel erstellt: "Wie schützt man sich vor Hackern?"

11.03 
- Über das Hacken eingelesen und Infos gesammelt
- Verständnis für Hacker-Methoden und Schutzmaßnahmen

 12.03  
- Wie füge ich ein Bild ein? (auf https://www.w3schools.com/html/tryit.asp?filename=tryhtml_images_background4 nachgesehen)
- Responsive Bilder eingebunden (Cyber Security Logo)

19.03  
- Konzeptionierung: Wie soll die Website aussehen und funktionieren?
- CSS Umgestaltung:
  - Kästchen-Design für Navigations-Boxen
  - Farbschema: Dunkler Hintergrund (#0f172a) mit Cyan-Akzenten (#38bdf8)
  - Abschnitte mit `border-radius` und `box-shadow` gestaltet
- Inhaltliche Struktur:
  - Drei Hauptabschnitte: "Erklärung", Warnung", "Lösung"
  - Texte kategorisiert und strukturiert
  - Themen: Warum Cybersicherheit wichtig, Schutzmaßnahmen, Hacker-Methoden

20.03  
- Navigationsboxen hinzugefügt:
  - Erklärung, Warnung, Lösung (mit IDs verlinkt)
  - Anker-Links (#erklaerung, #warnung, #loesung) funktionsfähig
- Box-Design verbessert:
  - Farben je Kategorie (.erklaerung, .warnung, .loesung)
  - `box-shadow` für Tiefenwirkung
  - `hover-effect`: `transform: scale(1.1)` + `translateY(-10px)`
  - `active-effect`: `transform: scale(0.97)` beim Klicken
  - Quadratische Gestaltung (240px x 180px)
  - `cursor: pointer` für bessere UX
- Smooth Scrolling eingefügt:
  - `scroll-behavior: smooth;` in HTML
  - JavaScript-Eventlistener für sanfte Navigation
  - Benutzerfreundlichkeit verbessert

22.03 - 15.04  
- Fehler behoben:
  - Doppeltes `</body>` und `</html>` entfernt
  - Falsch verschachtelte Tags korrigiert (`<strong>`, `<ol>`, `</section>` in richtige Reihenfolge gebracht)
  - Überflüssige `</section>`-Tags entfernt
  - HTML-Struktur nach W3C-Standards validiert

 23.03 - 15.04  
- 21 CSS-Eigenschaften implementiert:
  - Layout: `display: flex`, `justify-content`, `gap`, `flex-wrap`
  - Abstände: `margin`, `padding`, `max-width`
  - Farben: `background-color`, `color`, `background: linear-gradient()`
  - Formen: `border-radius`, `box-shadow`
  - Animation: `transition`, `transform`, `hover`, `active`
  - Typografie: `font-family`, `font-size`, `line-height`, `text-align`
  - Sonstiges: `opacity`, `scroll-behavior`, `text-decoration`, `cursor`
- Klassen definiert:
  - `.card-container` & `.card` für Beispiele
  - `.info` für Informationsblöcke
  - `.highlight` für wichtige Tipps (Gradient-Hintergrund)
  - `.box` & `.box-container` für Navigation

12.04 - 15.04  
- Passwort-Stärke-Prüfer implementiert:
  - Interaktives Input-Feld in Section "Gute und schlechte Passwörter"
  - Echtzeitprüfung mit Feedback:
    - 🔴 Schwach (Länge < 8, wenige Sonderzeichen)
    - 🟡 Mittel (6+ Kriterien erfüllt)
    - 🟢 Stark (alle Kriterien erfüllt)
  - Prüfkriterien:
    - Mindestlänge (8, 12 Zeichen)
    - Kleinbuchstaben, Großbuchstaben
    - Zahlen, Sonderzeichen (!@#$%^&*)
  - Enter-Taste funktionsfähig
  - Dynamische HTML-Erzeugung mit `document.createElement()`
  - Event-Listener für Click & Keypress
- Smooth Scrolling JavaScript:
  - Zusätzliche Funktionalität zu CSS `scroll-behavior`
  - Navigation zu Seiten-Abschnitten ohne Sprünge
  - `scrollIntoView({ behavior: 'smooth' })`

 15.04  
 -Finale Überprüfung & Dokumentation
- CSS-Ordner-Struktur überprüft
- Dateipfade korrekt verlinkt (css/style.css, javascript/script.js)
- README erweitert mit vollständiger Dokumentation
- Alle Anforderungen erfüllt:
  - ✅ HTML + CSS + JavaScript funktioniert
  - ✅ 5+ CSS-Eigenschaften (21 implementiert)
  - ✅ Interaktive Elemente (Passwort-Checker, Navigation)
  - ✅ Versionskontrolle dokumentiert
  - ✅ Git-Commits durchgeführt


Technische Quellen
- https://www.w3schools.com
- https://developer.mozilla.org
- https://www.w3.org/HTML/ (HTML-Validierung)
- https://developer.mozilla.org/en-US/docs/Web/CSS (CSS-Referenz)

Projektstruktur
```
projekt-webseite-2-apored67/
├── index.html           (HTML-Hauptdatei)
├── css/
│   └── style.css        (CSS-Styling (Boxen,Farbe,etc.), 21 Eigenschaften)
├── javascript/
│   └── script.js        (Passwort-Checker Button, Smooth Scrolling)
└── README.md           (Dieses Dokument(Dokumentation des Prozesses))

