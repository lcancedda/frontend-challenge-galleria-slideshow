import { Component, Input } from '@angular/core';
import { Artwork } from 'src/app/models/artwork.model';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss']
})
export class ThumbnailComponent {
  @Input()
  artwork!: Artwork;
}
