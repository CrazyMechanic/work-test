import { Component, OnInit } from '@angular/core';
import { HttpService } from './services/http.service';
import { MessageService } from './services/message.service';
import { catchError, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  obj: any = {};
  device: any = {};

  constructor(private httpService: HttpService, public messageService: MessageService) {
  }

  ngOnInit() {
    this.httpService.getInfo().pipe(
      tap((res: any) => {
        this.obj = res;
      }),
      catchError(error => {
        console.error('Error getting info:', error);
        return [];
      }),
    ).subscribe();
  }

  getDevice() {
    this.device = this.obj?.data?.device;
    return this.device;

  }

}
