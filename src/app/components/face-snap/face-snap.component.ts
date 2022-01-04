import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from './../../models/face-snap/face-snap.model';

export type FaceSnapButtonTextType = 'Oh Snap!' | 'Oops, unSnap!';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  public buttonText!: FaceSnapButtonTextType;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.buttonText = 'Oh Snap!';
  }
  onViewSnapDetail() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
