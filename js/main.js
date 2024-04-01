/*----------toogle icon navbar */

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onClick = () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};

/*---------scrool section active link ---------------- */

let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach.apply((links) => {
        links.classList.remove("active");
        document
          .querySelectorAll("header nav a [href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  /*---------sticky navbar ---------------- */
  let header = document.querySelectorAll("header");
  header.classList.toogle("sticky", window.scrollY > 100);

  /*---------remove toogle icon and navbar---------------- */

  menuIcon.classList.remove("fa-xmark");
  navbar.classList.remove("active");

  ScrollReveal({
    distance: "80px",
    duration: 2000,
    delay: 200,
  });

  ScrollReveal().reveal(".home-content, heading", { origin: "top" });
  ScrollReveal().reveal(
    ".home-img, .services-container, .portofolio-box, contact form",
    { origin: "button" }
  );
  ScrollReveal().reveal(".home-contact h1, .about-img", { origin: "left" });
  ScrollReveal().reveal(".home-contact p, .about-content", { origin: "right" });

  const typed = new Typed(".multiple-text", {
    strings: ["Web Development", "UI/UX Designer"],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
  });
};
