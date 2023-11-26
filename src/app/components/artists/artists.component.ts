import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
  constructor(private spotUtil:SpotifyService){} 
  topArtists4Weeks: any[] = [];
  topArtists6Months: any[] = [];
  topArtists: any[] = [];
  ngOnInit(): void {
    this.getTopArtists4Weeks();
    this.getTopArtists6Months();
    this.getTopArtists();
  }

  getTopArtists4Weeks() {
    if (this.spotUtil.token) {
      this.spotUtil.getTopArtists4Weeks().subscribe({
        next: (data: any) => {
          this.topArtists4Weeks = data.items; // Assuming the artists are in the 'items' property
          console.log(this.topArtists4Weeks);
        },
        error: (error) => {
          console.error('Error fetching top artists:', error);
        },
      });
    } else {
      console.error('No Spotify token available.');
    }
  }

  getTopArtists6Months() {
    if (this.spotUtil.token) {
      this.spotUtil.getTopArtists6Months().subscribe({
        next: (data: any) => {
          this.topArtists6Months = data.items; // Assuming the artists are in the 'items' property
          console.log(this.topArtists6Months);
        },
        error: (error) => {
          console.error('Error fetching top artists:', error);
        },
      });
    } else {
      console.error('No Spotify token available.');
    }
  }

  getTopArtists() {
    if (this.spotUtil.token) {
      this.spotUtil.getTopArtists().subscribe({
        next: (data: any) => {
          this.topArtists = data.items; // Assuming the artists are in the 'items' property
          console.log(this.topArtists);
        },
        error: (error) => {
          console.error('Error fetching top artists:', error);
        },
      });
    } else {
      console.error('No Spotify token available.');
    }
  }
}

