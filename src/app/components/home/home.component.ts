import { Component, OnInit } from '@angular/core';
import { Artwork } from 'src/app/models/artwork.model';
import { ArtworkService } from 'src/app/services/artwork.service';
import { SlideshowService } from 'src/app/services/slideshow.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  artworks!: Artwork[];

  constructor(private artworkService: ArtworkService, private slideshowService: SlideshowService){

  }

  ngOnInit(){
    this.artworks = this.artworkService.artworks;
    this.slideshowService.toggleSlideshowState(false);
  }

  onClick(state: boolean){
    this.slideshowService.toggleSlideshowState(state);
  }
}
