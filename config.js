// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'SaveZoe',
  imageBackground: 'assets/background.jpg',
  openInNewTab: true,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: 'Доброе утро!',
  greetingAfternoon: 'Добрый день,',
  greetingEvening: 'Добрый вечер,',
  greetingNight: 'Иди спать!',

  // Weather
  weatherKey: 'abe295ef4e234ca55310bb92a8db4028',
  weatherIcons: 'Nord', // 'Nord', 'Dark', 'White'
  weatherUnit: 'C', // 'F', 'C'
  language: 'ru', // More languages in https://openweathermap.org/current#multi

  trackLocation: false, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: '55.75222',
  defaultLongitude: '37.61556',

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Kotlin',
      icon: 'airplay',
      link: 'https://play.kotlinlang.org/',
    },
    {
      id: '2',
      name: 'Mail',
      icon: 'mail',
      link: 'https://mail.google.com/mail/u/0/#inbox',
    },
    {
      id: '3',
      name: 'Translate',
      icon: 'globe',
      link: 'https://translate.google.com/?hl=ru',
    },
    {
      id: '4',
      name: 'gitHub',
      icon: 'github',
      link: 'https://github.com/',
    },
    {
      id: '5',
      name: 'VK',
      icon: 'heart',
      link: 'https://vk.com/feed',
    },
    {
      id: '6',
      name: 'Youtube',
      icon: 'youtube',
      link: 'https://www.youtube.com/',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'play',
  secondListIcon: 'coffee',

  // Links
  lists: {
    firstList: [
      {
        name: 'BDO',
        link: 'https://www.ru.playblackdesert.com/Main/Index',
      },
      {
        name: 'garmoth',
        link: 'https://garmoth.com',
      },
      {
        name: 'Twitch',
        link: 'https://www.twitch.tv',
      },
    ],
    secondList: [
      {
        name: 'WikiAnime',
        link:'https://wikianime.club',
      },
    ],
  },
};
