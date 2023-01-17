import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private _eventUrl = 'http://localhost:2050/users/events';
  private _specialEventUrl = 'http://localhost:2050/users/specialevent';

  constructor(private http: HttpClient) {}

  getEvent = () => {
    return this.http.get(this._eventUrl);
  };
  getSpecialEvent = () => {
    return this.http.get(this._specialEventUrl);
  };

}
