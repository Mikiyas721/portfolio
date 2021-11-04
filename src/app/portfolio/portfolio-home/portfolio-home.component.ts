import {Component, OnInit} from '@angular/core';
import {SharedService} from "../../shared/shared.service";

@Component({
  selector: 'app-portfolio-home',
  templateUrl: './portfolio-home.component.html',
  styleUrls: ['./portfolio-home.component.css']
})
export class PortfolioHomeComponent implements OnInit {
  mobilePortfolios = [
    {
      title: "Sales Tracker",
      githubLink: "https://github.com/Mikiyas721/sales_tracker.git",
      content: {
        description: "In Ethiopia airtime is distributed to local merchants by organizations like the one that ordered the\n" +
          "        development\n" +
          "        of this project. This project was developed to help the organization and its sales people perform sales in a\n" +
          "        more\n" +
          "        organized way. Using this application the sales people are able to make records of their daily sales routines in\n" +
          "        a\n" +
          "        simple and more manageable way.",
        applications: [
          {label: 'Mobile Application for Sales People', framework: 'Flutter'},
          {label: 'Mobile Application for Admin', framework: 'Flutter'},
          {label: 'API', framework: 'Loopback API'}
        ],
        designPatterns: [
          'Domain Driven Design',
          'BLOC Pattern'
        ]
      },
      downloadLink: {title: 'Sales Tracker.apk', url: '/assets/apks/Sales Tracker.apk'},
      frameWorksLogo: [
        'assets/logos/flutter.png',
        'assets/logos/dart.png',
        'assets/logos/node.png',
      ],
      carouselImages: [
        'assets/images/1/1.jpg',
        'assets/images/1/2.jpg',
        'assets/images/1/3.jpg',
        'assets/images/1/4.jpg',
        'assets/images/1/5.jpg',
        'assets/images/1/6.jpg',
      ]
    },
    {
      title: "Rick and Morty",
      githubLink: "https://github.com/Mikiyas721/rnm_2.git",
      content: {
        description: 'This application uses a third party API that was made using GraphQL. It gives information about' +
          ' the characters, locations and episodes of the move. The frontend application fetches data from this api and ' +
          'display it in a presentable way. Additional it allows users to star their favourite character, which is stored' +
          ' locally.',
        applications: [
          {label: 'Mobile Application', framework: 'Flutter'}
        ],
        designPatterns: [
          'BLOC Pattern'
        ]
      },
      downloadLink: {title: 'Rick and Morty.apk', url: '/assets/apks/Rick and Morty.apk'},
      frameWorksLogo: [
        'assets/logos/flutter.png',
        'assets/logos/graphql.png',
        'assets/logos/sqlite.png',
      ],
      carouselImages: [
        'assets/images/1/1.jpg',
        'assets/images/1/2.jpg',
        'assets/images/1/3.jpg',
        'assets/images/1/4.jpg',
        'assets/images/1/5.jpg',
        'assets/images/1/6.jpg',
      ]
    },
    {
      title: "Todo",
      githubLink: "https://github.com/Mikiyas721/flutter_todo.git",
      content: {
        description: 'This application is used to keep daily todo-list. It uses a Hasura API keep users ' +
          'tasks using their account. The front end uses a Flutter GraphQL extension to make GraphQL ' +
          'query, mutation and subscriptions',
        applications: [
          {label: 'Mobile Application', framework: 'Flutter'},
        ],
        designPatterns: [
          'BLOC Pattern'
        ]
      },
      downloadLink: {title: 'Todo.apk', url: '/assets/apks/Todo.apk'},
      frameWorksLogo: [
        'assets/logos/flutter.png',
        'assets/logos/hasura.png'
      ],
      carouselImages: [
        'assets/images/1/1.jpg',
        'assets/images/1/2.jpg',
        'assets/images/1/3.jpg',
        'assets/images/1/4.jpg',
        'assets/images/1/5.jpg',
        'assets/images/1/6.jpg',
      ]
    },
    {
      title: "Recipe",
      githubLink: "https://github.com/Mikiyas721/recipe.git",
      content: {
        description: 'An application made for the purpose of recipe sharing among users. Recipes are ' +
          'stored on a Hasura API using GraphQL.',
        applications: [
          {label: 'Mobile Application', framework: 'Flutter'}
        ],
        designPatterns: [
          'BLOC Pattern'
        ]
      },
      downloadLink: {title: 'Recipe.apk', url: '/assets/apks/Recipe.apk'},
      frameWorksLogo: [
        'assets/logos/flutter.png',
        'assets/logos/hasura.png',
      ],
      carouselImages: [
        'assets/images/1/1.jpg',
        'assets/images/1/2.jpg',
        'assets/images/1/3.jpg',
        'assets/images/1/4.jpg',
        'assets/images/1/5.jpg',
        'assets/images/1/6.jpg',
      ]
    },
    {
      title: "Chess",
      githubLink: "https://github.com/Mikiyas721/chess.git",
      content: {
        description: 'A Flutter application for Chess Game. The application uses SQLite DB to save games. Uses' +
          ' Dart Isolates to run an algorithm when playing with the computer.',
        applications: [
          {label: 'Mobile Application', framework: 'Flutter'}
        ],
        designPatterns: [
          'Min-Max Algorithm',
          'BLOC Pattern'
        ]
      },
      downloadLink: {title: 'Chess.apk', url: '/assets/apks/chess.apk'},
      frameWorksLogo: [
        'assets/logos/flutter.png',
        'assets/logos/sqlite.png',

      ],
      carouselImages: [
        'assets/images/1/1.png',
        'assets/images/1/2.png',
        'assets/images/1/3.png',
        'assets/images/1/4.png',
        'assets/images/1/5.png',
        'assets/images/1/6.png',
      ]
    }
  ]

