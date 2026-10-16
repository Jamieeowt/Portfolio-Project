const icons = {
  arrow: '<path d="M5 12h14m-5-5 5 5-5 5"/>',
  calendar: '<path d="M6 3v3m12-3v3M4 9h16"/><rect x="4" y="5" width="16" height="16" rx="2"/>',
  code: '<path d="m8 9-3 3 3 3m8-6 3 3-3 3m-3-9-2 12"/>',
  facebook: '<path d="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v6h4v-6h3l1-4h-4V9c0-.7.3-1 1-1Z" fill="currentColor" stroke="none"/>',
  github: '<path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-2c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 0 1.6 1 1.6 1 .9 1.6 2.4 1.1 2.9.9.1-.7.4-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5A3.9 3.9 0 0 1 6.7 8.5a3.6 3.6 0 0 1 .1-2.7s.8-.3 2.8 1a9.5 9.5 0 0 1 5 0c2-1.3 2.8-1 2.8-1a3.6 3.6 0 0 1 .1 2.7 3.9 3.9 0 0 1 1 2.7c0 3.9-2.3 4.7-4.6 5 .4.3.7 1 .7 1.9V21c0 .3.2.6.7.5A10 10 0 0 0 12 2Z" fill="currentColor" stroke="none"/>',
  linkedin: '<rect x="4" y="9" width="4" height="11" fill="currentColor" stroke="none"/><circle cx="6" cy="5.5" r="2" fill="currentColor" stroke="none"/><path d="M11 9h4v1.7c.8-1.2 2-2 3.7-2 3.2 0 4.3 2.1 4.3 5.4V20h-4v-5.2c0-1.5-.3-2.6-1.8-2.6-1.6 0-2.2 1.1-2.2 3V20h-4V9Z" fill="currentColor" stroke="none"/>',
  location: '<path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/>',
  moon: '<path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5 8.5 8.5 0 1 0 20.5 14.2Z"/>',
  phone: '<path d="M7 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3l-4-2-2 2c-3.7-1.5-6.5-4.3-8-8l2-2-2-4Z"/>',
};

const icon = (name, size = 18) =>
  `<svg aria-hidden="true" viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${icons[name]}</svg>`;

const certificates = [
  ["AI—01", "AI Engineer for Developers Associate", "DataCamp", "Oct 2026", "AIEDA0016110188487"],
  ["FE—02", "Frontend Developer (React)", "HackerRank", "Oct 2026", "E32C814C5BCC"],
  ["SE—03", "Software Engineer Intern", "HackerRank", "Oct 2026", "A201AA79087E"],
  ["CSS—04", "CSS (Basic)", "HackerRank", "Oct 2026", "89CD41DOOOOB"],
  ["JV—05", "Java (Basic)", "HackerRank", "Oct 2026", "90F1EEBBECB3"],
  ["SQL—06", "SQL (Basic)", "HackerRank", "Oct 2026", "D4784BBACB50"],
];

const sectionHeading = (index, eyebrow, title) => `
  <div class="section-heading">
    <div class="section-kicker"><span>${index}</span><span>${eyebrow}</span></div>
    <h2>${title}</h2>
  </div>`;

const themeToggle = (mobile = false) => `
  <button class="theme-toggle${mobile ? " mobile-theme" : ""}" type="button" aria-label="Switch to dark mode" title="Switch to dark mode">
    <span class="theme-icon">${icon("moon", 15)}</span>
    <span class="theme-label">Dark mode</span>
    <i><b></b></i>
  </button>`;

