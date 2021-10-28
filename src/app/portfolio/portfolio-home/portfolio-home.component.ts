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
          'Domain Driven Design'
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
      downloadLink: {title: 'Rick and Morty', url: '/assets/images/1/2.jpg'},
      frameWorksLogo: [
        'assets/logos/flutter.png',
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
      downloadLink: {title: 'Share Recipe', url: '/assets/images/1/3.jpg'},
      frameWorksLogo: [
        'assets/logos/flutter.png'
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
      downloadLink: {title: 'Todo', url: '/assets/images/1/4.jpg'},
      frameWorksLogo: [
        'assets/logos/flutter.png',
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
      downloadLink: {title: 'Chess', url: '/assets/images/1/5.jpg'},
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


}
