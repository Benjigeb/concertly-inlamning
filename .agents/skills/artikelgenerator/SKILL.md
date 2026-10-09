---
name: artikelgenerator
description: Skapar och kvalitetskontrollerar svenska musikartiklar i JSON-format för Concertly.
---

# Concertly – AI-artikelgenerator

## Syfte
Denna AI Skill hjälper till att skapa artiklar om musik,
artister och konserter till webbplatsen Concertly.

## Arbetsprocess

1. Läs AGENTS.md i projektets huvudmapp.
2. Läs webbplats/artiklar/test-artikel.json för att förstå
   artikelns JSON-struktur.
3. Skapa tre nya artiklar på svenska.
4. Spara artiklarna som separata JSON-filer i
   webbplats/artiklar/.
5. Använd tydliga rubriker, ingresser och brödtext.
6. Kontrollera att JSON-filerna är giltiga.
7. Kontrollera att artiklarna kan visas på webbplatsen.

## JSON-format

Varje artikel ska innehålla:
- title: artikelns titel
- content: en lista med innehållsblock

Tillåtna blocktyper:
- h1: huvudrubrik
- h2: underrubrik
- h3: mellanrubrik
- p: textstycke
- img: bild med src och alt
- ul: punktlista med items
- ol: numrerad lista med items

## Bilder

Minst en artikel ska innehålla en bild.

Bilden ska sparas i webbplats/images/.
Bildens sökväg i JSON ska börja med images/.
Alla bilder ska ha beskrivande alt-text.

## Regler

- Skriv på svenska.
- Anpassa innehållet till Concert