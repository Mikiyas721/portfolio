import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-home',
  templateUrl: './home-home.component.html',
  styleUrls: ['./home-home.component.css']
})
export class HomeHomeComponent implements OnInit {
  recents = [
    {
      title: "Sales Tracker",
      description: "In Ethiopia airtime is distributed to local merchants by organizations like the one that ordered the\n" +
        "        development\n" +
        "        of this project. This project was developed to help the organization and its sales people perform sales in a\n" +
        "        more\n" +
        "        organized way. Using this application the sales people are able to make records of their daily sales routines in\n" +
        "        a\n" +
        "        simple and more manageable way.",
      frameWorksLogo: [
        'assets/logos/flutter.png',
        'assets/logos/dart.png',
        'assets/logos/node.png',
      ],
      videoUrl: "/assets/gifs/sales.mp4",
      isLeft: false
    },
    {
      title: "Rick and Morty",
      description: 'This application uses a third party API that was made using GraphQL. It gives information about' +
        ' the characters, locations and episodes of the move. The frontend application fetches data from this api and ' +
        'display it in a presentable way. Additional it allows users to star their favourite character, which is stored' +
        ' locally.',
      frameWorksLogo: [
        'assets/logos/flutter.png',
        'assets/logos/graphql.png',
        'assets/logos/sqlite.jpg',
      ],
      videoUrl: "/assets/gifs/rick.mp4",
      isLeft: true
    },
    {
      title: "Chess",
      description: 'A Flutter application for Chess Game. The application uses SQLite DB to save games. Uses' +
        ' Dart Isolates to run an algorithm when playing with the computer.',
      frameWorksLogo: [
        'assets/logos/flutter.png',
        'assets/logos/sqlite.jpg',
      ],
      videoUrl: "/assets/gifs/chess.mp4",
      isLeft: false
    },
    {
      title: "Media Player",
      description: 'This application partially combines the use of a Gallery and a Media Player. It previews ' +
        'all the images and videos with in the device with in categories. Besides video files, it also plays audio ' +
        'files. The user is also able to navigate through the device storage to access a specific file. Playlist and history ' +
        'record features are also included local storage.',
      frameWorksLogo: [
        'assets/logos/flutter.png',
      ],
      videoUrl: "/assets/gifs/media.mp4",
      isLeft: true
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