document.querySelector("#root").innerHTML = `
  <div class="site-shell">
    <aside class="sidebar">
      <div>
        <a class="brand" href="#about" aria-label="Back to top">JG<span>III</span></a>
        <div class="profile">
          <div class="avatar-wrap">
            <img src="/profile.jpg" onerror="this.src='https://images.unsplash.com/photo-1642060603505-e716140d45d2?crop=faces&fit=crop&fm=jpg&h=480&q=85&w=480'" alt="Jaime Gerolao III">
            <span class="available-dot" title="Available for opportunities"></span>
          </div>
          <p class="profile-name">Jaime Gerolao III</p>
          <p class="profile-role">Web Developer</p>
        </div>
        <nav aria-label="Main navigation">
          ${[
            ["About me", "#about"],
            ["Education & Skills", "#education"],
            ["Certificates", "#certificates"],
            ["Contact", "#contact"],
          ].map(([label, href], index) => `<a href="${href}"><span>0${index + 1}</span>${label}</a>`).join("")}
        </nav>
        ${themeToggle(true)}
      </div>
      <div class="sidebar-footer">
        ${themeToggle()}
        <div class="socials">
          <a href="https://www.linkedin.com/in/jaime-gerolao-4b880a329/" target="_blank" rel="noreferrer" aria-label="LinkedIn">${icon("linkedin")}</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">${icon("github")}</a>
          <a href="https://www.facebook.com/Harme.gg" target="_blank" rel="noreferrer" aria-label="Facebook">${icon("facebook")}</a>
        </div>
        <p>© 2026 / Quezon City</p>
      </div>
    </aside>

    <main>
      <section class="hero" id="about">
        <div class="hero-topline">
          <span>Portfolio / 2026</span>
          <span class="availability"><i></i>Available for opportunities</span>
        </div>
        <div class="hero-content">
          <p class="overline">Hello, I’m Jaime — An Asipiring</p>
          <h1>Web developer building <em>clean, purposeful</em> digital experiences.</h1>
          <p class="hero-copy">Motivated individual looking to apply technical skills in a challenging environment. Quick learner with a passion for web development.</p>
          <div class="hero-actions">
            <a class="button button-dark" href="#contact">Let’s work together ${icon("arrow")}</a>
            <a class="button button-light" href="#education">Explore credentials</a>
          </div>
        </div>
        <div class="quick-facts">
          <div><span>Based in</span><strong>Quezon City, PH</strong></div>
          <div><span>Currently</span><strong>BSIT Student</strong></div>
          <div><span>Focus</span><strong>Web Development</strong></div>
        </div>
      </section>

      <section class="content-section" id="education">
        ${sectionHeading("01", "Education & skills", "Always learning. Always building.")}
        <div class="education-grid">
          <article class="education-card">
            <div class="card-icon">${icon("code", 22)}</div>
            <p class="meta">Bachelor’s Degree</p>
            <h3>Bachelor of Science in Information Technology</h3>
            <p class="institution">Polytechnic University of the Philippines</p>
            <div class="date">${icon("calendar")} 2024 — Present</div>
          </article>
          <div class="skills-panel">
            <div class="skill-group"><p>Technical toolkit</p><div class="pills">${["HTML / CSS", "JavaScript", "React", "Java", "C", "SQL", "Git"].map((skill) => `<span>${skill}</span>`).join("")}</div></div>
            <div class="skill-group"><p>Core strengths</p><div class="pills light">${["Communication", "Problem Solving", "Collaboration", "Quick Learner"].map((skill) => `<span>${skill}</span>`).join("")}</div></div>
          </div>
        </div>
      </section>

      <section class="content-section muted-section" id="certificates">
        ${sectionHeading("02", "Certificates", "Credentials that mark the journey.")}
        <div class="certificate-grid">
          ${certificates.map(([code, title, issuer, issueDate, credentialId]) => `
            <article class="certificate-card">
              <div class="certificate-preview"><span>${code}</span><div class="certificate-mark">JG</div><small>Certificate / Credential</small></div>
              <div class="certificate-body">
                <div><p>${issuer}</p><h3>${title}</h3></div>
                <div class="credential-meta">
                  <div><span>Issued</span><strong>${issueDate}</strong></div>
                  <div><span>Credential ID</span><strong>${credentialId}</strong></div>
                </div>
              </div>
            </article>`).join("")}
        </div>
      </section>

      <section class="contact-section" id="contact">
        <div class="contact-intro">
          <div class="section-kicker light-kicker"><span>03</span><span>Get in touch</span></div>
          <h2>Have an opportunity in mind? Let’s connect.</h2>
          <p>I’m open to internships, web development roles, and collaborative opportunities.</p>
          <div class="contact-details">
            <a href="mailto:gerolaojaime@gmail.com">${icon("mail")}<span><small>Email</small>gerolaojaime@gmail.com</span></a>
            <a href="tel:+639647617454">${icon("phone")}<span><small>Phone</small>+63 964 761 7454</span></a>
            <div>${icon("location")}<span><small>Location</small>25 Kalayaan B, Batasan Hills, QC</span></div>
          </div>
        </div>
        <form id="contact-form">
          <label>Your name<input name="name" type="text" placeholder="Your name" required></label>
          <label>Email address<input name="email" type="email" placeholder="your@email.com" required></label>
          <label>Message<textarea name="message" rows="5" placeholder="Leave a message..." required></textarea></label>
          <button class="button button-white" type="submit">Send message ${icon("arrow")}</button>
        </form>
      </section>
      <footer class="main-footer"><p>© 2026 Jaime Gerolao III. All rights reserved.</p><a href="#about">Back to top ↑</a></footer>
    </main>
  </div>`;

const savedTheme = localStorage.getItem("portfolio-theme");
let isDark = savedTheme ? savedTheme === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;

function applyTheme() {
  document.documentElement.dataset.theme = isDark ? "dark" : "light";
  localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
  document.querySelectorAll(".theme-toggle").forEach((button) => {
    button.setAttribute("aria-label", `Switch to ${isDark ? "light" : "dark"} mode`);
    button.setAttribute("title", `Switch to ${isDark ? "light" : "dark"} mode`);
    button.querySelector(".theme-label").textContent = isDark ? "Light mode" : "Dark mode";
    button.querySelector("i").classList.toggle("active", isDark);
  });
}

document.querySelectorAll(".theme-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    isDark = !isDark;
    applyTheme();
  });
});

document.querySelector("#contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const subject = encodeURIComponent(`Portfolio enquiry from ${form.get("name")}`);
  const body = encodeURIComponent(`Name: ${form.get("name")}\nEmail: ${form.get("email")}\n\n${form.get("message")}`);
  window.location.href = `mailto:gerolaojaime@gmail.com?subject=${subject}&body=${body}`;
});

applyTheme();