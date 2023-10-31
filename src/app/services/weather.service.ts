import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getByCity(city_id: string, history: boolean = false): Observable<any> {
    return this.httpClient.get<any>(environment.baseUrl + 'api/v1/Weather/' + city_id, {
      params: new HttpParams().set('history', String(history))
    });
  }
}
