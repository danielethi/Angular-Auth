import { Component, OnInit } from '@angular/core';
import { EventService } from './event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
specialService=[]
  constructor(private _eventService: EventService) {}

  ngOnInit() {
this._eventService.getSpecialEvent()
  }

}
