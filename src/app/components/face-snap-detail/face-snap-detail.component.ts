import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from 'src/app/models/face-snap/face-snap.model';
import { FaceSnapsService } from 'src/app/services/face-snaps/face-snaps.service';
import { FaceSnapButtonTextType } from '../face-snap/face-snap.component';

@Component({
  selector: 'app-face-snap-detail',
  templateUrl: './face-snap-detail.component.html',
  styleUrls: ['./face-snap-detail.component.scss'],
})
export class FaceSnapDetailComponent implements OnInit {
  faceSnap!: FaceSnap;
  buttonText!: FaceSnapButtonTextType;

  constructor(
    private faceSnapsService: FaceSnapsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.buttonText = 'Oh Snap!';
    const snapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(snapId);
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
