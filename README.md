# Concertly 🎤

## Om projektet

Concertly är en musikwebbplats som jag har utvecklat som en del av min utbildning till Digital Marketing Specialist på IHM Business School.

Webbplatsen fokuserar på musik, artister, konserter och musiknyheter.

## Webbplatsens funktioner

- Startsida med navigation, bilder och artikellänkar.
- Konsertsida med information om artister och konserter.
- Filtrering av konserter efter stad.
- Nyhetsbrev med bekräftelse via JavaScript.
- Dynamiska artikelsidor där innehållet hämtas från JSON-filer.

## Tekniker

Projektet är byggt med:

- HTML – webbplatsens struktur.
- CSS – design och layout.
- JavaScript – interaktiva funktioner och dynamiskt innehåll.
- JSON – lagring av artikelinnehåll.
- Visual Studio Code – utvecklingsmiljö.
- Live Server – lokal testning av webbplatsen.

## Projektstruktur

- 📁 `webbplats/` – hemsidans filer.
- 📁 `webbplats/images/` – bilder.
- 📁 `webbplats/artiklar/` – artiklar i JSON-format.
- 📄 `AGENTS.md` – övergripande instruktioner för AI.
- 📁 `.agents/skills/artikelgenerator/` – projektets AI Skill.
- 📄 `SKILL.md` – instruktioner för AI-artikelgeneratorn.
- 📄 `README.md` – dokumentation av projektet.

## AI-automation

Projektet innehåller en AI Skill med namnet `artikelgenerator`.

Syftet är att låta en AI-assistent skapa artiklar om musik och konserter i ett standardiserat JSON-format.

### Så används AI Skill

1. Öppna projektet i en AI-kodassistent som stöder projektinstruktioner och Skills.
2. Be assistenten läsa `AGENTS.md` och `.agents/skills/artikelgenerator/SKILL.md`.
3. Be AI att skapa tre musikartiklar enligt instruktionerna.
4. AI ska använda `test-artikel.json` som mall för JSON-strukturen.
5. De nya artiklarna ska sparas i `webbplats/artiklar/`.
6. Minst en artikel ska ha en bild i `webbplats/images/`.
7. Granska artiklarna manuellt och ge AI feedback vid behov.
8. Testa artiklarna med `artikel.html?id=artikelns-filnamn`.

AI får inte ändra webbplatsens befintliga HTML-, CSS- eller JavaScript-filer.

## Mänsklig granskning

AI-genererat innehåll ska kontrolleras innan det används på webbplatsen.

Granskningen omfattar:

- Faktakontroll.
- Stavning och grammatik.
- Rubriker och läsbarhet.
- Bildval och alt-texter.
- Kontroll av JSON-formatet.
- Testning av artiklarna i webbläsaren.

Eventuella fel ska korrigeras och kontrolleras igen.

## Så startas webbplatsen

1. Öppna projektet i Visual Studio Code.
2. Installera tillägget Live Server.
3. Öppna `webbplats/index.html` med Live Server.
4. Navigera mellan sidorna och testa funktionerna.

## Status

Webbplatsens grundfunktioner och JSON-artikelsystem har testats. AI-genereringen av de tre egna artiklarna återstår att genomföra och dokumentera.
Genomförd AI-automation

Jag har skapat en AI Skill som heter artikelgenerator för min webbplats Concertly. Syftet är att automatisera skapandet av musikartiklar i JSON-format.
Jag använde GitHub Copilot i VS Code med Agent-läget aktiverat. AI-assistenten fick instruktioner att läsa AGENTS.md, .agents/skills/artikelgenerator/SKILL.md och webbplats/artiklar/test-artikel.json.
Därefter fick AI-assistenten skapa en ny artikel om varför konserter är populära och spara den som webbplats/artiklar/ai-testartikel.json.
Test och kvalitetssäkring:
- Copilot skapade JSON-filen automatiskt.
- JSON-formatet kontrollerades med python3 -m json.tool och resultatet var JSON valid.
- Artikeln testades i webbläsaren via Live Server.
- Rubriker, text och lista visades korrekt.
- Inga befintliga HTML-, CSS-, JavaScript- eller artikelfiler ändrades.
Iteration och förbättring:
Först testade jag att använda Copilot i Ask-läget, men då skapades ingen fil. Jag bytte därför till Agent-läget och körde instruktionen igen. Då skapades artikeln och kunde kontrolleras.
Mänsklig granskning:
Jag kontrollerade att artikeln gick att öppna och att innehållet visades korrekt på Concertly. AI-genererade texter behöver även granskas för språk, relevans och faktauppgifter innan de publiceras.