import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-packed',
  templateUrl: './packed.component.html',
  styleUrls: ['./packed.component.scss'],
})
export class PackedComponent {

  constructor(private router: Router) {
  }

  back() {
    this.router.navigate(['/home']);
  }

  next() {
    this.router.navigate(['/cell-size']);
  }
}
