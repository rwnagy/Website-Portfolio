export const projects = [
  {
    title: 'Система отслеживания ошибок',
    description: 'Простая система отслеживания ошибок, построен на стеке MERN. Это позволяет пользователям публиковать новые ошибки и удалять активные ошибки с помощью запросов axios.',
      image: '/images/1.jpg',
      tags: ['Mongo', 'Express', 'React', 'Node'],
    source: 'https://github.com/rwnagy/bug-tracker/tree/deploy',
    visit: 'https://rwnagy-bug-tracker.netlify.app/',
    id: 0,
  },
  {
    title: 'Поисковик рецептов',
    description: 'Приложение React, которое подключается к Spoonful API для поиска рецептов. Он использует поисковые запросы для Spoonful API для получения данных в формате JSON, а затем генерирует страницу рецептов и информации из этих данных.',
    image: '/images/2.jpg',
    tags: ['React', 'JavaScript'],
    source: 'https://github.com/rwnagy/RecipeSearcher',
    visit: 'https://rwnagy-recipe-search.netlify.app/',
    id: 1,
  }];
  /*{
    title: 'Скоро будет...',
    description: 'Этот раздел будет обновлен в ближайшее время.',
      image: '/images/1.jpg',
      tags: ['React', 'Express.js'],
    source: 'https://google.com',
    visit: 'https://google.com',
    id: 2,
  },
  {
    title: 'Скоро будет...',
    description: 'Этот раздел будет обновлен в ближайшее время.',
    image: '/images/1.jpg',
    tags: ['React', 'Next.js', 'Node.js', 'MongoDB',],
    source: 'https://google.com',
    visit: 'https://google.com',
    id: 3,
  },
];*/
export const projectsEN = [
  {
    title: 'Bug Tracker',
    description: "A simple bug tracker built on a MERN stack. It allows users to post new bugs and delete active bugs with axios requests.",
      image: '/images/1.jpg',
      tags: ['Mongo', 'Express', 'React', 'Node'],
    source: 'https://github.com/rwnagy/bug-tracker/tree/deploy',
    visit: 'https://rwnagy-bug-tracker.netlify.app/',
    id: 0,
  },
  {
    title: 'Recipe Finder',
    description:"A React App which connects to Spoonful API to search for recipes. It uses search queries for Spoonful API to recieve JSON data, and then generates a recipe and information page from the data.",
    image: '/images/2.jpg',
    tags: ['React', 'JavaScript'],
    source: 'https://github.com/rwnagy/RecipeSearcher',
    visit: 'https://rwnagy-recipe-search.netlify.app/',
    id: 1,
  }];
  /*{
    title: 'Coming Soon',
    description: "This section will be updated shortly to include the most recent projects.",
      image: '/images/1.jpg',
      tags: ['React', 'Express.js'],
    source: 'https://google.com',
    visit: 'https://google.com',
    id: 2,
  },
  {
    title: 'Coming Soon',
    description: "This section will be updated shortly to include the most recent projects.",
    image: '/images/1.jpg',
    tags: ['React', 'Next.js', 'Node.js', 'MongoDB',],
    source: 'https://google.com',
    visit: 'https://google.com',
    id: 3,
  },
];*/

export const TimeLineData = [
  { year: 2016, text: 'Основал Первую Компанию', },
  { year: 2018, text: 'Два диплома бакалавра в экономики и международных исследований в NCSU, Роли, Северная Каролина, США', },
  { year: 2021, text: 'Магистратура политики, экономики и философии НИУ ВШЭ, Москва, Россия', },
];

export const TimeLineDataEN = [
  { year: 2016, text: 'Started First Company', },
  { year: 2018, text: 'Two Bachelors Degrees in Economics and International Studies from NCSU, Raleigh, North Carolina, USA', },
  { year: 2021, text: 'Masters Degree in Politics, Economics, and Philosophy from HSE, Moscow, Russia', },
];