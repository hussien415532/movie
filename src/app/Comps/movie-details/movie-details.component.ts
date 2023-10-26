import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';
import { TrailerComponent } from '../trailer/trailer.component';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  movie: any;
  movie_id: any;
  genres: any[] = [];
  youtubeLink: any;
  constructor(
    private details: ApiService,
    private ar: ActivatedRoute,
    private dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.movie_id = this.ar.snapshot.params['id'];
    this.details.getMoviesDetails(this.movie_id).subscribe({
      next: (data: any) => {
        this.movie = data;
        this.genres = data.genres;
      },
    });
    this.getTrailerLink();
  }
  trailerDialog() {
    this.dialog.open(TrailerComponent, {
      data:{key:this.youtubeLink},
      width: '90%',
      height: '75%',
    });
  }
  getTrailerLink() {
    this.details.getMovieTrailer(this.movie_id).subscribe({
      next: (data: any) => {
        this.youtubeLink = data.results[data.results.length-1]?.key;

      },
    });
  }
}

