document.addEventListener("DOMContentLoaded", function () {
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      const content = this.nextElementSibling;
      const isActive = this.classList.contains("active");

      document.querySelectorAll(".accordion-content").forEach((item) => {
        item.style.maxHeight = null;
      });
      document.querySelectorAll(".accordion-header").forEach((header) => {
        header.classList.remove("active");
        header.querySelector(".icon").textContent = "+";
      });

      if (!isActive) {
        content.style.maxHeight = content.scrollHeight + "px";
        this.classList.add("active");
        this.querySelector(".icon").textContent = "-";
      }
    });
  });
});
