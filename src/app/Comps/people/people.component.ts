import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  peoples:any[]=[]
  constructor(private person:ApiService){}
  ngOnInit(): void {
    this.person.getPeople().subscribe({
      next:(data:any)=>{
        this.peoples=data.results;
        console.log(this.peoples)
      }
    })
  }
}
