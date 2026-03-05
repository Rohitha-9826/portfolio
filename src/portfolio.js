/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Rohitha Balusu",
  title: "Hi all, I'm Rohitha",
  subTitle: emoji(
    "Aspiring Software Engineer with strong foundations in DSA, system design basics, and full stack development.Skilled in React, Node.js, and database-driven applications.Currently focused on building scalable projects and mastering problem-solving for top product companies."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Rohitha-9826",
  linkedin: "https://www.linkedin.com/in/rohitha-balusu-07ab91289",
  gmail: "rohithabalusu176@gmail.com",
  medium: "https://medium.com/@rohithabalusu176",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do..",
  subTitle: "OBSESSED WITH ALGORITHMS, SYSTEMS & INTELLIGENT MACHINES",
  skills: [
  emoji("⚡ Depth in Algorithms & Problem Solving — focused on efficiency and optimization"),
  emoji("⚡ Core Systems Knowledge — Operating Systems, Databases & Networking"),
  emoji("⚡ Backend-Oriented Development with scalable architecture mindset"),
  emoji("⚡ Applied AI/ML experimentation through real-world projects")
],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Mallareddy Engineering College for Women",
      logo: require("./assets/images/Mrecw.png"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "August 2023 - May 2027",
      desc: "Took courses about Data Structures, Algorithms, DBMS, OS, Computer Networks, Software Engineering, ...",
      descBullets: [
        "Coordinator of technical seminars and workshops, organizing events to enhance students' technical skills and industry awareness.",
        "Participated in coding competitions and hackathons, gaining practical experience in problem-solving and teamwork.",
        "Contributed to open-source projects, demonstrating a commitment to collaborative development and continuous learning."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "AI Azure Intern",
      company: "Edunet Foundation in collaboration with Microsoft",
      companylogo: require("./assets/images/edunet.png"),
      date: "May 2025 - June 2025",
      desc: "Worked and deployed different AI models on Azure, gaining hands-on experience with cloud-based AI services and contributing to real-world projects.",
      descBullets: [
        "Implemented and optimized machine learning models for various applications, improving performance and scalability.",
        "Collaborated with cross-functional teams to integrate AI solutions into existing systems, enhancing functionality and user experience.",
      ]
    },
    {
      role: "Data Analyst Intern",  
      company: "Deolite",
      companylogo: require("./assets/images/Deloitte.png"),
      date: "July - 2025",
      desc: "Analyzed large datasets to extract actionable insights, utilizing tools such as SQL, Python, and data visualization software to support business decision-making.",
      descBullets: [
        "Conducted data cleaning and preprocessing to ensure data quality and reliability for analysis.",
        "Created interactive dashboards and reports to communicate findings effectively to stakeholders."
      ]
    }
    
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: true, // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Projects that I have worked on and deployed to production. It can be a mobile app, web app or a custom software",
  projects: [
    {
      image: require("./assets/images/signspell.png"),
      projectName: "SignSpell - AI",
      projectDesc: "SignSpell is an AI-powered sign Language Learning platform that provides an interactive and engaging way for users to learn sign language. It offers a comprehensive curriculum, real-time feedback, and personalized learning paths to help users master sign language effectively.",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://saayahealth.com/"
      //   }
      //   //  you can add extra buttons here.
      // ]
    },
    {
      image: require("./assets/images/skillbridge.png"),
      projectName: "SkillBridge - AI",
      projectDesc: "SkillBridge is an AI-powered skill development platform that offers personalized learning paths and real-time feedback to help users acquire new skills efficiently. It provides a comprehensive curriculum, interactive exercises, and progress tracking to enhance the learning experience.",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://nextu.se/"
      //   }
      // ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Artificial Intelligence Fundamentals",
      subtitle:
        "Completed the Artificial Intelligence Fundamentals course by IBM and earned a certification for successfully mastering the foundational concepts and applications of AI.",
      image: require("./assets/images/IBM.png"),
      imageAlt: "IBM Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1ZrtQlM32TUfJ2WUDBximkW9O4-VbqnD2/view?usp=sharing"
        }
      ]
    },
    {
      title: "Oracle Certified Foundations Associate",
      subtitle:
        "Earned the Oracle Certified Foundations Associate certification, demonstrating a solid understanding of foundational IT concepts and Oracle technologies.",
      image: require("./assets/images/oracle.png"),
      imageAlt: "Oracle Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/12jyqAZchSUoyaUybYvovFgYLIcVCVlfU/view?usp=sharing"
        }
      ]
    },

    {
      title: "Oracle data Certified foundations Associate",
      subtitle: "Achieved the Oracle Data Certified Foundations Associate certification, showcasing proficiency in data management and Oracle database technologies.",
      image: require("./assets/images/oracle.png"),
      imageAlt: "Oracle Logo",
      footerLink: [
        {
          name: "Certification", 
          url: "https://drive.google.com/file/d/1wCEILweU6mAEBAFLi5ICu45XQsy28Sc1/view?usp=sharing"
        }
      ]
    },
    {
      title: "Infosys Basics of Business Communication",
      subtitle: "Completed the Infosys Basics of Business Communication course and earned a certificate for successfully mastering the foundational concepts of business communication.",
      image: require("./assets/images/infosys.png"),
      imageAlt: "Infosys Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
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
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 7416129826",
  email_address: "rohithabalusu176@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

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
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
