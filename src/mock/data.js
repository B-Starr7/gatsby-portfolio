import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Ben Starr | Front-end Developer Portfolio', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
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
  paragraphOne:
    'I have a passion for solving problems and building unique websites and applicaitons. Putting the pieces together and watching it all come to life is what excites me the most. I would love nothing more than to be a part of a team of amazing programmers, contirubting to help create greatness.',
  paragraphTwo:
    'Outside of writing code, I am currently a Field Radio Operator in the United States Marine Corps Reserve, and I enjoy playing guitar, loud concerts, and drinking cold beer with friends.',
  paragraphThree: 'I develop apps primarily using JavaScript, React, and Sass.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'apex-clothing-homepage.png',
    title: 'Apex Clothing',
    info:
      'Apex Clothing is a fully functioning e-commerce store which allows users to create an account, shop for clothes, add to cart, and checkout using a test credit card number.',
    info2: 'The store was built using React.js, Redux, Sass, Google Firebase, and the Stripe API.',
    url: 'https://apex-clothes.herokuapp.com',
    repo: 'https://github.com/B-Starr7/apex-clothing', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Tracksly-Desktop-Hero-Results.png',
    title: 'Tracksly',
    info:
      "This project is built around Spotify's playlist API. It uses the React Router to create a single page application which allows a user search for songs, and create and upload playlists to their Spotify account pending authentication.",
    info2: 'Tracksly was built using React.js and CSS.',
    url: 'http://tracksly.me',
    repo: 'https://github.com/B-Starr7/tracksly', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'event-finder-homepage.png',
    title: 'Event Finder',
    info:
      "For this project, the goal was to build an app that utilizes two different API's to achieve a single result.In this case, the API's for Google Maps and Ticketmaster were used. Users are able to search for a type of event (such as jazz music) in the city of their choosing, which will then display a map with 'Markers' dropped for each event, alongside a list of the upcoming events in order from earliest to latest date showing. Users can navigate through either option to be taken to a website where they can purchase tickets to their selected events.",
    info2: 'This app was built using a combination of HTML, CSS, JavaScript, and jQuery.',
    url: 'https://b-starr7.github.io/event-finder/',
    repo: 'https://github.com/B-Starr7/event-finder', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Space-Quiz-App.png',
    title: 'Space Quiz',
    info:
      'The goal of this project was to build a responsively designed, functioning quiz that would seamlessly allow users to navigate through one question at a time, while displaying their current score and question number, alerting them to any correct and incorrect answers, and displaying their final score at the end with a chance to retake the quiz.',
    info2: 'I built this quiz using HTML, CSS, JavaScript, and jQuery.',
    url: 'https://b-starr7.github.io/quiz-app-final/',
    repo: 'https://github.com/B-Starr7/quiz-app-final', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'bcstarr47@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ben-starr/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/B-Starr7',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
