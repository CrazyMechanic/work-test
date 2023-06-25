import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-packed',
  templateUrl: './packed.component.html',
  styleUrls: ['./packed.component.scss'],
})
export class PackedComponent {

  private uid: string | null;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.uid = this.activatedRoute.snapshot.paramMap.get('uid');
  }

  back() {
    this.router.navigate(['../', this.uid], {queryParamsHandling: 'merge'});
  }

  next() {
    this.router.navigate([this.uid, 'cell-size']);
  }
}
