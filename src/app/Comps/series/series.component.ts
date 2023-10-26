import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss'],
})
export class SeriesComponent implements OnInit {
  page: any;
  totalPages: any;
  tv: any[] = [];
  constructor(
    private series: ApiService,
    private actRou: ActivatedRoute,
    private rou: Router
  ) {}
  ngOnInit(): void {
    this.page=this.actRou.snapshot.queryParams['page']
    this.getSeries(this.page);
  }
  getSeries(p: any) {
    this.series.getPopSeries(p).subscribe({
      next: (data: any) => {
        this.tv = data.results;
        this.page = data.page;
        this.totalPages = data.total_pages;
      },
    });
  }
  nextpage() {
    this.rou.navigate(['/series'], { queryParams: { page: this.page + 1 } });
    if (this.page >= 1) {
      this.page++;
      this.getSeries(this.page);
    }
  }
  prevpage() {
    this.rou.navigate(['/series'], { queryParams: { page: this.page - 1 } });
    if (this.page < this.totalPages) {
      this.page--;
      this.getSeries(this.page);
    }
  }
}