  websitePortfolios = [
    {
      title: "Tolodelivery Landing Page",
      githubLink: "https://github.com/Mikiyas721/tolodelivery_landingPage.git",
      content: {
        description: "A landing page for a startup that I was working on at the time. This landing page " +
          "was introduces the mobile application we had developed. It uses a carousel to display the contents of " +
          "the website in a presentable way. In addition, it also gives insight about the Telegram bot we had.",
        applications: [
          {label: 'Website', framework: 'Vue.Js'},
        ],
        designPatterns: [],
      },
      frameWorksLogo: [
        'assets/logos/node.png',
        'assets/logos/vue.png',
      ],
      carouselImages: [
        'assets/images/1/1.png',
        'assets/images/1/2.png',
        'assets/images/1/3.png',
        'assets/images/1/4.png',
        'assets/images/1/5.png',
        'assets/images/1/6.png',
      ]
    },
    {
      title: "Supermarket Management",
      githubLink: "https://github.com/Mikiyas721/Sp.git",
      content: {
        description: "This project was a college project that we worked on for the course Semester Project. It is " +
          "aimed at using an online management system that is used to track the commodities coming in and out of the " +
          "supermarket. Our primary focus was implementing a clean code by using Domain Driven Design.",
        applications: [
          {label: 'Website for personnel', framework: 'Flutter'},
          {label: 'Mobile Application for Customers', framework: 'Flutter'},
          {label: 'API', framework: 'Loopback API'}
        ],
        designPatterns: [
          'Domain Driven Design',
          'BLOC Pattern'
        ]
      },
      frameWorksLogo: [
        'assets/logos/flutter.png',
        'assets/logos/node.png',
      ],
      carouselImages: [
        'assets/images/1/1.png',
        'assets/images/1/2.png',
        'assets/images/1/3.png',
        'assets/images/1/4.png',
        'assets/images/1/5.png',
        'assets/images/1/6.png',
      ]
    }
  ]

  telegramBotsPortfolios = [
    {
      title: "Stack Overflow Bot",
      githubLink: "https://github.com/Mikiyas721/stackoverflowbot.git",
      content: {
        description: "This bot uses a third party API provided by the famous website Stack Overflow. The user is " +
          "able to query the API with a key word. The bot will respond with previous questions with that keyword." +
          "This allows developers easy access without opening a web browser.",
        applications: [
          {label: 'Bot', framework: 'Node.Js (Telegraf.Js)'},
        ],
        designPatterns: []
      },
      frameWorksLogo: [
        'assets/logos/node.png',
        'assets/logos/mongodb.png',

      ],
      carouselImages: [
        'assets/images/1/1.png',
        'assets/images/1/2.png',
        'assets/images/1/3.png',
        'assets/images/1/4.png',
        'assets/images/1/5.png',
        'assets/images/1/6.png',
      ],
      telegramBotLink: {telegramId: '@Stackoverflowrealbot', link: 'https://t.me/Stackoverflowrealbot'}
    },
    {
      title: "Questions Bot",
      githubLink: "https://github.com/Mikiyas721/questionbot.git",
      content: {
        description: "This bot uses a third party API that provides various questions of different categories. The " +
          "bot uses this API to give the Bot user with a question and answer session that keeps scores in a MongoDB" +
          "Database. ",
        applications: [
          {label: 'Bot', framework: 'Node.Js (Telegraf.Js)'},
        ],
        designPatterns: [
          '<a target="_blank" href="https://opentdb.com">3rd Party API</a>'
        ]
      },
      frameWorksLogo: [
        'assets/logos/node.png',
        'assets/logos/mongodb.png',
      ],
      carouselImages: [
        'assets/images/1/1.png',
        'assets/images/1/2.png',
        'assets/images/1/3.png',
        'assets/images/1/4.png',
        'assets/images/1/5.png',
        'assets/images/1/6.png',
      ],
      telegramBotLink: {telegramId: '@questionrealbot', link: 'https://t.me/questionrealbot'}
    }
  ]

  constructor(public sharedService: SharedService) {
  }

  ngOnInit(): void {

  }

  onPortfolioCardClick(object: any) {
    this.sharedService.selectedPortfolio = object
  }

  onInPageRoute(event: Event, hash: string) {
    event.preventDefault()
    window.location.hash = `#${hash}`
  }
}
