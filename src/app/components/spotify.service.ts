import { Observable, tap } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  loading: boolean | undefined;
  token: any='123';
  rtnData: any;
  baseUrl: any;

  constructor(private http: HttpClient) { }

 getRecentlyPlayedTracks(): Observable<any> {
   const url = `https://api.spotify.com/v1/me/player/recently-played`;
   const headers = new HttpHeaders({
     Authorization: `Bearer ${this.token}`,
   });
   return this.http.get(url, { headers });
 }

 getTopTracks4Weeks(): Observable<any> {
   const url = `https://api.spotify.com/v1/me/top/tracks`;
   const headers = new HttpHeaders({
     Authorization: `Bearer ${this.token}`,
   });

   // Set the time_range parameter to "short_term" for the last 4 weeks
   const params = new HttpParams().set('time_range', 'short_term');

   return this.http.get(url, { headers, params });
 }

 getTopTracks6Months(): Observable<any> {
   const url = `https://api.spotify.com/v1/me/top/tracks`;
   const headers = new HttpHeaders({
     Authorization: `Bearer ${this.token}`,
   });

   // Set the time_range parameter to "short_term" for the last 4 weeks
   const params = new HttpParams().set('time_range', 'medium_term');

   return this.http.get(url, { headers, params });
 }

 getTopTracks(): Observable<any> {
   const url = `https://api.spotify.com/v1/me/top/tracks`;
   const headers = new HttpHeaders({
     Authorization: `Bearer ${this.token}`,
   });

   // Set the time_range parameter to "short_term" for the last 4 weeks
   const params = new HttpParams().set('time_range', 'long_term');

   return this.http.get(url, { headers, params });
 }

 getTopArtists4Weeks(): Observable<any> {
   const url = `https://api.spotify.com/v1/me/top/artists`;
   const headers = new HttpHeaders({
     Authorization: `Bearer ${this.token}`,
   });

   // Set the time_range parameter to "short_term" for the last 4 weeks
   const params = new HttpParams().set('time_range', 'short_term');

   return this.http.get(url, { headers, params });
 }

 getTopArtists6Months(): Observable<any> {
   const url = `https://api.spotify.com/v1/me/top/artists`;
   const headers = new HttpHeaders({
     Authorization: `Bearer ${this.token}`,
   });

   // Set the time_range parameter to "short_term" for the last 4 weeks
   const params = new HttpParams().set('time_range', 'medium_term');

   return this.http.get(url, { headers, params });
 }

 getTopArtists(): Observable<any> {
   const url = `https://api.spotify.com/v1/me/top/artists`;
   const headers = new HttpHeaders({
     Authorization: `Bearer ${this.token}`,
   });

   // Set the time_range parameter to "short_term" for the last 4 weeks
   const params = new HttpParams().set('time_range', 'long_term');

   return this.http.get(url, { headers, params });
 }
}
