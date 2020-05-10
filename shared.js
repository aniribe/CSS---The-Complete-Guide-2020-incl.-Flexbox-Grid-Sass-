const backdrop = document.querySelector(".backdrop");
let selectPlanBtn = document.querySelectorAll(".plan button");
const modal = document.querySelector(".modal");
const modalNoBtn = modal.querySelector("button");
const modalYesBtn = modal.querySelector("a");
const toggleBtn = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");

console.log(modalNoBtn);

for (let i = 0; i < selectPlanBtn.length; i++) {
  selectPlanBtn[i].addEventListener("click", function () {
    modal.classList.add("open");
    backdrop.classList.add("open");
  });
}

if (modalNoBtn) {
  modalNoBtn.addEventListener("click", closeModal);
}

backdrop.addEventListener("click", function () {
  mobileNav.classList.remove("open");
  closeModal();
});

function closeModal() {
  if (modal) {
    modal.classList.remove("open");
  }

  backdrop.classList.remove("open");
}

toggleBtn.addEventListener("click", function () {
  mobileNav.classList.add("open");
  backdrop.classList.add("open");
});
