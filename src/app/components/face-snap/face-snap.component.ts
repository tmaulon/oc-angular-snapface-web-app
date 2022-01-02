import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;

  constructor() {}

  ngOnInit(): void {
    this.title = 'Ted';
    this.description = 'Ted est une peluche plutôt funky!!';
    this.createdDate = new Date();
    this.snaps = 6;
    this.imageUrl =
      'https://media.senscritique.com/media/000006424972/1200/Ted.jpg';
  }
}
