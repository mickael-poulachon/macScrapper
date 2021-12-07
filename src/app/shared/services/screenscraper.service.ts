import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ScreenscraperService {
  ressourceUrl = 'https://www.screenscraper.fr/api2/';
  devId = 'istrion';
  devPassword = 'MgEZK0Vbi7Q';

  constructor(private http: HttpClient) { }

   checkUserAccount(user: any) : Promise<any> {
    let url = `${this.ressourceUrl}ssuserInfos.php?devid=${this.devId}&devpassword=${this.devPassword}&softname=mac-scrapper&output=json&ssid=${user.ssid}&sspassword=${user.password}`;
    return this.http.get(url, {observe : 'body'}).toPromise();
  }
}
