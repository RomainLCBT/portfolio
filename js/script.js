// Dictionnaire des traductions
const translations = {
    fr: {
        status: "Étudiant ingénieur",
        nav_bio: "Bio",
        nav_skills: "Compétences",
        nav_projects: "Projets",
        about_title: "À propos de moi",
        about_text: "Je suis un Nantais de 20 ans, actuellement en première année d'école d'ingénieur. J'ai choisi la voie de l'alternance et une spécialisation en systèmes embarqués. Je suis passionné d'innovation et sports nautiques.",
        school_title: "Parcours scolaire",
        
        skills_tech_title: "Compétences techniques",
        skill_emb: "Programmation systèmes embarqués : C & C++",
        skill_oop: "Programmation Orientée objet (POO) : C++, python & php",
        skill_front: "FrontEnd : HTML, CSS & JavaScript",
        skill_back: "Backend : PHP, Pyhton & AJAX",
        skill_uml: "Langage de modélisation Unifié (UML)",
        skill_merise: "Analyse Merise",
        skill_sql: "Langage de requêtes structurées (SQL)",
        skill_sgbd: "Système de Gestion de Base de Données (SGBD) : PostgreSQL",
        skill_vhdl: "Langage de description de matériel : VHDL",
        
        skills_exp_title: "Expériences",
        job_inspemon: "Développeur en systèmes embarqués junior",
        current: " - Nantes 2025 (actuel)",
        job_transi: "Agent Valoriste bénévole",
        job_gruaud: "Ouvrier Agricole",
        job_stage: "Stage",

        proj_curr_title: "Projets en cours",
        proj_curr_1: "Traduction anglaise de ce portfolio",
        proj_past_title: "Projets passés",

        // Pour les projets contenant des liens, on inclut le HTML des liens dans la traduction
        proj_solar: '<a href="https://github.com/MrCyci6/Projet-CIR2-group1" class="hlinks">SolarSight</a> : Projet de fin de première année. Projet Fullstack utilisant Ajax, site de monitoring de panneaux solaires pour particulier. Réalisé avec <a class="hslinks" href="https://github.com/MrCyci6">@MrCyci6</a> et <a class="hslinks" href="https://github.com/Madeggg">@Madeggg</a>.',
        proj_nils: '<a href="https://github.com/timeomnd/ProjetC-" class="hlinks">Super Nils</a> : Jeux vidéo intégralement réalisé en C++ avec Qt. Réalisé avec <a class="hslinks" href="https://github.com/timeomnd">@timeomnd</a>.',
        proj_music: '<a href="https://github.com/RomainLCBT/basic-music-editor" class="hlinks">Éditeur de musique</a> : Éditeur de musique rudimentaire en C++.',
        proj_isen: '<a href="https://github.com/RomainLCBT/php_projet-final" class="hlinks">IsenCare</a> : Projet Fullstack, prise de rendez vous en ligne chez un médecin spécialiste.',
        proj_giga: '<a href="https://github.com/groupe3CIR1projetFinAnnee/-projetCIR1_groupe_3" class="hlinks">GigaTree</a> : Projet de fin de première année. Générateur d\'arbre généalogique à partir d\'un fichier source et affichage en frontend. Réalisé avec <a class="hslinks" href="https://github.com/Alexis-R-S">@Alexis-R-S </a> et <a class="hslinks" href="https://github.com/Katuro19">@Katuro19</a>.',
        proj_sitejs: '<a href="https://github.com/RomainLCBT/sitejs" class="hlinks">sitejs</a> : site internet responsive Pour <a class="hslinks" href="https://isen-ouest.fr/labisen-la-recherche/">@LABISEN</a>',

        foot_perso: "Projets personnels",
        foot_school: "Projets scolaires"
    },
    en: {
        status: "Engineering student",
        nav_bio: "Bio",
        nav_skills: "Skills",
        nav_projects: "Projects",
        about_title: "About me",
        about_text: "I am a 20-year-old from Nantes, currently in my first year of engineering school. I chose a work-study program, specializing in embedded systems. I am passionate about innovation and water sports.",
        school_title: "Education",

        skills_tech_title: "Technical Skills",
        skill_emb: "Embedded Systems Programming: C & C++",
        skill_oop: "Object Oriented Programming (OOP): C++, Python & PHP",
        skill_front: "FrontEnd: HTML, CSS & JavaScript",
        skill_back: "Backend: PHP, Python & AJAX",
        skill_uml: "Unified Modeling Language (UML)",
        skill_merise: "Merise Analysis",
        skill_sql: "Structured Query Language (SQL)",
        skill_sgbd: "Database Management System (DBMS): PostgreSQL",
        skill_vhdl: "Hardware Description Language: VHDL",

        skills_exp_title: "Experience",
        job_inspemon: "Junior Embedded Systems Developer",
        
        job_transi: "Volunteer Recovery Agent",
        job_gruaud: "Agricultural Worker",
        job_stage: "Internship",
        current: " - Nantes 2025 (current)",
        proj_curr_title: "Current Projects",
        proj_curr_1: "English translation of this portfolio",
        proj_past_title: "Past Projects",

        proj_solar: '<a href="https://github.com/MrCyci6/Projet-CIR2-group1" class="hlinks">SolarSight</a>: End of first year project. Fullstack project using Ajax, solar panel monitoring site for individuals. Made with <a class="hslinks" href="https://github.com/MrCyci6">@MrCyci6</a> and <a class="hslinks" href="https://github.com/Madeggg">@Madeggg</a>.',
        proj_nils: '<a href="https://github.com/timeomnd/ProjetC-" class="hlinks">Super Nils</a>: Video game entirely made in C++ with Qt. Made with <a class="hslinks" href="https://github.com/timeomnd">@timeomnd</a>.',
        proj_music: '<a href="https://github.com/RomainLCBT/basic-music-editor" class="hlinks">Music Editor</a>: Rudimentary music editor in C++.',
        proj_isen: '<a href="https://github.com/RomainLCBT/php_projet-final" class="hlinks">IsenCare</a>: Fullstack project, online appointment booking with a specialist doctor.',
        proj_giga: '<a href="https://github.com/groupe3CIR1projetFinAnnee/-projetCIR1_groupe_3" class="hlinks">GigaTree</a>: End of first year project. Family tree generator from a source file and frontend display. Made with <a class="hslinks" href="https://github.com/Alexis-R-S">@Alexis-R-S </a> and <a class="hslinks" href="https://github.com/Katuro19">@Katuro19</a>.',
        proj_sitejs: '<a href="https://github.com/RomainLCBT/sitejs" class="hlinks">sitejs</a>: Responsive website for <a class="hslinks" href="https://isen-ouest.fr/labisen-la-recherche/">@LABISEN</a>',

        foot_perso: "Personal Projects",
        foot_school: "School Projects"
    }
};

let currentLang = 'en';


function setLanguage(lang) {

    if (lang === currentLang) return;

    currentLang = lang;
    updateContent();
    updateFlagStyles();
}


function updateContent() {
    const elements = document.querySelectorAll('[data-key]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[currentLang][key]) {
            element.innerHTML = translations[currentLang][key];
        }
    });
}


function updateFlagStyles() {

    const btnFr = document.getElementById('flag_fr');
    const btnEn = document.getElementById('flag_en');


    if (!btnFr || !btnEn) return;


    btnFr.classList.remove('flag-active');
    btnEn.classList.remove('flag-active');


    if (currentLang === 'fr') {
        btnFr.classList.add('flag-active');
    } else {
        btnEn.classList.add('flag-active');
    }
}


document.addEventListener('DOMContentLoaded', () => {
    updateContent();    
    updateFlagStyles(); 
});