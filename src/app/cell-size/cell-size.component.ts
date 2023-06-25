import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cell-size',
  templateUrl: './cell-size.component.html',
  styleUrls: ['./cell-size.component.scss'],
})
export class CellSizeComponent {

  constructor(private router: Router) {
  }

  back() {
    this.router.navigate(['/packed']);
  }

  submit() {
    // this.router.navigate(['/cell-size']);
  }
}
