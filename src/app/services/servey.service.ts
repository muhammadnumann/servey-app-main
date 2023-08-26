import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServeyService {
  constructor(private https: HttpClient) {}
  contactApi(body: any) {
    return this.https.post<any>(
      `${environment.apiURL}/saveContactQuoteServey`,
      body
    );
  }
  qouteApi(body: any) {
    return this.https.post<any>(
      `${environment.apiURL}/saveAutomatedQuoteServey`,
      body
    );
  }
}
