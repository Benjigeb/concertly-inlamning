// Söker bland Concertlys artiklar och konserter
const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");
const searchMessage = document.querySelector("#search-message");
const searchItems = [
  { name: "Zara Larsson", url: "artikel.html?id=zara-larsson" },
  { name: "Sabrina Carpenter", url: "artikel.html?id=sabrina-carpenter" },
  { name: "Livemusik", url: "artikel.html?id=livemusik" },
  { name: "Teddy Swims", url: "konserter.html" },
  { name: "Hilary Duff", url: "konserter.html" },
  { name: "Bob Dylan", url: "konserter.html" },
  { name: "Bryan Adams", url: "konserter.html" },
  { name: "Rod Stewart", url: "konserter.html" },
];
searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const query = searchInput.value.trim().toLowerCase();
  const results = searchItems.filter(function (item) {
    return item.name.toLowerCase().includes(query);
  });
  searchMessage.replaceChildren();
  if (results.length === 0) {
    searchMessage.textContent =
      "Inga resultat hittades. Prova ett annat sökord.";
    return;
  }
  const resultList = document.createElement("ul");
  results.forEach(function (item) {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = item.url;
    link.textContent = item.name + " →";
    listItem.appendChild(link);
    resultList.appendChild(listItem);
  });
  searchMessage.appendChild(resultList);
});
// Visar ett tackmeddelande när nyhetsbrevsformuläret skickas
const newsletterForm = document.querySelector("#newsletter-form");
const formMessage = document.querySelector("#form-message");
newsletterForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const message = document.createElement("p");
  message.textContent =
    "Tack! Du har anmält ditt intresse för Concertlys nyhetsbrev.";
  formMessage.replaceChildren(message);
  newsletterForm.reset();
});
