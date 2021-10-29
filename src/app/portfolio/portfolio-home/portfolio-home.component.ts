import {Component, OnInit} from '@angular/core';
import {SharedService} from "../../shared/shared.service";

@Component({
  selector: 'app-portfolio-home',
  templateUrl: './portfolio-home.component.html',
  styleUrls: ['./portfolio-home.component.css']
})
export class PortfolioHomeComponent implements OnInit {
  descriptionSample = "In Ethiopia airtime is distributed to local merchants by organizations like the one that ordered the\n" +
    "        development\n" +
    "        of this project. This project was developed to help the organization and its sales people perform sales in a\n" +
    "        more\n" +
    "        organized way. Using this application the sales people are able to make records of their daily sales routines in\n" +
    "        a\n" +
    "        simple and more manageable way."

  mobilePortfolios = [
    {
      title: "Sales Tracker",
      githubLink: "https://github.com/Mikiyas721/sales_tracker.git",
      content: {
        description: this.descriptionSample,
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
      downloadLink: {title: 'Sales Tracker', url: '/assets/images/1/1.jpg'},
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
          'the characters, locations and episodes of the move. The frontend application fetches data from this api and ' +
          'display it in a presentable way. Additional it allows users to star their favourite character, which is stored' +
          'locally.',
        applications: [
          {label: 'Mobile Application', framework: 'Flutter'}
        ],
        designPatterns: [
          'BLOC Pattern'
        ]
      },
      downloadLink: {title: 'Rick and Morty', url: '/assets/images/1/2.jpg'},
      frameWorksLogo: [
        'assets/logos/flutter.png',
        'assets/logos/flutter.png',
        'assets/logos/flutter.png',
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
      title: "Todos",
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
      downloadLink: {title: 'Todos', url: '/assets/images/1/3.jpg'},
      frameWorksLogo: [
        'assets/logos/flutter.png',
        'assets/logos/flutter.png',
        'assets/logos/flutter.png',
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
      title: "Share Recipes",
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
      downloadLink: {title: 'Recipe', url: '/assets/images/1/4.jpg'},
      frameWorksLogo: [
        'assets/logos/flutter.png',
        'assets/logos/node.png',
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
      title: "Chess",
      githubLink: "https://github.com/Mikiyas721/chess.git",
      content: {
        description: 'A Flutter application for Chess Game. The application uses SQLite DB to save games. Uses' +
          ' Dart Isolates to run an algorithm when playing with the computer.',
        applications: [
          {label: 'Mobile Application', framework: 'Flutter'}
        ],
        designPatterns: [
          'Min-Max Algorithm'
        ]
      },
      downloadLink: {title: 'Chess', url: '/assets/images/1/5.jpg'},
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
      title: "Tolodelivery LandingPage",
      githubLink: "https://github.com/Mikiyas721/abc",
      content: {
        description: this.descriptionSample,
        applications: [
          {label: 'Mobile Application for Sales People', framework: 'Flutter'},
          {label: 'Mobile Application for Admin', framework: 'Flutter'},
          {label: 'API', framework: 'Loopback API'}
        ],
        designPatterns: [
          'Domain Driven Design'
        ],
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
      title: "Sales Tracker",
      githubLink: "https://github.com/Mikiyas721/abc",
      content: {
        description: this.descriptionSample,
        applications: [
          {label: 'Mobile Application for Sales People', framework: 'Flutter'},
          {label: 'Mobile Application for Admin', framework: 'Flutter'},
          {label: 'API', framework: 'Loopback API'}
        ],
        designPatterns: [
          'Domain Driven Design'
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
      title: "Sales Tracker",
      githubLink: "https://github.com/Mikiyas721/abc",
      content: {
        description: this.descriptionSample,
        applications: [
          {label: 'Mobile Application for Sales People', framework: 'Flutter'},
          {label: 'Mobile Application for Admin', framework: 'Flutter'},
          {label: 'API', framework: 'Loopback API'}
        ],
        designPatterns: [
          'Domain Driven Design'
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
    },
    {
      title: "Sales Tracker",
      githubLink: "https://github.com/Mikiyas721/abc",
      content: {
        description: this.descriptionSample,
        applications: [
          {label: 'Mobile Application for Sales People', framework: 'Flutter'},
          {label: 'Mobile Application for Admin', framework: 'Flutter'},
          {label: 'API', framework: 'Loopback API'}
        ],
        designPatterns: [
          'Domain Driven Design'
        ]
      },
      frameWorksLogo: [
        'assets/logos/node.png',
        'assets/logos/mysql.png',

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

  constructor(public sharedService: SharedService) {
  }

  ngOnInit(): void {

  }

  onPortfolioCardClick(object: any) {
    this.sharedService.selectedPortfolio = object
  }
  onInPageRoute(event:Event, hash:string){
    event.preventDefault()
    console.log(window.location.hash = `#${hash}`)
  }


}
