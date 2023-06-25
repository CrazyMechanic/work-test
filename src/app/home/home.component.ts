import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  private uid: string | null;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.uid = this.activatedRoute.snapshot.paramMap.get('uid');
  }

  openPackedComponent() {
    this.router.navigate(['packed'], {relativeTo: this.activatedRoute});
  }
}
