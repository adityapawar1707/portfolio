const PORTFOLIO = {
  profile: {
    name: "Pawar Adithya",
    email: "Adityapawar0872@gmail.com",
    github: "https://github.com/adityapawar1707",
    linkedin: "https://www.linkedin.com/in/pawar-adithya-008730373",
    title: "B.Tech Student & Aspiring Developer",
    welcome: "WELCOME TO MY PORTFOLIO",
    introduction:
      "I am passionate about technology, programming, web development, and building creative solutions to real-world problems.",
    aboutHeading: "Who Am I?",
    aboutDescription:
      "I am a B.Tech student interested in computer science, programming, and modern technologies. I enjoy learning new development tools, exploring innovative ideas, and creating practical projects.",
  },
  education: {
    degree: "B.Tech Student",
    institution: "",
    branch: "",
    graduationYear: "",
  },
  interests: ["Programming", "Technology", "Web Development"],
  skills: [
    { name: "HTML", description: "Website Structure", icon: "code" },
    { name: "CSS", description: "Website Styling", icon: "spark" },
    { name: "JavaScript", description: "Interactive Websites", icon: "code" },
    { name: "C", description: "Programming Fundamentals", icon: "grid" },
    { name: "Python", description: "Programming and Development", icon: "code" },
  ],
  projects: [
    {
      title: "AI Path Finder Using BFS",
      description:
        "An interactive grid for finding the shortest path between a start point and destination using Breadth-First Search.",
      technologies: ["HTML", "CSS", "JavaScript"],
      repository: "https://github.com/adityapawar1707/path-finder",
      liveDemo: "",
    },
  ],
};

const icon = (name) =>
  `<svg aria-hidden="true" focusable="false"><use href="#icon-${name}"></use></svg>`;

document.querySelectorAll("[data-name]").forEach((element) => {
  element.textContent = PORTFOLIO.profile.name;
});

document.querySelector("[data-welcome]").textContent = PORTFOLIO.profile.welcome;
document.querySelector("[data-title]").textContent = PORTFOLIO.profile.title;
document.querySelector("[data-intro]").textContent = PORTFOLIO.profile.introduction;
document.querySelector("[data-about-subheading]").textContent =
  PORTFOLIO.profile.aboutHeading;
document.querySelector("[data-about-description]").textContent =
  PORTFOLIO.profile.aboutDescription;
document.querySelector("[data-email]").textContent = PORTFOLIO.profile.email;
document.querySelector("#current-year").textContent = new Date().getFullYear();

const socialUrls = {
  github: PORTFOLIO.profile.github,
  linkedin: PORTFOLIO.profile.linkedin,
  email: `mailto:${PORTFOLIO.profile.email}`,
};

document.querySelectorAll("[data-social]").forEach((link) => {
  link.href = socialUrls[link.dataset.social];
  if (link.dataset.social !== "email") {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  }
});

const aboutCards = [
  {
    title: "Education",
    description: PORTFOLIO.education.degree,
    icon: "book",
  },
  {
    title: "Interests",
    description: PORTFOLIO.interests.join(", "),
    icon: "spark",
  },
];

const addOptionalEducation = (card) => {
  const details = [
    PORTFOLIO.education.institution,
    PORTFOLIO.education.branch,
    PORTFOLIO.education.graduationYear,
  ].filter(Boolean);
  return card.title === "Education" && details.length
    ? `${card.description} · ${details.join(" · ")}`
    : card.description;
};

const aboutCardsContainer = document.querySelector("#about-cards");
aboutCards.forEach((card) => {
  const article = document.createElement("article");
  article.className = "info-card";
  article.innerHTML = `<span class="info-icon">${icon(card.icon)}</span>`;
  const heading = document.createElement("h4");
  heading.textContent = card.title;
  const description = document.createElement("p");
  description.textContent = addOptionalEducation(card);
  article.append(heading, description);
  aboutCardsContainer.append(article);
});

const skillsGrid = document.querySelector("#skills-grid");
PORTFOLIO.skills.forEach((skill) => {
  const article = document.createElement("article");
  article.className = "skill-card";
  article.innerHTML = `<span class="skill-icon">${icon(skill.icon)}</span>`;
  const heading = document.createElement("h3");
  heading.textContent = skill.name;
  const description = document.createElement("p");
  description.textContent = skill.description;
  article.append(heading, description);
  skillsGrid.append(article);
});

const projectsGrid = document.querySelector("#projects-grid");
PORTFOLIO.projects.forEach((project) => {
  const article = document.createElement("article");
  article.className = "project-card";

  const topline = document.createElement("div");
  topline.className = "project-topline";
  topline.innerHTML = `<span class="project-icon">${icon("grid")}</span><span class="project-kind">Web project</span>`;

  const heading = document.createElement("h3");
  heading.textContent = project.title;
  const description = document.createElement("p");
  description.textContent = project.description;

  const technologies = document.createElement("div");
  technologies.className = "tech-list";
  technologies.setAttribute("aria-label", "Technologies");
  project.technologies.forEach((technology) => {
    const badge = document.createElement("span");
    badge.className = "tech-badge";
    badge.textContent = technology;
    technologies.append(badge);
  });

  const actions = document.createElement("div");
  actions.className = "project-actions";
  const repositoryLink = document.createElement("a");
  repositoryLink.className = "project-link";
  repositoryLink.href = project.repository;
  repositoryLink.target = "_blank";
  repositoryLink.rel = "noopener noreferrer";
  repositoryLink.innerHTML = `${icon("github")} GitHub Repository`;
  actions.append(repositoryLink);

  if (project.liveDemo) {
    const demoLink = document.createElement("a");
    demoLink.className = "project-link";
    demoLink.href = project.liveDemo;
    demoLink.target = "_blank";
    demoLink.rel = "noopener noreferrer";
    demoLink.innerHTML = `${icon("arrow")} Live Demo`;
    actions.append(demoLink);
  }

  article.append(topline, heading, description, technologies, actions);
  projectsGrid.append(article);
});

const menuToggle = document.querySelector(".menu-toggle");
const navigationMenu = document.querySelector("#primary-menu");

const closeMenu = () => {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation menu");
  navigationMenu.classList.remove("is-open");
};

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Open navigation menu" : "Close navigation menu",
  );
  navigationMenu.classList.toggle("is-open", !isOpen);
});

navigationMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && navigationMenu.classList.contains("is-open")) {
    closeMenu();
    menuToggle.focus();
  }
});

const contactForm = document.querySelector("#contact-form");
const formFeedback = document.querySelector("#form-feedback");
const formFields = [...contactForm.querySelectorAll("input, textarea")];

formFields.forEach((field) => {
  field.addEventListener("input", () => {
    field.removeAttribute("aria-invalid");
    formFeedback.textContent = "";
    formFeedback.removeAttribute("data-state");
  });
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const invalidFields = formFields.filter((field) => !field.checkValidity());

  if (invalidFields.length) {
    invalidFields.forEach((field) => field.setAttribute("aria-invalid", "true"));
    formFeedback.textContent = "Please check the highlighted fields and try again.";
    formFeedback.dataset.state = "error";
    invalidFields[0].focus();
    return;
  }

  formFeedback.textContent =
    "Your message is valid, but it has not been sent. Connect a backend or email service to enable delivery.";
  formFeedback.dataset.state = "success";
});
