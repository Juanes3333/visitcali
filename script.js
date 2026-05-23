const header = document.getElementById("site-header");
const scrollThreshold = 40;

const updateHeaderState = () => {
  if (!header) {
    return;
  }

  if (window.scrollY > scrollThreshold) {
    header.classList.add("site-header--scrolled");
  } else {
    header.classList.remove("site-header--scrolled");
  }
};

updateHeaderState();
window.addEventListener("scroll", updateHeaderState, { passive: true });
