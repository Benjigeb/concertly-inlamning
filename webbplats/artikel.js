// Hämtar artikelns id från webbadressen.
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const artikel = document.getElementById("artikel");

// Hämtar artikelns innehåll från en JSON-fil.
async function laddaArtikel() {
  if (!id || !/^[a-z0-9-]+$/.test(id)) {
    artikel.textContent = "Artikeln kunde inte hittas.";
    return;
  }
  try {
    const svar = await fetch(`artiklar/${id}.json`);

    if (!svar.ok) {
      throw new Error("Artikeln hittades inte.");
    }
    const data = await svar.json();
    artikel.replaceChildren();
    for (const block of data.content) {
      let element;
      if (["h1", "h2", "h3", "p"].includes(block.type)) {
        element = document.createElement(block.type);
        element.textContent = block.text;
      } else if (block.type === "img") {
        element = document.createElement("img");
        element.src = block.src;
        element.alt = block.alt || "";
      } else if (block.type === "ul" || block.type === "ol") {
        element = document.createElement(block.type);
        for (const punkt of block.items) {
          const li = document.createElement("li");
          li.textContent = punkt;
          element.appendChild(li);
        }
      }
      if (element) {
        artikel.appendChild(element);
      }
    }
  } catch (fel) {
    artikel.textContent = "Det gick inte att ladda artikeln.";
    console.error(fel);
  }
}
laddaArtikel();