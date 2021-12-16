import { Component } from '@angular/core';
// import { appendFile } from 'fs';
import  houseData from './housedata.json';

interface Info{  
  PropertyId: Number;
  GroupLogoUrl:string;
  BedsString: String;
  Price: Number;
  SizeStringMeters: Number;
  DisplayAddress: string;
  PropertyType: String;
  BathString: String;
  BerRating: Number;
  MainPhoto: String;
  Photos: String;
  NoFound: String;  
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'Myhome-app';
  name = 'Angular';  

  searchResults = houseData.SearchResults;

  constructor() { }

  ngOnInit(): void {

  }

  
}
