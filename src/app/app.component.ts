import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Snapface • Application de partage de photos';
  myFaceSnap!: FaceSnap;

  ngOnInit(): void {
    this.myFaceSnap = new FaceSnap(
      'Ted',
      'Ted est une peluche plutôt funky!!',
      'https://media.senscritique.com/media/000006424972/1200/Ted.jpg',
      new Date(),
      0
    );
  }
}
