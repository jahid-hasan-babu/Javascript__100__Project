document.addEventListener("DOMContentLoaded", function () {
  const questions = document.querySelectorAll(".faq-question");

  questions.forEach((question) => {
    question.addEventListener("click", function () {
      const faqItem = this.parentElement;
      const answer = this.nextElementSibling;
      const icon = this.querySelector(".icon");

      if (faqItem.classList.contains("active")) {
        faqItem.classList.remove("active");
        icon.classList.remove("fa-minus");
        icon.classList.add("fa-plus");
      } else {
        faqItem.classList.add("active");
        icon.classList.remove("fa-plus");
        icon.classList.add("fa-minus");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", (event) => {
  const currentYear = new Date().getFullYear();
  document.getElementById("current-year").textContent = currentYear;

  function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    const date = now.toLocaleDateString(); // Get date in locale-specific format

    document.getElementById(
      "current-time"
    ).textContent = `${date} ${hours}:${minutes}:${seconds}`;
  }

  updateTime(); // Initial call to set time immediately
  setInterval(updateTime, 1000); // Update time every second
});
