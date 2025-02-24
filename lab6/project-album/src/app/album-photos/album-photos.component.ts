import { Component, inject } from '@angular/core';
import { AlbumsService } from '../albums.service';
import { Photo } from '../photo';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album-photos',
  imports: [RouterLink, CommonModule],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent {
  albumsService: AlbumsService = inject(AlbumsService);
  photoList: Photo[] = [];
  constructor() {
    // this.photoList = this.albumsService.getPhotos();
    // console.log(this.photoList)
  }
 
 }
