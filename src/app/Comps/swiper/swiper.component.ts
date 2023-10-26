import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss'],
})
export class SwiperComponent {
  slidesPerView: number = 7;
  @Input("list") list: any;
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
