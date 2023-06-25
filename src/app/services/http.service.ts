import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HttpService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
  };
  url: string = 'https://dev.hub.omnic.solutions';
  device_uid: string = '34670a76-6022-4df5-ac1d-68f88589c904';

  // Basic device information.GET
  // Response data: use data.device field to display device number
  basicUrl: string = `${this.url}/api/2.0.0/public/device/${this.device_uid}`;

  // Information about available cells.GET
  // Response data: use field data.cell_types - size array (use params.width and params.height for analysis)
  infoUrl: string = `${this.url}/api/2.0.0/public/orders/device/${this.device_uid}/cells/statuses/?type=5&width=10&height=5`;

  constructor(private http: HttpClient, private messageService: MessageService) {
  }

  getInfo(): Observable<any> {
    return this.http.get(`${this.basicUrl}`, this.httpOptions)
      .pipe(
        map(res => {
          console.log(res);
        }),
      )
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<any[]>('getHeroes', [])),
      );

  }

  getStatuses(): Observable<any> {
    return this.http.get(`${this.infoUrl}`, this.httpOptions)
      .pipe(
        map(res => {
          console.log(res);
        }),
      )
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<any[]>('getHeroes', [])),
      );

  }

  private log(message: string) {
    this.messageService.add(`HttpService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
