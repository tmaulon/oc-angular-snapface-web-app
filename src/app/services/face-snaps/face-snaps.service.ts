import { Injectable } from '@angular/core';
import { FaceSnap } from './../../models/face-snap/face-snap.model';

type SnapType = 'snap' | 'unsnap';

@Injectable({
  providedIn: 'root',
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    new FaceSnap(
      1,
      'Ted',
      'Ted est une peluche plutôt funky!!',
      'https://media.senscritique.com/media/000006424972/1200/Ted.jpg',
      new Date(),
      250,
      'Paris'
    ),
    new FaceSnap(
      2,
      'Archibald',
      'Mon meilleur ami depuis tout petit !',

      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      50
    ),
    new FaceSnap(
      3,
      'Three Rock Mountain',
      'Un endroit magnifique pour les randonnées.',

      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
      new Date(),
      0
    ),
    new FaceSnap(
      4,
      'Un bon repas',
      "Mmmh que c'est bon !",
      'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      new Date(),
      150,
      'Bordeaux'
    ),
  ];

  constructor() {}

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(
      (faceSnap) => faceSnap.id === faceSnapId
    );
    if (!faceSnap) {
      throw new Error('FaceSnap non trouvé!');
    } else {
      return faceSnap;
    }
  }

  snapFaceSnapById(faceSnapId: number, snapType: SnapType): void {
    const snappedFaceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? snappedFaceSnap.snaps++ : snappedFaceSnap.snaps--;
  }
}
