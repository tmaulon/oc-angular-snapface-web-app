import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from './../../models/face-snap/face-snap.model';
import { FaceSnapsService } from './../../services/face-snaps/face-snaps.service';

type FaceSnapButtonTextType = 'Oh Snap!' | 'Oops, unSnap!';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  public buttonText!: FaceSnapButtonTextType;

  constructor(private faceSnapsService: FaceSnapsService) {}

  ngOnInit(): void {
    this.buttonText = 'Oh Snap!';
  }

  onSnap() {
    if (this.buttonText === 'Oh Snap!') {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = 'Oops, unSnap!';
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = 'Oh Snap!';
    }
  }
}
