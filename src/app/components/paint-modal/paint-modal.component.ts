import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-paint-modal',
  templateUrl: './paint-modal.component.html',
  styleUrls: ['./paint-modal.component.scss']
})
export class PaintModalComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

}
