import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Skydiver } from 'src/app/interfaces/skydiver';
import { NotificationServiceService } from 'src/app/services/notification-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {
notfall: string = 'assets/icons/notfall.png';
id?: number;
jumper?: Skydiver[];

  constructor(private route: ActivatedRoute,
    private notificationService: NotificationServiceService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.loadUser();
  }

  loadUser(){
    this.jumper = [
      {id: 1, 
        vorname: 'Hans', 
        nachname: 'Muster', 
        geburtsdatum: new Date(), 
        gewicht: 80, 
        adresse: 'Musterstrasse 1', 
        plz: 1234, 
        ortschaft: 'Musterort', 
        land: 'Schweiz', 
        telefonnummer: 123456789, 
        email: 'max.muster@muster.com', 
        boncardId: 9775, 
        lizenznr: 'CH-5419', 
        anzJumps: 123, 
        anzJumpsLetzte12Monate: 12, 
        schuelerstatus: true, 
        mitgliedstatus: true, 
        trainingsausweis: true,
        notfallkontakt: 'Max Muster', 
        notfalladresse: 'Musterstrasse 1', 
        notfallPLZ: 1234, 
        notfallort: 'Musterort', 
        notfallLand: 'Schweiz', 
        notfalltelefon: 123456789, 
        notfalltelefon2: 123456789, 
        registration: new Date(), 
        letzteAktualisierung: new Date(2022, 11, 10), 
        type: 'Schüler', 
        status: 'Aktiv', 
        notfallblatt: ''},
    ];

  }

  checkRegistration(){
    if(this.jumper![0].registration.getFullYear() > new Date().getFullYear() - 1){
      return true;
    } else {
      return false;
    }
  }

  isDateOverdue(date: Date): boolean {
    const currentDate = new Date();
    const twelveMonthsAgo = new Date();
    twelveMonthsAgo.setFullYear(currentDate.getFullYear() - 1);

    return date < twelveMonthsAgo;
  }

  getBoncardURL(id: number){
    return "https://swally.ch/SaldoView?crd=629912001096" + id;

  }

  copy(value: number){
    navigator.clipboard.writeText(String(value));
  }

  deleteJumper(){
    this.notificationService.notificationInfoShort("Not Implemented yet");
  }

}
