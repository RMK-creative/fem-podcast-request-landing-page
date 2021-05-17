// select classes to manipulate and save to variables
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

// open modal on click (remove display: hidden)
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// close modal on click (add display: hidden)
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// applies event handler to each button
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openModal);
}

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// listen for click anywhere on page to close modal
document.addEventListener("keydown", function (e) {
  // access object in event handler to know which key was pressed.
  console.log(e.key);
  // when esc key is pressed close modal
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
