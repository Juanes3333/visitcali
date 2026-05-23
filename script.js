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

const cardVideos = document.querySelectorAll(".feature-card__media");

const playCardVideo = (video) => {
  if (!video) {
    return;
  }

  const playPromise = video.play();
  if (playPromise && typeof playPromise.catch === "function") {
    playPromise.catch(() => {});
  }
};

const stopCardVideo = (video) => {
  if (!video) {
    return;
  }

  video.pause();
};

cardVideos.forEach((video) => {
  const card = video.closest(".feature-card");
  if (!card) {
    return;
  }

  video.addEventListener("loadeddata", () => {
    video.pause();
  });

  card.addEventListener("mouseenter", () => playCardVideo(video));
  card.addEventListener("mouseleave", () => stopCardVideo(video));
  card.addEventListener("focusin", () => playCardVideo(video));
  card.addEventListener("focusout", () => stopCardVideo(video));
});
