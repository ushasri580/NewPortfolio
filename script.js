document.addEventListener('DOMContentLoaded', function () {

    // --- YOUR DATA GOES HERE ---
    const profileHeader = {
        linkedin: "www.linkedin.com/in/usha-sri-kalakoti-4971712ba",
        github: "https://github.com/ushasri580"
    };

    const skills = [
        { name: "HTML", level: 90, img: "images/html.png" },
        { name: "CSS", level: 85, img: "images/css.png" },
        { name: "JavaScript", level: 75, img: "images/js.png" },
        { name: "SQL", level: 70, img: "images/sql.png" },
        { name: "C Language", level: 80, img: "images/c.png" },
        { name: "Java", level: 65, img: "images/java.png" },
        { name: "Git", level: 70, img: "images/git.png" },
        { name: "Python", level: 65, img: "images/python.png" }
    ];

    const journey = [
        { date: "Target: 2027", title: "Graduate with B.Tech", description: "Aiming to graduate with a strong portfolio and real-world project experience.", side: "right" },
        { date: "2023 - Present", title: "B.Tech, 3rd Year", description: "Deepening my knowledge in core computer science concepts and specializing in web technologies.", side: "left" },
        { date: "2022", title: "Started Web Development Journey", description: "Began learning HTML, CSS, and JavaScript, building my first static websites and discovering my passion for front-end.", side: "right" }
    ];

    const projects = [
        { title: "Reelvibe - Movie App", description: "A web application for discovering movies. Users can browse popular films, search for specific titles, and view details like ratings and summaries, powered by a movie database API.", tech: ["JavaScript", "HTML", "CSS"], link: "https://github.com/ushasri580/Reelvibe", image: "https://placehold.co/600x400/1e90ff/ffffff?text=Reelvibe" },
        { title: "Kitchen Companion App", description: "A recipe and kitchen helper application that uses an API to fetch recipes. Allows users to find recipes based on ingredients they have. The backend logic is powered by Python.", tech: ["Python", "API"], link: "https://github.com/ushasri580/kitchen-companion-app", image: "https://placehold.co/600x400/2ed573/ffffff?text=Kitchen+App" },
        { title: "E-Commerce Website UI", description: "A front-end implementation of a modern e-commerce platform. Features a responsive layout, product carousels, and a clean user interface.", tech: ["HTML", "CSS", "JavaScript"], link: "https://github.com/ushasri580/E-commerce-Website", image: "https://placehold.co/600x400/ff00cc/ffffff?text=E-Commerce+UI" },
        { title: "Simple User Login Page", description: "A clean and functional login interface built with a focus on form validation and a minimalist design. A foundational project in user authentication.", tech: ["HTML", "CSS"], link: "https://github.com/ushasri580/Simple-Login-Page", image: "https://placehold.co/600x400/333399/ffffff?text=Login+Page" },
        { title: "Tribute Page", description: "A responsive webpage created to honor a notable individual, built as part of my foundational web development practice using semantic HTML.", tech: ["HTML", "CSS"], link: "https://github.com/ushasri580/Tribute-Page", image: "https://placehold.co/600x400/9b59b6/ffffff?text=Tribute+Page" }
    ];

    // A function to set the theme based on the time of day
    function setDynamicTheme() {
        const hour = new Date().getHours();
        const body = document.body;
        body.classList.remove('theme-morning', 'theme-evening', 'theme-night');
        if (hour >= 6 && hour < 12) { body.classList.add('theme-morning'); }
        else if (hour >= 18 && hour < 22) { body.classList.add('theme-evening'); }
        else if (hour >= 22 || hour < 6) { body.classList.add('theme-night'); }
    }

    // A function to handle the light/dark mode toggle
    function setupThemeToggle() {
        const themeToggle = document.getElementById('theme-toggle');
        const body = document.body;

        const applyTheme = (theme) => {
            if (theme === 'light') {
                body.classList.add('theme-light');
                themeToggle.checked = true;
            } else {
                body.classList.remove('theme-light');
                themeToggle.checked = false;
            }
        };

        themeToggle.addEventListener('change', () => {
            const newTheme = body.classList.contains('theme-light') ? 'dark' : 'light';
            localStorage.setItem('theme', newTheme);
            applyTheme(newTheme);
        });

        const savedTheme = localStorage.getItem('theme');
        applyTheme(savedTheme || 'dark');
    }

    // A function to render the social links
    function renderSocials() {
        const container = document.getElementById('hero-socials');
        container.innerHTML = `<a href="${profileHeader.linkedin}" target="_blank" title="LinkedIn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a><a href="${profileHeader.github}" target="_blank" title="GitHub"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>`;
    }

    // A function to render the skills section
    function renderSkills() {
        const container = document.getElementById('skills-container');
        container.innerHTML = '';
        skills.forEach(skill => {
            const skillHTML = `<div class="skill-card" id="skill-${skill.name.replace(/ /g, '-')}">
                <div class="skill-card-icon"><img src="${skill.img}" alt="${skill.name} logo"></div>
                <div class="skill-card-name">${skill.name}</div>
                <div class="skill-card-level">${skill.level}%</div>
                <div class="skill-card-progress-bg"><div class="skill-card-progress" data-level="${skill.level}%"></div></div>
            </div>`;
            container.innerHTML += skillHTML;
        });
    }

    // A function to render the timeline
    function renderTimeline() {
        const container = document.getElementById('timeline-container');
        container.innerHTML = '';
        journey.forEach(item => {
            const itemHTML = `<div class="timeline-item ${item.side}"><div class="timeline-content"><span class="date">${item.date}</span><h3>${item.title}</h3><p>${item.description}</p></div></div>`;
            container.innerHTML += itemHTML;
        });
    }

    // A function to render the projects
    function renderProjects() {
        const container = document.getElementById('projects-container');
        container.innerHTML = '';
        projects.forEach((project, index) => {
            let techTags = project.tech.map(tag => `<span class="tech-tag">${tag}</span>`).join('');
            const projectHTML = `<article class="project-card" data-tech="${project.tech.join(',')}" data-index="${index}"><div class="project-card-image" style="background-image: url('${project.image}');"></div><div class="project-card-content"><h3>${project.title}</h3><div class="project-tech-stack">${techTags}</div><span class="know-more-btn">Know More &rarr;</span></div></article>`;
            container.innerHTML += projectHTML;
        });
    }

    // A function to add interactivity for projects (hover and modal click)
    function setupProjectInteractivity() {
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            card.addEventListener('mouseover', () => {
                card.dataset.tech.split(',').forEach(tech => {
                    const skillCard = document.getElementById(`skill-${tech.replace(/ /g, '-')}`);
                    if (skillCard) { skillCard.classList.add('highlight'); }
                });
            });
            card.addEventListener('mouseout', () => {
                document.querySelectorAll('.skill-card.highlight').forEach(c => c.classList.remove('highlight'));
            });
            card.addEventListener('click', () => {
                openProjectModal(projects[card.dataset.index]);
            });
        });
    }

    // A function to handle skill card clicks
    function setupSkillClickListeners() {
        const skillCards = document.querySelectorAll('.skill-card');
        skillCards.forEach(card => {
            card.addEventListener('click', () => {
                const isToggled = card.classList.contains('toggled');
                skillCards.forEach(c => {
                    c.classList.remove('toggled');
                    c.querySelector('.skill-card-progress').style.width = '0%';
                });
                if (!isToggled) {
                    card.classList.add('toggled');
                    const progressBar = card.querySelector('.skill-card-progress');
                    setTimeout(() => { progressBar.style.width = progressBar.dataset.level; }, 10);
                }
            });
        });
    }

    // A function for handling the project modal
    function openProjectModal(project) {
        const modalOverlay = document.getElementById('project-modal-overlay');
        document.getElementById('modal-title').textContent = project.title;
        document.getElementById('modal-image').style.backgroundImage = `url('${project.image}')`;
        document.getElementById('modal-description').textContent = project.description;
        document.getElementById('modal-link').href = project.link;
        document.getElementById('modal-tech-stack').innerHTML = project.tech.map(tag => `<span class="tech-tag">${tag}</span>`).join('');
        modalOverlay.classList.add('active');
        document.body.classList.add('modal-open');
    }

    function closeProjectModal() {
        const modalOverlay = document.getElementById('project-modal-overlay');
        modalOverlay.classList.remove('active');
        document.body.classList.remove('modal-open');
    }

    // A function for handling form validation
    function handleFormSubmit() {
        const form = document.getElementById('contact-form');
        form.addEventListener('submit', function (event) {
            event.preventDefault(); let isValid = true;
            document.querySelectorAll('.error-message').forEach(el => el.style.display = 'none');
            document.getElementById('form-feedback').style.display = 'none';
            if (document.getElementById('name').value.trim() === '') { document.getElementById('name-error').style.display = 'block'; isValid = false; }
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(document.getElementById('email').value.trim())) { document.getElementById('email-error').style.display = 'block'; isValid = false; }
            if (document.getElementById('message').value.trim() === '') { document.getElementById('message-error').style.display = 'block'; isValid = false; }
            if (isValid) {
                const feedbackDiv = document.getElementById('form-feedback');
                feedbackDiv.textContent = 'Thank you for your message! I will get back to you soon.';
                feedbackDiv.className = 'success';
                feedbackDiv.style.display = 'block';
                form.reset();
            }
        });
    }

    // A function to handle the header scroll effect
    function handleHeaderScroll() {
        window.addEventListener('scroll', () => {
            document.getElementById('main-header').classList.toggle('scrolled', window.scrollY > 50);
        });
    }

    // A function to handle on-scroll animations
    function handleScrollAnimations() {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('active'); } });
        }, { threshold: 0.1 });
        document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

        const skillObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) { entry.target.classList.add('active'); observer.unobserve(entry.target); }
            });
        }, { threshold: 0.3 });
        skillObserver.observe(document.getElementById('skills-container'));
    }

    // A function to add reveal classes to elements for animation
    function addRevealClassToElements() {
        document.querySelectorAll('section > .container > h2, section > .container > .section-subtitle, .skills-grid, .timeline, .projects-grid, #contact-form').forEach(el => el.classList.add('reveal'));
    }

    // --- INITIALIZE THE PAGE ---
    setupThemeToggle();
    setDynamicTheme();
    renderSocials();
    renderSkills();
    renderTimeline();
    renderProjects();
    setupProjectInteractivity();
    setupSkillClickListeners();
    handleFormSubmit();
    handleHeaderScroll();
    addRevealClassToElements();
    handleScrollAnimations();
    document.getElementById('current-year').textContent = new Date().getFullYear();
    document.getElementById('close-modal-btn').addEventListener('click', closeProjectModal);
    document.getElementById('project-modal-overlay').addEventListener('click', function (event) { if (event.target === this) { closeProjectModal(); } });
});

