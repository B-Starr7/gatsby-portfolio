import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Ben Starr',
  subtitle: 'Front-end Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'portfolio-profile.jpeg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'apex-clothing-homepage.png',
    title: '',
    info: '',
    info2: '',
    url: 'https://apex-clothes.herokuapp.com',
    repo: 'https://github.com/B-Starr7/apex-clothing', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Tracksly-Desktop-Hero-Results.png',
    title: '',
    info: '',
    info2: '',
    url: 'http://tracksly.me',
    repo: 'https://github.com/B-Starr7/tracksly', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'event-finder-homepage.png',
    title: '',
    info: '',
    info2: '',
    url: 'https://b-starr7.github.io/event-finder/',
    repo: 'https://github.com/B-Starr7/event-finder', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Space-Quiz-App.png',
    title: '',
    info: '',
    info2: '',
    url: 'https://b-starr7.github.io/quiz-app-final/',
    repo: 'https://github.com/B-Starr7/quiz-app-final', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
