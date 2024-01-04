function togglemenu() {
  let myElement = document.querySelector("#openmenu");
  let details = document.querySelector("#details");
  let behance = document.querySelector("#behance");
  let instagram = document.querySelector("#instagram");
  if (myElement.classList.item(1) === "fa-chevron-up") {
  myElement.classList.remove("fa-chevron-up");
  myElement.classList.add("fa-chevron-down");
  details.classList.toggle("menumode");
  behance.classList.remove("close");
  behance.classList.add("open");
  instagram.classList.remove("close");
  instagram.classList.add("open");
} else {
  myElement.classList.remove("fa-chevron-down");
  myElement.classList.add("fa-chevron-up");
  details.classList.toggle("menumode");
  behance.classList.remove("open");
  behance.classList.add("close");
  instagram.classList.remove("open");
  instagram.classList.add("close");
}};
