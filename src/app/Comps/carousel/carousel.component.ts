import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {

  trending: any[] = [];
  constructor(private carousel: ApiService, private route:Router) {}
  ngOnInit(): void {
    this.carousel.getTrending().subscribe({
      next: (data: any) => {
        this.trending = data.results;
      }, error: (error: any) => {
        console.error('Error fetching trending data:', error);
      }
    });
  }
  
}
