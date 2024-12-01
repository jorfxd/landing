

document.addEventListener("DOMContentLoaded", function() {
  // Seleccionar solo los enlaces dentro de la sección con ID "categories-section"
  const section = document.querySelector("#categories-section");

  // Asegurarse de que la sección exista antes de aplicar el código
  if (section) {
    const links = section.querySelectorAll(".category-link"); 

    links.forEach(link => {
      link.addEventListener("click", function(e) {
        e.preventDefault(); // Detiene la recarga de la página

        const imageHolder = this.closest(".cat-item").querySelector(".image-holder");
        imageHolder.classList.add("clicked");

        setTimeout(() => {
          imageHolder.classList.remove("clicked");
        }, 500); 
      });
    });
  }
});

