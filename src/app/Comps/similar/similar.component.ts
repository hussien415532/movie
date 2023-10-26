import { Component, HostListener, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-similar',
  templateUrl: './similar.component.html',
  styleUrls: ['./similar.component.scss'],
})
export class SimilarComponent implements OnInit {
  similar: any[] = [];
  movieId: any;
  constructor(private simi: ApiService, private actRou: ActivatedRoute,private router:Router) {}
  ngOnInit(): void {
    this.movieId = this.actRou.snapshot.params['id'];
    this.simi.getSimilarMovies(this.movieId).subscribe({
      next: (data: any) => {
        this.similar = data.results;
        
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
  movieDetails(id:any) {
    this.router.navigate(['movie',id]);
    setTimeout(()=>{
      location.reload()
    },0)
  }

}
