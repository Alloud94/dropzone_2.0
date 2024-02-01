import { Component, OnInit } from '@angular/core';
import { NotificationServiceService } from 'src/app/services/notification-service.service';
import { FormControl, FormGroup } from '@angular/forms';
import { JumperFinance } from 'src/app/interfaces/jumperFinance';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.sass']
})
export class DayComponent implements OnInit {
  jumperFinances?: JumperFinance[];

  dayAdminForm = new FormGroup({
    jumpDay: new FormControl(''),
    sdl: new FormControl(''),
    pilot: new FormControl(''),
    instr: new FormControl(''),
    studies: new FormControl(''),
    kommentar: new FormControl(''),
    flightMinutes: new FormControl(''),
  });

  constructor(private notificationService: NotificationServiceService) { }

  ngOnInit(): void {

    this.jumperFinances = [
      {
        id: 1,
        vorname: 'Hans',
        nachname: 'Muster',
        boncardId: 1234,
        totalJumps: 12,
        totalCosts: 150.50,

      }
    ]
  }

  downloadBoncardAuswertung() {
    this.notificationService.notificationInfoShort("Not implemented yet");
  }

  downloadTagesauswertung() {
    this.notificationService.notificationInfoShort("Not implemented yet");
  }

  sprungtagAbschliessen(){
    this.notificationService.notificationInfoShort("Not implemented yet");
  }

  deleteJumpDay() {
    this.notificationService.notificationInfoShort("Not implemented yet");
  }


}
