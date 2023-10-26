import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.scss'],
})
export class CastComponent implements OnInit {
  cast: any[] = [];
  movieId: any;
  slidesPerView: number = 7;
  constructor(private credits: ApiService, private actRou: ActivatedRoute) {}
  ngOnInit(): void {
    this.movieId = this.actRou.snapshot.params['id'];
    this.credits.getCast(this.movieId).subscribe({
      next: (data: any) => {
        this.cast = data.cast
      },
    });
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.slidesPerView = this.getSlidesPerView();
  }

  getSlidesPerView() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 576) {
      return 2; // Adjust the number of slides per view for smaller screens
    } else if (screenWidth < 992) {
      return 4; // Adjust for medium-sized screens
    } else {
      return 7; // Default number of slides per view for larger screens
    }
  }
}
