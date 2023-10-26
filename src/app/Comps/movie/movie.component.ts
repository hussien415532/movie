import {
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';
import { PaginationInstance } from 'ngx-pagination';
import { Observable, of, delay } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
interface IServerResponse {
  items: string[];
  total: number;
}
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  popList: any[] = [];
  page: any;
  totalPages: any;


  constructor(private popular: ApiService,private rout:Router,private actRout:ActivatedRoute){}

  ngOnInit(): void {
    this.page = this.actRout.snapshot.queryParams['page']
    this.getPop(this.page);

  }
  getPop(page: any) {
    this.popular.getPopMovies(page).subscribe({
      next: (pop: any) => {
        this.popList = pop.results;
        this.page = pop.page;
        this.totalPages = pop.total_pages;

      },
    });
  }

  nextPage() {
    this.rout.navigate(['/movies'],{queryParams:{page:this.page+1}})
    if (this.page < this.totalPages) {
      this.page++;
      this.getPop(this.page);

    }
  }
  prevPage() {
    this.rout.navigate(['/movies'],{queryParams:{page:this.page-1}})
    if (this.page > 1) {
      this.page--;
      this.getPop(this.page);

    }
  }
}
