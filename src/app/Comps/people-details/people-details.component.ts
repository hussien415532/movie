import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.scss'],
})
export class PeopleDetailsComponent implements OnInit {
  details: any;
  personId: any;
  movies: any[] = [];
  constructor(private de: ApiService, private actRou: ActivatedRoute) {}
  ngOnInit(): void {
    this.personId = this.actRou.snapshot.params['id'];
    this.de.getPeopleDetails(this.personId).subscribe({
      next: (data) => {
        this.details = data;

      },
    });
    this.de.getPersonMovies(this.personId).subscribe({
      next: (movie: any) => {
        this.movies = movie.cast;
      
      },
    });
  }
  slidesPerView: number = 7;

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
