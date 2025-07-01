interface Skill {
  name: string;
  percent: number;
}

interface Education {
  degree: string;
  period: string;
  institution: string;
}

interface Experience {
  company: string;
  period: string;
  title: string;
  desc: string;
}

const skills: Skill[] = [
  { name: 'Web Design', percent: 80 },
  { name: 'Graphic Design', percent: 70 },
  { name: 'React.js', percent: 85 },
  { name: 'Angular', percent: 75 },
  { name: 'Node.js', percent: 65 },
];

const education: Education[] = [
  {
    degree: 'BE in Electronics and Communication',
    period: '2013 – 2017',
    institution: 'Mar Ephraem College of Engineering and Technology',
  },
  {
    degree: 'Higher Secondary Education (Computer Science)',
    period: '2011 – 2013',
    institution: 'Government Higher Secondary School, Munchirai',
  },
];

const experience: Experience[] = [
  {
    company: 'Infosys',
    period: 'February 2022 – Present',
    title: 'Specialist Programmer',
    desc: `Leading a team of 10+ developers in building scalable enterprise applications.
Architecting front-end solutions using React.js and Angular.
Conducting code reviews, enforcing best practices, and optimising performance.
Collaborating closely with UX/UI teams to deliver accessible and pixel-perfect interfaces.
Driving Agile ceremonies, sprint planning, and client demos to ensure project success.`,
  },
  {
    company: 'Cognizant Technology Solutions',
    period: 'February 2021 – February 2022',
    title: 'Full Stack Developer',
    desc: `Developed web applications using React, Node.js, and GraphQL.
Integrated REST APIs and GraphQL endpoints for enhanced performance.
Delivered reusable component libraries aligned with design systems.
Participated in continuous integration and deployment workflows.`,
  },
  {
    company: 'InApp Information Technologies',
    period: 'December 2019 – January 2021',
    title: 'Software Engineer',
    desc: `Migrated legacy applications to Angular v8, improving load times and maintainability.
Refactored modules to optimise performance and code quality.
Engaged in client meetings to gather requirements and deliver technical feasibility analysis.`,
  },
  {
    company: 'Piccosoft Software Labs',
    period: 'February 2018 – November 2019',
    title: 'Mobile Application Developer',
    desc: `Developed and deployed cross-platform mobile applications using Cordova and Ionic.
Integrated Firebase for real-time notifications and authentication.
Implemented location tracking features for logistics and delivery apps.
Managed the full lifecycle from development to publishing in App Store and Play Store.`,
  },
];

document.addEventListener('DOMContentLoaded', () => {
  const experienceElement = document.getElementById(
    'experience'
  ) as HTMLElement;
  const educationElement = document.getElementById('education') as HTMLElement;
  const skillSetElement = document.getElementById('skill-set') as HTMLElement;
  const profileBar = document.getElementById('profile-bar') as HTMLElement;
  const showContactButton = document.getElementById(
    'show-contacts'
  ) as HTMLElement;

  showContactButton.addEventListener('click', () => {
    if (profileBar.classList.contains('active')) {
      profileBar.classList.remove('active');
      return;
    }
    profileBar.classList.add('active');
  });

  // Render Experience
  const myExperience: string = experience
    .map(
      ({ company, period, title, desc }: Experience) => `
      <li class="timeline-item">
        <h4 class="h4 timeline-item-title">${company}</h4>
        <p class="timeline-item-sub-title"><b>${title}</b></p>
        <span>${period}</span>
        <p class="timeline-text">${desc}</p>
      </li>
    `
    )
    .join('');
  experienceElement.innerHTML = myExperience;
  console.log(experienceElement);
  // Render Education
  const myEducation: string = education
    .map(
      ({ degree, period, institution }: Education) => `
      <li class="timeline-item">
        <h4 class="h4 timeline-item-title">${degree}</h4>
        <span>${period}</span>
        <p class="timeline-text">${institution}</p>
      </li>
    `
    )
    .join('');
  educationElement.innerHTML = myEducation;

  // Render Skills
  const mySkills: string = skills
    .map(
      ({ name, percent }: Skill) => `
      <li class="skills-item">
        <div class="title-wrapper">
          <h5 class="h5">${name}</h5>
        </div>
        <progress class="skill-progress" max="100" value="${percent}">${percent}%</progress>
      </li>
    `
    )
    .join('');
  skillSetElement.innerHTML = mySkills;
});
