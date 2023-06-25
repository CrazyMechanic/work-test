import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';
import { AppComponent } from '../app.component';
import { catchError, tap } from 'rxjs';

@Component({
  selector: 'app-cell-size',
  templateUrl: './cell-size.component.html',
  styleUrls: ['./cell-size.component.scss'],
})
export class CellSizeComponent implements OnInit {
  cellTypes: any = [];

  constructor(private router: Router, private httpService: HttpService, private appComponent: AppComponent) {
  }

  ngOnInit() {
    this.httpService.getStatuses().pipe(
      tap((res: any) => {
        this.cellTypes = res;
        this.arr();
      }),
      catchError(error => {
        console.error('Error getting info:', error);
        return [];
      }),
    ).subscribe();
  }

  arr() {
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
      console.log(pack.attributes.style.textContent);
      btn.disabled = false;
    } else {
      btn.disabled = true;
    }
  }

  back() {
    this.router.navigate(['/packed']);
  }

  submit() {
    this.router.navigate(['/home']);
  }
}
