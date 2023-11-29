import { Component, OnInit,OnChanges,AfterContentInit,AfterContentChecked,AfterViewInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit,OnChanges,AfterContentInit,AfterViewInit{

  constructor() { }

  ngOnInit(): void {
    console.log('movie details component initialized');
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContent")      
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
  }
  ngOnChanges(){
    console.log("ngOnChanges")
  }

}
