import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TracksComponent } from './components/tracks/tracks.component';
import { ArtistsComponent } from './components/artists/artists.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'tracks',
    component: TracksComponent,
  },
  {
    path: 'artists',
    component: ArtistsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
