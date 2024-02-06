/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000, // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true, // Set to false to use static SVG
};

const greeting = {
  username: "Dev-estagiario",

  title: "Hi all, I'm Gustavo Celleguim",

  subTitle: emoji(
    "🚀 Elevate Your Digital Presence with a Passionate Full Stack Software Developer! 🚀 With extensive experience in crafting cutting-edge Web and Mobile applications, I specialize in leveraging JavaScript, Reactjs, Nodejs, React Native, alongside a suite of other innovative libraries and frameworks. Lets bring your vision to life with dynamic, robust, and scalable solutions tailored just for you"
  ),

  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/GusCelleguim",
  linkedin: "https://www.linkedin.com/in/gustavocelleguim/",
  gmail: "Gugacelleguim@gmail.com",

  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Devestagiario",
  subTitle: "Developer passionate about web design, Front end and Back-end",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire",
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python",
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Descomplica",
      logo: require("./assets/images/descomplica.png"),
      subHeader: "software engineering",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"],
    },

    {
      schoolName: "Faculdade de Tecnologia de São Paulo",
      logo: require("./assets/images/Logo-fmu.jpg"),
      subHeader: "Systems development analysis ",
      duration: "June 2023 - April 2024",
      desc: "project planning and development, software engineering, database, web development, mobile development, and software testing.",
      descBullets: [
        "UI Design and Development, Html Css and Javascript, Github, React, Node, Express, MongoDB, Firebase, PWA, SEO, Web Analytics",
      ],
    },

    {
      schoolName: "Origamid - Web Design",
      logo: require("./assets/images/origamid.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "November 2023 - April 2025",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "UI Design and Development, Html Css and Javascript, Github, React, Node, Express, MongoDB, Firebase, PWA, SEO, Web Analytics",
      ],
    },

    {
      schoolName: "Digital Inovetion One -",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader:
        "Bootcamp - Vscode, Visual studio, Mysql, MongoDb,linux sistem operacional,",
      duration: "September 2013 - April 2017",
      desc: " ",
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%",
    },
    {
      Stack: "Programming",
      progressPercentage: "60%",
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      href: "https://www.linkedin.com/in/gustavocelleguim/",
      role: "Spider-Men | Digital Inovetion One",
      company: "Dio-Project",
      companylogo: require("./assets/images/spidermen-logo.png"),
      date: "June 2018 – Present",
      desc: "The Digital Innovation One (DIO) project is an enriching journey focused on React, web design and essential tools like Figma and NPM. Aimed at developers looking to improve their skills, the program offers a solid foundation in React, introducing key concepts and interactive development practices. Furthermore, it highlights the importance of design in creating intended interfaces, using Figma to teach design and prototyping principles. Introduction to NPM as a package management tool reinforces the technical knowledge necessary for efficient web application development. This project is ideal for anyone who wants to delve into front-end development, combining theory and practice to build modern and practical web solutions.",
      descBullets: [
        "Front-End Development,",
        "npm introdution and ui/ux design with figma",
      ],
    },

    {
      href: "https://www.linkedin.com/in/gustavocelleguim/",
      role: "Front-end developer | introduction development web",
      company: "Rocketseat",
      companylogo: require("./assets/images/gustavo-profile.png"),
      date: "May 2017 – May 2018",
      desc: "My Profile project is a hands-on introduction to web development, designed to teach basics of HTML, CSS, JavaScript, and Git. Through this project, students create a personal online profile, a digital portfolio where they can present their skills and projects. This exercise not only reinforces theoretical learning, but also provides real-world experience in building web pages and using version control with Git. Its a valuable opportunity for beginners to develop their skills in fundamental web technologies, culminating in the creation of a final product that serves both as practice and as a demonstration of their skills to the world.",
    },

    {
      href: "https://www.linkedin.com/in/gustavocelleguim/",
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/",
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani  to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",

      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing",
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing",
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html",
        },
      ],
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en",
        },
      ],
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/",
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "My Articles",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt. | ",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@gugacelleguim/unlocking-the-power-of-markdown-a-game-changer-for-developers-projects-80cced475f3c",
      title: "",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?",
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+55 11 99567-4742",
  email_address: "gugacelleguim@gmail.com",
};

// Twitter Section

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  contactInfo,
  isHireable,
};
