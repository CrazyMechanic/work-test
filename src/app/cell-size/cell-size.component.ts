import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../services/http.service';
import { catchError, tap } from 'rxjs';

@Component({
  selector: 'app-cell-size',
  templateUrl: './cell-size.component.html',
  styleUrls: ['./cell-size.component.scss'],
})
export class CellSizeComponent implements OnInit {

  cellTypes: any = [];
  private uid: string | null;

  constructor(private router: Router, private httpService: HttpService, private activatedRoute: ActivatedRoute) {
    this.uid = this.activatedRoute.snapshot.paramMap.get('uid');
  }

  ngOnInit() {
    this.httpService.getStatuses().pipe(
      tap((res: any) => {
        this.cellTypes = res;
        this.boxStyle();
      }),
      catchError(error => {
        console.error('Error getting info:', error);
        return [];
      }),
    ).subscribe();
  }

  boxStyle() {
    this.cellTypes.forEach((item: any) => {
      const el = document.getElementById(item.type);
      if (item.has_empty) el?.setAttribute('style', 'border-color: green');
      if (!item.has_empty) el?.setAttribute('style', 'border-color: red');
    });
  }

  click($event: any) {
    const target = $event.target;
    const pack = target.closest('.package');
    const btn = document.getElementById('submit') as HTMLButtonElement;

    if (pack && pack.attributes.style.textContent === 'border-color: green') {
      btn.disabled = false;
      btn.setAttribute('style', 'background: #032EDD');
    } else {
      btn.disabled = true;
      btn.setAttribute('style', 'background: rgba(3, 46, 221, 0.5)');
    }
  }

  back() {
    this.router.navigate([this.uid, 'packed']);
  }

  submit() {
    this.router.navigate([this.uid]);
  }
}
