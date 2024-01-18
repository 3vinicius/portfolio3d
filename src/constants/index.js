import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  aws,
  spring,
  postgre,
  angular,
  java,
  ufal,
  estacio,
  havard,
  dio,
  udemy,
  playstation,
  extencao,
  ecommerce
} from "../assets";


/* aws,
  postgre,
  angular,
  spring,
  java
 */
export const navLinks = [
  {
    id: "Informações",
    title: "Informações",
  },
  {
    id: "Projetos",
    title: "Pronjetos",
  },
  {
    id: "Contato",
    title: "Contato",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Extension Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "angular",
    icon: angular,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "aws",
    icon: aws,
  },
  {
    name: "spring",
    icon: spring,
  },
  {
    name: "postgre",
    icon: postgre,
  },
];

const experiences = [
  {
    title: "Graduação em Física",
    company_name: "UFAL",
    icon: meta,
    img: ufal,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Concluido",
  },
  {
    title: "Graduação em Análise e Desenvolvimento de Sistemas",
    company_name: "Estácio",
    icon: meta,
    iconBg: "#E6DEDD",
    img: estacio,
    date: "Nov 2022 - Em andamento",
  },
  {
    title: "CS50's Introduction to Computer Science",
    company_name: "Havard University",
    icon: starbucks,
    img: havard,
    iconBg: "#383E56",
    date: "Dez 2022 - Concluido",
  },
  {
    title: "Santander Bootcamp 2023 - Fullstack Java+Angular",
    company_name: "DIO",
    icon: tesla,
    img: dio,
    iconBg: "#E6DEDD",
    date: "Out 2023 - Concluido",
  },
  {
    title: "Curso de React.Js e Next.Js",
    company_name: "UDEMY",
    icon: shopify,
    img: udemy,
    iconBg: "#383E56",
    date: "Junh 2023 - Concluido",
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Playstore",
    description:
      "Neste projeto, realizamos a integração com a API RAWG para obter informações sobre jogos, como título, descrição, classificação e muito mais. Utilizamos a biblioteca HttpClient do Angular para fazer requisições HTTP para a API e exibir os dados em nosso site.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "Integração com API",
        color: "green-text-gradient",
      }
    ],
    image: playstation,
    source_code_link: "https://github.com/3vinicius/angular-psn-store-clone",
  },
  {
    name: "LinkedIn Connect Automator",
    description:
      "A ideia do projeto era criar uma extensão utilizando HTML e JavaScript, juntamente com as APIs do Chrome, para automatizar conexões no LinkedIn. O projeto foi desenvolvido sem nenhum objetivo de prejudicar a plataforma do LinkedIn, mas sim como uma forma de aprendizado.",
    tags: [,
      {
        name: "ChromeApi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
    ],
    image: extencao,
    source_code_link: "https://github.com/3vinicius/extension/tree/main",
  },
  {
    name: "Ecommerce",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/3vinicius/test-ecommerce",
  },
];

export { services, technologies, experiences, testimonials, projects };