import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-resume-home',
  templateUrl: './resume-home.component.html',
  styleUrls: ['./resume-home.component.css']
})
export class ResumeHomeComponent implements OnInit {
  showModal = false
  selectedSkillData: any
  primarySkills = [
    {
      title: 'Flutter',
      iconUrl: '/assets/logos/flutter.png',
      engagement: '>2 years',
      briefDescription: 'It has been more than 2 years since I started using Flutter for Mobile Application development.' +
        ' During this time I have worked on different projects in a group and individually. Most of these projects were for practice purposes, ' +
        'while one was a freelance job and one was for a personal business. The front end part of the freelance job was implemented by me and the ' +
        'API was mostly implemented by my partner. My engagement on the application we made for a personal business was mostly around UI. In the ' +
        'applications I made for practice, I explored different Architectures and things about flutter.',
      projects: [
        'Sales Tracker',
        'Rick and Morty',
        'Share Recipe',
        'Todo',
        'Chess',
      ],
      courses: [
        {title: 'Dart and Flutter The Complete Developer\'s Guide', by: 'Stephen Grider'}
      ],
    },
    {
      title: 'Dart',
      iconUrl: '/assets/logos/dart.png',
      engagement: '>2 years',
      briefDescription: 'The reason I started using Dart was Flutter.So, except for some minor programs ' +
        'all the projects I worked on using using Dart' +
        'are similar with my Flutter Projects',
      projects: [
        'Additive Encryption Implementation'
      ],
      courses: [
        {title: 'Dart 2 Complete Bootcamp - Go Hero from Zero in Dart Flutter', by: '???'}
      ]
    },
    {
      title: 'Java',
      iconUrl: '/assets/logos/java.png',
      engagement: '1 year',
      briefDescription: 'This programming language was the starting point of my programming journey. Even though I ' +
        'C++ was my actual first programming language, I started to get clear understanding of the concepts with Java. ' +
        'I worked on a couple of desktop applications using Java Swing and Javafx. In addition to taking a course ' +
        '\'Object Oriented Programming\' in collage, I worked on other projects personally.',
      projects: [
        'ChessGame',
        'Library Management System',
        'Math Assistant',
        'Dijkstra\'s Algorithm Implementation'
      ],
      courses: [
        {title: 'Object Oriented Programming', by: 'Collage Teacher'}
      ]
    },
  ]
  secondarySkills = [
    {
      title: 'Node',
      iconUrl: '/assets/logos/node.png',
      engagement: '2 years',
      briefDescription: 'I started using Node to be able to make APIs. ' +
        'I learned ExpressJS and then Loopback API. Ever since, I use Loopback to make an API. ' +
        'In addition I use Node to build Telegram Bots.',
      projects: [
        'StackOverflow Bot',
        'Question Bot',
        'Gab Bot',
        'Sales Tracker API',
      ],
      courses: [
        {title: 'The Complete Nodejs Developer Course', by: '???'},
        {title: 'Node.js  Rest API Development Using Loopback', by: '???'},
        {title: 'Build Telegram Bots with JavaScript The Complete Guide', by: '???'},
      ]
    },
    {
      title: 'Python',
      iconUrl: '/assets/logos/python.png',
      engagement: '6 months',
      briefDescription: 'I took one course on python and built around three projects. ' +
        'Two of these projects use Tkinter for UI while the third one is a program that was developed to run ' +
        'on a Raspberry Pi, this was our Thesis Project.',
      projects: [
        'Password Generator',
        'Smart Traffic Control System(Collage Thesis)',
      ],
      courses: [
        {title: 'Learn Python Programming Masterclass', by: '???'},
      ]

    },
    {
      title: 'Vue',
      iconUrl: '/assets/logos/vue.png',
      engagement: '6 month',
      briefDescription: 'After taking courses about the basic of web development(HTML, CSS, Javascript),' +
        ' I started VueJs to make a website for a startup I was working on then. I used Vuetify UI library for ' +
        'the project I worked on.',
      projects: [
        'Tolodelivery LandingPage'
      ],
      courses: [
        {
          title: 'Vue JS 2 - The Complete Guide (incl. Vue Router & Vuex)', by: '???'
        }
      ]
    },
    {
      title: 'React',
      iconUrl: '/assets/logos/react.png',
      engagement: '2 months',
      briefDescription: 'Using React I only made a simple website that displays data from an API, this was part of ' +
        'our thesis project.',
      projects: [
        'Smart Traffic Control System Website'
      ],
      courses: [
        {title: 'React Front To Back', by: '???'}
      ]
    },
    {
      title: 'Angular',
      iconUrl: '/assets/logos/angular.png',
      engagement: '2 weeks',
      briefDescription: 'I am currently learning Angular. This website was made using Angular.',
      projects: [
        'Portfolio'
      ],
      courses: [
        {title: 'The Modern Angular Bootcamp [2020] 2021-2', by: 'Stephen Grider'}
      ]
    },
  ]
  supportiveSkills = [
    {
      title: 'Adobe XD',
      iconUrl: '/assets/logos/xd.png',
      engagement: '>1 years',
      briefDescription: 'Recently, I start my projects by designing the user interface using Adobe XD.' +
        'I have designed user interface for both Mobile and Web Applications.',
      projects: [
        'Sales Tracker UI',
        'College Semester Project UI',
        'Portfolio',

      ],
      courses: [
        {title: 'Adobe.XD.Essential.Training.Design.Oct.2018', by: '???'},
        {title: 'User Experience Design Essentials - Adobe XD UI UX Design(Partially)', by: '???'},
      ]
    },
    {
      title: 'GitHub',
      iconUrl: '/assets/logos/git.png',
      engagement: '>2 years',
      briefDescription: 'I started using github when I worked on the personal project my friend and I had.',
      projects: [
        'All projects after I started using GitHub'
      ],
      courses: [
        {title: 'Git Complete The definitive, step-by-step guide to Git', by: '???'}
      ]
    },
  ]
  others = [
    {
      title: 'Hasura',
      iconUrl: '/assets/logos/git.png',
      engagement: '2 months',
      briefDescription: 'During my internship program in my college stay, the company I worked in instructed me to use ' +
        'Hasura to develop API for the Flutter Applications I was working on. One of the projects used a third party API.' +
        'Even though I did not do any back end work, I used graphQL to read data from the API.',
      projects: [
        'Todo API',
        'Share Recipe API',
        'Rick and Morty'
      ],
    },
    {
      title: 'C#',
      iconUrl: '/assets/logos/c_sharp.png',
      engagement: '1 month',
      briefDescription: 'Even though I never used it on a project, I took a course to ' +
        'understand the some of the few differences it has with Java.',
      projects: [],
      courses: [
        {title: 'C# Basics for Beginners Learn C# Fundamentals by Coding', by: '???'}
      ]
    },
    {
      title: 'Android',
      iconUrl: '/assets/logos/android.png',
      engagement: '2 month',
      briefDescription: 'I had briefly looked into android native (Java) right after I learned ' +
        'Java and right before I started Flutter. In this time I have done basic things with Android',
      projects: [
        'Simple Calculator'
      ],
      courses:[
        {title:'Youtube course', by: 'Bucky Roberts'}
      ]
    },
    {
      title: 'Kotlin',
      iconUrl: '/assets/logos/kotlin.png',
      engagement: '>2 years',
      briefDescription: 'I have recently started learning Kotlin to be able to use Jetpack Compose to build android native' +
        'applications.',
      projects: [
        'Tic Tac Toe Game'
      ],
      courses: [
        {title: 'Kotlin for Beginners Learn Programming With Kotlin', by: '???'}
      ]
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

  onSkillClick(object: any) {
    this.showModal = true
    this.selectedSkillData = object
  }

  onCloseModal() {
    this.showModal = false
  }


}
