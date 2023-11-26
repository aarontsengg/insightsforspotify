import { Component } from '@angular/core';
import { SpotifyService } from '../spotify.service';


@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent {
  constructor(private spotUtil:SpotifyService){} 
  topTracks4Weeks: any[] = [];
  topTracks6Months: any[] = [];
  topTracks: any[] = [];
  ngOnInit(): void {
    this.getTopTracks4Weeks();
    this.getTopTracks6Months();
    this.getTopTracks();
  }

  getTopTracks4Weeks() {
    // Check if a valid Spotify token is available
    if (this.spotUtil.token) {
      this.spotUtil.getTopTracks4Weeks().subscribe({
        next: (data: any) => {
          this.topTracks4Weeks = data.items; // Assuming the tracks are in the 'items' property
          console.log(this.topTracks4Weeks);
        },
        error: (error) => {
          console.error('Error fetching top tracks:', error);
        },
      });
    } else {
      console.error('No Spotify token available.');
    }
  }

  getTopTracks6Months() {
    // Check if a valid Spotify token is available
    if (this.spotUtil.token) {
      this.spotUtil.getTopTracks6Months().subscribe({
        next: (data: any) => {
          this.topTracks6Months = data.items; // Assuming the tracks are in the 'items' property
          console.log(this.topTracks6Months);
        },
        error: (error) => {
          console.error('Error fetching top tracks:', error);
        },
      });
    } else {
      console.error('No Spotify token available.');
    }
  }

  getTopTracks() {
    // Check if a valid Spotify token is available
    if (this.spotUtil.token) {
      this.spotUtil.getTopTracks().subscribe({
        next: (data: any) => {
          this.topTracks = data.items; // Assuming the tracks are in the 'items' property
          console.log(this.topTracks);
        },
        error: (error) => {
          console.error('Error fetching top tracks:', error);
        },
      });
    } else {
      console.error('No Spotify token available.');
    }
  }
}
