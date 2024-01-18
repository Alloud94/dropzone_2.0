import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.sass']
})
export class PageNotFoundComponent implements OnInit {

  isLoading: boolean = false;
  logo: string = 'assets/icons/SDO_logo.png';

  constructor() { }

  ngOnInit(): void {
  }

}
