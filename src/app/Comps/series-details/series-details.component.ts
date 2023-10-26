import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';
import { TrailerComponent } from '../trailer/trailer.component';

@Component({
  selector: 'app-series-details',
  templateUrl: './series-details.component.html',
  styleUrls: ['./series-details.component.scss'],
})
export class SeriesDetailsComponent implements OnInit {

  tv: any;
  tv_id: any;
  genres: any;
  cast: any;
  youtubeLink: any;
  constructor(private details: ApiService, private actRou: ActivatedRoute,private dialog:MatDialog) {}
  ngOnInit(): void {
    this.tv_id = this.actRou.snapshot.params['id'];
    this.details.getSeriesDetails(this.tv_id).subscribe({
      next: (data: any) => {
        this.tv = data;
   
      },
    });
    this.details.getTvCast(this.tv_id).subscribe({
      next: (de: any) => {
        this.cast = de.cast;

      },
    });
    this.getLink()
  }
  trailerDialog() {
    this.dialog.open(TrailerComponent, {
      data:{key:this.youtubeLink},
      width: '90%',
      height: '75%',
    });
  }
  getLink(){
    this.details.getTvTrailer(this.tv_id).subscribe({
      next:(data:any)=>{
        this.youtubeLink=data.results[data.results.length-1]?.key
      }
    })
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
