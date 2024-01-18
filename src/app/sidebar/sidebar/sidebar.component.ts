import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {
handbuch: string = 'assets/icons/frage.png'
calender: string = 'assets/icons/calendar.png'
dolar: string = 'assets/icons/dollar-symbol.png'
time = new Date();

  constructor() { }

  ngOnInit(): void {
    this.updateClock();

    // Aktualisiere die Uhr jede Sekunde (1000 Millisekunden)
    setInterval(() => {
      this.updateClock();
    }, 1000);
  }

  updateClock() {
    this.time = new Date();
}



}
