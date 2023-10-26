import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  selectedLanguage :any;
  constructor(private lang: ApiService) {}
  ngOnInit(): void {
    this.selectedLanguage = localStorage.getItem('lang') || 'en-US';
    this.lang.changeLang(this.selectedLanguage)
  }
  changeLang() {
    localStorage.setItem('lang', this.selectedLanguage);
    location.reload();
  }
}
