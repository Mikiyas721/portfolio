import {Component, OnInit} from '@angular/core';

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
      downloadLink: 'fghjk',
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
      downloadLink: 'ghj'
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
      downloadLink: 'k'
    }, {
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
      downloadLink: 'tyui'
    }, {
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
      downloadLink: 'yty'
    }
  ]

  websitePortfolios = [
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
      }
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
      }
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
      }
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
      }
    }
  ]
  selectedPortfolio: any

  constructor() {
  }

  ngOnInit(): void {
  }
  onPortfolioCardClick(object:any){
    this.selectedPortfolio = object
  }


}
