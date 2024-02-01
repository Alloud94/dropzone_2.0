import { Component, OnInit } from '@angular/core';
import { Skydiver } from 'src/app/interfaces/skydiver';
import { NotificationServiceService } from 'src/app/services/notification-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skydiver',
  templateUrl: './skydiver.component.html',
  styleUrls: ['./skydiver.component.sass']
})
export class SkydiverComponent implements OnInit {
  jumper?: Skydiver[];
  filteredJumper?: Skydiver[];
  searchTerm: string = '';


  constructor(private notificationService: NotificationServiceService,
    private router: Router) { }

  ngOnInit(): void {

    this.jumper = [
      {
        id: 1,
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
        letzteAktualisierung: new Date(),
        type: 'skydiver',
        status: 'Aktiv',
        notfallblatt: ''
      },
      {
        id: 1,
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
        letzteAktualisierung: new Date(),
        type: 'skydiver',
        status: 'Aktiv',
        notfallblatt: ''
      },
      {
        id: 1,
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
        letzteAktualisierung: new Date(),
        type: 'skydiver',
        status: 'Aktiv',
        notfallblatt: ''
      },

    ];

    this.filteredJumper = this.jumper;

  }

  openUser(id: number) {
    this.router.navigate(['/user', id]);
  }

  // Filter
  filterJumper(typ: string) {
    if (typ === 'alle') {
      this.filteredJumper = this.jumper;
    } else {
      this.filteredJumper = this.jumper?.filter(jumper => jumper.type === typ) || [];
    }
  }

  searchSkydiver(): void {
    const filteredJumper = this.jumper!.filter(jumper =>
      jumper.vorname.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      jumper.nachname.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      jumper.type.toLowerCase().includes(this.searchTerm.toLowerCase()));

    this.filteredJumper = filteredJumper;
  }

  filterJumperCount(typ: string) {
    return this.jumper?.filter(jumper => jumper.type === typ).length;
  }

  checkStatus(id: number) {

    const checkJumper = this.jumper?.find(jumper => jumper.id === id);

    if (checkJumper?.schuelerstatus == true && checkJumper?.trainingsausweis == true) {
      return "Schülerstatus, Trainingsausweis";
    } else if (checkJumper?.schuelerstatus == true && checkJumper?.trainingsausweis == false) {
      return "Schülerstatus, kein Trainingsausweis";
    } else if (checkJumper?.lizenznr != undefined) {
      return "Lizenziert";
    } else {
      return "Kein Status";
    }


  }
}
