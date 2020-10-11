import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class dataService {
    baseURL = '';
    constructor(private http: HttpClient) {
        this.baseURL = 'http://localhost:8002/'
    }

    nftData() {
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        return this.http.get(this.baseURL + 'nft/nftData', { headers: headers });
    }
}
