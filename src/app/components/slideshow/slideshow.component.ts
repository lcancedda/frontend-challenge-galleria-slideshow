import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Artwork } from 'src/app/models/artwork.model';
import { ArtworkService } from 'src/app/services/artwork.service';
import { SlideshowService } from 'src/app/services/slideshow.service';
import { PaintModalComponent } from '../paint-modal/paint-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  artworkIndex!: number;
  artwork!: Artwork;
  progress!: number;
  constructor(private route: ActivatedRoute,
    private artworkService: ArtworkService,
    private slideshowService: SlideshowService,
    private router: Router,
    public dialog: MatDialog) { }

  ngOnInit() {

    this.route.params.subscribe((param) => {
      this.artworkIndex = param['id'];
      this.artwork = this.artworkService.getArtworkByIndex(this.artworkIndex);
      this.progress = this.calcProgressWithIndex(this.artworkIndex);
      this.slideshowService.setSlideshowIndex(this.artworkIndex);
    })



    this.slideshowService.toggleSlideshowState(true)
  }

  onPrevious() {
    this.artworkIndex--;
    this.router.navigateByUrl(`slide/${this.artworkIndex}`);
    console.log(this.artworkIndex);
  }

  onNext() {
    this.artworkIndex++;
    this.router.navigateByUrl(`slide/${this.artworkIndex}`);
  }

  calcProgressWithIndex(index: number): number {
    return (100 * index / 14);
  }

  openModal() {
    this.dialog.open(PaintModalComponent, {
      data: {
        picture: this.artwork.images.gallery
      },
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '200ms',
      backdropClass: 'backdropBackground'
    });
  }
}
