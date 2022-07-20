const $fullName = document.getElementById("fullName");
const $status = document.getElementById("status");
const $textarea = document.getElementById("textarea");

const options = {
  month: "long",
  day: "numeric",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
};

const $time = document.getElementById("time");
const $container = document.getElementById("container");
$container.addEventListener("submit", function (e) {
  e.preventDefault();

  const fullName = $fullName.value;

  const status = $status.value;

  const textarea = $textarea.value;

  const time = new Date();
  $time.textContent = `Last Saved on: ${time.toLocaleString(
    "en-CA",
    options
  )}`;

  localStorage.setItem("fullName", fullName);
  localStorage.setItem("status", status);
  localStorage.setItem("textarea", textarea);
  localStorage.setItem("time", time);


});
let popup = document.getElementById("popup");
function openPopup(){
  popup.classList.add("open-popup");
}
function closePopup(){
  popup.classList.remove("open-popup");
}



const save = localStorage.getItem("save");

if (save) {

  const fullName = $fullName.value;

  const status = $status.value;

  const textarea = $textarea.value;

  const time = new Date();
  $time.textContent = `Last Saved on: ${time.toLocaleString(
    "en-CA",
    options
  )}`;
}
