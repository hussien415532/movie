import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-trailer',
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.scss'],
})
export class TrailerComponent implements OnInit {
  videoUrl!: SafeResourceUrl;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private sanitizer: DomSanitizer
  ) {}
  ngOnInit(): void {
    const vidId = this.data.key;
    const url = `https://www.youtube.com/embed/${vidId}`;
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    
  }
}
