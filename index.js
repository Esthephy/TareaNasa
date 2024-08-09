document.addEventListener("DOMContentLoaded", function () {
  const categories = document.querySelectorAll(".category");
  categories.forEach(function (category) {
    category.addEventListener("click", function () {
      category.classList.toggle("category-activate");
    });
  });
});
