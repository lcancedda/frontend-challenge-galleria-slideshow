import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SlideshowService } from 'src/app/services/slideshow.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  slideshowOn!: boolean;
  slideshowIndex!: number;

  constructor(
    private slideshowService: SlideshowService,
    private router: Router
  ) { }

  ngOnInit() {
    this.slideshowService.slideshowState$.subscribe((value) => {
      this.slideshowOn = value;
    });

    this.slideshowService.slideshowIndex$.subscribe((value) => {
      this.slideshowIndex = value;
    });
  }

  onClickSlideshow(state: boolean) {
    this.slideshowService.toggleSlideshowState(state);
    if(state == true){
      this.router.navigateByUrl(`slide/${this.slideshowIndex}`);
    } else {
      this.router.navigateByUrl(``);
    }
    
  }
}
