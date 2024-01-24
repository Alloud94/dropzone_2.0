import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Skydiver } from 'src/app/interfaces/skydiver';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {
notfall: string = 'assets/icons/notfall.png';
id?: number;
jumper?: Skydiver[];

  constructor(private route: ActivatedRoute) { }

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
        boncardId: 123456789, 
        lizenznr: 0, 
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
        letzteAktualisierung: new Date(2023, 11, 10), 
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

  copy(value: number){
    navigator.clipboard.writeText(String(value));
  }

}
