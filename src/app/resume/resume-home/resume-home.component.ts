import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-resume-home',
  templateUrl: './resume-home.component.html',
  styleUrls: ['./resume-home.component.css']
})
export class ResumeHomeComponent implements OnInit {
  showModal = false
  selectedSkillData: any

  exploring = {
    title:'Currently Exploring',
    data:[
      {iconUrl: 'assets/logos/angular.png', text: '&nbsp;Angular'},
      {iconUrl: 'assets/logos/kotlin.png', text: '&nbsp;Kotlin&nbsp;&nbsp;'},
      {iconUrl: 'assets/logos/jetpack.png', text: '&nbsp;JetPack'}
    ]
  }

  ides = {
    title:'Preferred IDEs',
    data: [
      {iconUrl: 'assets/logos/android_studio.png', text: '&nbsp;Mobile'},
      {iconUrl: 'assets/logos/webstorm.png', text: '&nbsp;Web&nbsp;&nbsp;'},
      {iconUrl: 'assets/logos/intellij.png', text: '&nbsp;Others'}
    ]
  }

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
        {title: 'Sales Tracker', gitLink: 'https://github.com/Mikiyas721/sales_tracker.git'},
        {title: 'Rick and Morty', gitLink: 'https://github.com/Mikiyas721/rnm_2.git'},
        {title: 'Recipe', gitLink: 'https://github.com/Mikiyas721/recipe.git'},
        {title: 'Todo', gitLink: 'https://github.com/Mikiyas721/flutter_todo.git'},
        {title: 'Chess', gitLink: 'https://github.com/Mikiyas721/chess.git'},
        {title: 'Media Player', gitLink: 'https://github.com/Mikiyas721/vlc.git'},
        {title: 'WCT', gitLink: 'https://github.com/Mikiyas721/WCT.git'},
      ],
      courses: [
        {title: 'Dart and Flutter The Complete Developer\'s Guide', by: 'Stephen Grider'}
      ],
      hasLinkedProjects: true
    },
    {
      title: 'Dart',
      iconUrl: '/assets/logos/dart.png',
      engagement: '>2 years',
      briefDescription: 'The reason I started using Dart was Flutter.So, except for some minor programs ' +
        'all the projects I worked on using using Dart' +
        'are similar with my Flutter Projects',
      projects: [
        'Additive Encryption Implementation',
      ],
      courses: [
        {title: 'Dart 2 Complete Bootcamp - Go Hero from Zero in Dart Flutter', by: 'Ajinkya Temak'}
      ],
      hasLinkedProjects: false
    },
    {
      title: 'Java',
      iconUrl: '/assets/logos/java.png',
      engagement: '1 year',
      briefDescription: 'This programming language was the starting point of my programming journey. Even though ' +
        'C++ was my actual first programming language, I started to get clear understanding of the concepts with Java. ' +
        'I worked on a couple of desktop applications using Java Swing and Javafx. In addition to taking a course ' +
        '\'Object Oriented Programming\' in collage, I worked on other projects personally.',
      projects: [
        {title: 'ChessGame', gitLink: 'https://github.com/Mikiyas721/ChessGame.git'},
        {title: 'Library Management System', gitLink: 'https://github.com/Mikiyas721/LibraryManagment.git'},
        {
          title: 'University Database Management System',
          gitLink: 'https://github.com/Mikiyas721/University-Database-Managment.git'
        },
        {title: 'Math Assistant', gitLink: 'https://github.com/Mikiyas721/MathAssistant.git'},
        {
          title: 'Dijkstra\'s Algorithm Implementation',
          gitLink: 'https://github.com/Mikiyas721/dijkstra-s-algorithm.git'
        },
      ],
      courses: [
        {title: 'Object Oriented Programming', by: 'College Teacher'},
        {title: 'Youtube Videos', by: 'Bucky Roberts'},
      ],
      hasLinkedProjects: true
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
        {title: 'StackOverflow Bot', gitLink: 'https://github.com/Mikiyas721/stackoverflowbot.git'},
        {title: 'Question Bot', gitLink: 'https://github.com/Mikiyas721/questionbot.git'},
        {title: 'Gab Bot', gitLink: 'https://github.com/Mikiyas721/gabbot.git'},
        {title: 'Sales Tracker API', gitLink: 'https://github.com/Mikiyas721/sales_tracker_api.git'},
      ],
      courses: [
        {title: 'The Complete Nodejs Developer Course', by: 'Andrew Mead'},
        {title: 'Node.js  Rest API Development Using Loopback', by: 'Haider Malik'},
        {title: 'Build Telegram Bots with JavaScript The Complete Guide', by: 'Mark Tan'},
      ],
      hasLinkedProjects: true
    },
    {
      title: 'Python',
      iconUrl: '/assets/logos/python.png',
      engagement: '6 months',
      briefDescription: 'I took one course on python and built around three projects. ' +
        'Two of these projects use Tkinter for UI while the third one is a program that was developed to run ' +
        'on a Raspberry Pi, this was our Thesis Project.',
      projects: [
        {title: 'Password Generator and Others', gitLink: 'https://github.com/Mikiyas721/Python-Exercises.git'},
        {
          title: 'Smart Traffic Control System(College Thesis)',
          gitLink: 'https://github.com/Mikiyas721/thesis/tree/master/controller'
        },
      ],
      courses: [
        {title: 'Learn Python Programming Masterclass', by: 'Tim Buchalka'},
      ],
      hasLinkedProjects: true
    },
    {
      title: 'Vue',
      iconUrl: '/assets/logos/vue.png',
      engagement: '6 month',
      briefDescription: 'After taking courses about the basic of web development(HTML, CSS, Javascript),' +
        ' I started VueJs to make a website for a startup I was working on then. I used Vuetify UI library for ' +
        'the project I worked on.',
      projects: [
        {title: 'Tolodelivery LandingPage', gitLink: 'https://github.com/Mikiyas721/tolodelivery_landingPage.git'},
      ],
      courses: [
        {
          title: 'Vue JS 2 - The Complete Guide (incl. Vue Router & Vuex)', by: 'Maximilian Schwarzmüller'
        }
      ],
      hasLinkedProjects: true
    },
    {
      title: 'React',
      iconUrl: '/assets/logos/react.png',
      engagement: '2 months',
      briefDescription: 'Using React I only made a simple website that displays data from an API, this was part of ' +
        'our thesis project.',
      projects: [
        {
          title: 'Smart Traffic Control System Website',
          gitLink: 'https://github.com/Mikiyas721/thesis/tree/master/web'
        },
      ],
      courses: [
        {title: 'React Front To Back', by: 'Brad Traversy'}
      ],
      hasLinkedProjects: true
    },
    {
      title: 'Angular',
      iconUrl: '/assets/logos/angular.png',
      engagement: '2 weeks',
      briefDescription: 'I am currently learning Angular. This website was made using Angular.',
      projects: [
        {title: 'Portfolio', gitLink: 'https://github.com/Mikiyas721/portfolio.git'},
      ],
      courses: [
        {title: 'The Modern Angular Bootcamp [2020] 2021-2', by: 'Stephen Grider'}
      ],
      hasLinkedProjects: true
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
        {title: 'Adobe XD Essential Training Design', by: 'Beaumont, Dani'},
        {title: 'User Experience Design Essentials - Adobe XD UI UX Design(Partially)', by: 'Daniel Walter Scott'},
      ],
      hasLinkedProjects: false
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
        {title: 'Git Complete The definitive, step-by-step guide to Git', by: 'Jason Taylor'}
      ],
      hasLinkedProjects: false
    },
  ]
  others = [
    {
      title: 'Hasura',
      iconUrl: '/assets/logos/hasura.png',
      engagement: '2 months',
      briefDescription: 'During my internship program in my college stay, the company I worked in instructed me to use ' +
        'Hasura to develop API for the Flutter Applications I was working on. One of the projects used a third party API.' +
        'Even though I did not do any back end work, I used graphQL to read data from the API.',
      projects: [
        'Todo API',
        'Share Recipe API',
        'Rick and Morty',
      ],
      hasLinkedProjects: false
    },
    {
      title: 'C#',
      iconUrl: '/assets/logos/c_sharp.png',
      engagement: '1 month',
      briefDescription: 'Even though I never used it on a project, I took a course to ' +
        'understand the some of the few differences it has with Java.',
      projects: [],
      courses: [
        {title: 'C# Basics for Beginners Learn C# Fundamentals by Coding', by: 'Mosh Hamedani'}
      ],
      hasLinkedProjects: false
    },
    {
      title: 'Android',
      iconUrl: '/assets/logos/android.png',
      engagement: '2 month',
      briefDescription: 'I had briefly looked into android native (Java) right after I learned ' +
        'Java and right before I started Flutter. In this time I have done basic things with Android',
      projects: [
        {title: 'Simple Calculator', gitLink: 'https://github.com/Mikiyas721/Calculator.git'},
      ],
      courses: [
        {title: 'Youtube course', by: 'Bucky Roberts'}
      ],
      hasLinkedProjects: true
    },
    {
      title: 'Kotlin',
      iconUrl: '/assets/logos/kotlin.png',
      engagement: '>2 years',
      briefDescription: 'I have recently started learning Kotlin to be able to use Jetpack Compose to build android native' +
        'applications.',
      projects: [
        {
          title: 'Tic Tac Toe Game',
          gitLink: 'https://github.com/Mikiyas721/kotlin_practices/tree/master/Tic%20Tac%20Toe'
        },
      ],
      courses: [
        {title: 'Kotlin for Beginners Learn Programming With Kotlin', by: 'Peter Sommerhoff'}
      ],
      hasLinkedProjects: true
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
