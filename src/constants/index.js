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
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
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
  ecommerce,
  louveApp,
  pokedex
} from "../assets";



export const navLinks = [
  {
    id: "about",
    title: "INTRODUÇÃO",
  },
  {
    id: "qualification",
    title: "QUALIFICAÇÃO",
  },
  {
    id: "work",
    title: "PROJETOS",
  },
  {
    id: "contact",
    title: "CONTATO",
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
    img: ufal,
    iconBg: "#383E56",
    date: "Jan 2022 - Concluido",
  },
  {
    title: "Graduação em Análise e Desenvolvimento de Sistemas",
    company_name: "Estácio",
    iconBg: "#E6DEDD",
    img: estacio,
    date: "Nov 2022 - Em andamento",
  },
  {
    title: "CS50's Introduction to Computer Science",
    company_name: "Havard University",
    img: havard,
    iconBg: "#383E56",
    date: "Dez 2022 - Concluido",
  },
  {
    title: "Santander Bootcamp 2023 - Fullstack Java+Angular",
    company_name: "DIO",
    img: dio,
    iconBg: "#E6DEDD",
    date: "Out 2023 - Concluido",
  },
  {
    title: "Curso de React.Js e Next.Js",
    company_name: "UDEMY",
    img: udemy,
    iconBg: "#383E56",
    date: "Junh 2023 - Concluido",
  },
  
];


const projects = [
  {
    name: "PokedexAngular",
    description:
         "Este projeto consiste em uma aplicação que permite buscar informações detalhadas sobre Pokémon. Através de uma interface simples, o usuário pode realizar pesquisas por nome , visualizar suas características e dados relevantes, como tipo, habilidades e estatísticas.",
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
    image: pokedex,
    source_code_link: "https://github.com/3vinicius/pokedex-angular/tree/main",
  },
{
    name: "LouveFeedback",
    description:
          "Neste projeto, desenvolvemos a API do LouveAPP utilizando Kotlin e Spring Boot, com integração ao banco de dados PostgreSQL. A API gerencia usuários, músicas e feedbacks dos usuários, oferecendo endpoints para interação com o aplicativo móvel. Utilizamos a biblioteca **react-native-youtube-iframe** para integração com o YouTube no aplicativo React Native",      
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "SpringBoot Kotlin",
        color: "green-text-gradient",
      }
    ],
    image: louveApp,
    source_code_link: "https://github.com/3vinicius/REACT_MOBILE",
  },
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

export { services, technologies, experiences, projects };
