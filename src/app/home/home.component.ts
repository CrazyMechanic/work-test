import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private httpService: HttpService, public messageService: MessageService) {
  }

  ngOnInit() {
    this.httpService.getInfo().subscribe();
    this.httpService.getStatuses().subscribe();
  }

  openPackedComponent() {
    this.router.navigate(['/packed']);
    console.log();
  }


}
