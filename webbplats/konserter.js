// Hämtar stadsfiltret och alla konsertkort
const cityFilter = document.querySelector("#city-filter");
const concertCards = document.querySelectorAll(".concert-card");
const noConcerts = document.querySelector("#no-concerts");
// Visar bara konserter från den valda staden
cityFilter.addEventListener("change", function () {
  const selectedCity = cityFilter.value;
  let visibleConcerts = 0;
  concertCards.forEach(function (card) {
    const cardCity = card.dataset.city;
    const shouldShow = selectedCity === "alla" || cardCity === selectedCity;
    card.hidden = !shouldShow;
    if (shouldShow) {
      visibleConcerts++;
    }
  });
  noConcerts.hidden = visibleConcerts > 0;
});
