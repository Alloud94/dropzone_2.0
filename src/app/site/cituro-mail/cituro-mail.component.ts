import { Component, OnInit } from '@angular/core';
import { Cituro } from 'src/app/interfaces/cituro';
import { CituroGuests } from 'src/app/interfaces/cituroGuests';
import { OpenShift } from 'src/app/interfaces/openShift';
import { NotificationServiceService } from 'src/app/services/notification-service.service';

@Component({
  selector: 'app-cituro-mail',
  templateUrl: './cituro-mail.component.html',
  styleUrls: ['./cituro-mail.component.sass']
})
export class CituroMailComponent implements OnInit {
  days?: Cituro[];
  guests?: CituroGuests[];
  openShifts: OpenShift[] = [];
  openShiftsThisMonth: OpenShift[] = [];
  openShiftsNextMonth: OpenShift[] = [];

  // Test Date
  heute = new Date();
  naechsterSamstag = new Date();
  naechsterSonntag = new Date();
  uebernaechstenSamstag = new Date();
  uebernaechstenSonntag = new Date();

  constructor() { }

  ngOnInit(): void {

    this.naechsterSamstag.setDate(this.heute.getDate() + (5 - this.heute.getDay() + 7) % 7 + 1);
    this.naechsterSonntag.setDate(this.heute.getDate() + (6 - this.heute.getDay()) % 7 + 1);
    this.uebernaechstenSamstag.setDate(this.heute.getDate() + (6 - this.heute.getDay() + 7) % 7 + 7);
    this.uebernaechstenSonntag.setDate(this.heute.getDate() + (6 - this.heute.getDay() + 7) % 7 + 8);
    
    this.days = [
      {
        id: 1,
        datum: this.naechsterSamstag,
        tag: this.getWochentag(this.naechsterSamstag),
        kommentar: "Test1",
        pilotVorname: "TestPilotVorname1",
        pilotNachname: "TestPilotNachname1",
        pilotKommentar: "TestPilotKommentar1",
        sdlVorname: "TestSDLVorname1",
        sdlNachname: "TestSDLNachname1",
        sdlKommentar: "TestSDLKommentar1",
        affVorname: "",
        affNachname: "TestAFFNachname1",
        affKommentar: "TestAFFKommentar1",
        instrVorname: "TestINSTRVorname1",
        instrNachname: "TestINSTNachname1",
        instrKommentar: "TestINSTKommentar1",
        videoVorname: "TestVideoVorname1",
        videoNachname: "TestVideoNachname1",
        videoKommentar: "TestVideoKommentar1"
      },
      {
        id: 2,
        datum: this.naechsterSonntag,
        tag: this.getWochentag(this.naechsterSonntag),
        kommentar: "Test2",
        pilotVorname: "TestPilotVorname2",
        pilotNachname: "TestPilotNachname2",
        pilotKommentar: "TestPilotKommentar2",
        sdlVorname: "TestSDLVorname2",
        sdlNachname: "TestSDLNachname2",
        sdlKommentar: "TestSDLKommentar2",
        affVorname: "TestAFFVorname2",
        affNachname: "TestAFFNachname2",
        affKommentar: "TestAFFKommentar2",
        instrVorname: "TestINSTRVorname2",
        instrNachname: "TestINSTNachname2",
        instrKommentar: "TestINSTKommentar2",
        videoVorname: "TestVideoVorname2",
        videoNachname: "TestVideoNachname2",
        videoKommentar: "TestVideoKommentar2"
      },
      {
        id: 3,
        datum: this.uebernaechstenSamstag,
        tag: this.getWochentag(this.uebernaechstenSamstag),
        kommentar: "Test3",
        pilotVorname: "TestPilotVorname3",
        pilotNachname: "TestPilotNachname3",
        pilotKommentar: "TestPilotKommentar3",
        sdlVorname: "TestSDLVorname3",
        sdlNachname: "TestSDLNachname3",
        sdlKommentar: "TestSDLKommentar3",
        affVorname: "TestAFFVorname3",
        affNachname: "TestAFFNachname3",
        affKommentar: "TestAFFKommentar3",
        instrVorname: "TestINSTRVorname3",
        instrNachname: "TestINSTNachname3",
        instrKommentar: "TestINSTKommentar3",
        videoVorname: "TestVideoVorname3",
        videoNachname: "TestVideoNachname3",
        videoKommentar: "TestVideoKommentar3"
      },
      {
        id: 4,
        datum: this.uebernaechstenSonntag,
        tag: this.getWochentag(this.uebernaechstenSonntag),
        kommentar: "Test3",
        pilotVorname: "TestPilotVorname3",
        pilotNachname: "TestPilotNachname3",
        pilotKommentar: "TestPilotKommentar3",
        sdlVorname: "TestSDLVorname3",
        sdlNachname: "TestSDLNachname3",
        sdlKommentar: "TestSDLKommentar3",
        affVorname: "TestAFFVorname3",
        affNachname: "TestAFFNachname3",
        affKommentar: "TestAFFKommentar3",
        instrVorname: "TestINSTRVorname3",
        instrNachname: "TestINSTNachname3",
        instrKommentar: "TestINSTKommentar3",
        videoVorname: "TestVideoVorname3",
        videoNachname: "TestVideoNachname3",
        videoKommentar: "TestVideoKommentar3"
      }


    ];

    this.guests = [
      {
        id: 1,
        datum: this.naechsterSamstag,
        uhrzeit: "13:00",
        kommentar: "Test1",
        springerVorname: "TestSpringerVorname1",
        springerNachname: "TestSpringerNachname1",
        sprungArt: 'Tandem'
      },
      {
        id: 2,
        datum: this.naechsterSamstag,
        uhrzeit: "13:00",
        kommentar: "Test2",
        springerVorname: "TestSpringerVorname2",
        springerNachname: "TestSpringerNachname2",
        sprungArt: 'Tandem'
      },
      {
        id: 3,
        datum: this.naechsterSamstag,
        uhrzeit: "16:00",
        kommentar: "Test3",
        springerVorname: "TestSpringerVorname3",
        springerNachname: "TestSpringerNachname3",
        sprungArt: 'Tandem'
      },
      {
        id: 1,
        datum: this.naechsterSonntag,
        uhrzeit: "09:00",
        kommentar: "Test1",
        springerVorname: "TestSpringerVorname1",
        springerNachname: "TestSpringerNachname1",
        sprungArt: 'Tandem'
      },
      {
        id: 2,
        datum: this.naechsterSonntag,
        uhrzeit: "09:00",
        kommentar: "Test2",
        springerVorname: "TestSpringerVorname2",
        springerNachname: "TestSpringerNachname2",
        sprungArt: 'Tandem'
      },
      {
        id: 3,
        datum: this.naechsterSonntag,
        uhrzeit: "16:00",
        kommentar: "Test3",
        springerVorname: "TestSpringerVorname3",
        springerNachname: "TestSpringerNachname3",
        sprungArt: 'Tandem'
      },
      {
        id: 3,
        datum: this.naechsterSonntag,
        uhrzeit: "16:00",
        kommentar: "Test3",
        springerVorname: "TestSpringerVorname3",
        springerNachname: "TestSpringerNachname3",
        sprungArt: 'AFF'
      },
      {
        id: 3,
        datum: this.naechsterSamstag,
        uhrzeit: "00:00",
        kommentar: "Test3",
        springerVorname: "TestSpringerVorname3",
        springerNachname: "TestSpringerNachname3",
        sprungArt: 'AFF'
      }
    ];

    this.openShiftsThisMonth = this.getOpenShifts(this.getThisMonthNumber());
    this.openShiftsNextMonth = this.getOpenShifts(this.getNextMonthNumber());


  }

  getWochentag(datum: Date): string {
    const wochentage = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
    const tagIndex = datum.getDay();
    return wochentage[tagIndex];
  }

  getThisMonth() {
    const months = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
    const month = this.heute.getMonth();
    return months[month];
  }

  getThisMonthNumber() {
    return this.heute.getMonth();
  }

  getNextMonthNumber() {
    return this.heute.getMonth() + 1;
  }

  getNextMonth() {
    const months = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
    if (this.heute.getMonth() <= 12) {
      const month = this.heute.getMonth() + 1;
      return months[month];
    } else {
      return months[1];
    }
  }

  getYear() {
    if (this.heute.getMonth() <= 11) {
      return this.heute.getFullYear();
    } else {
      return this.heute.getFullYear() + 1;
    }
  }

  getOpenShifts(month: number) {
    if (this.days && this.guests) {
      let days = this.days.filter(day => new Date(day.datum).getMonth() == month);
      let guest = this.guests.filter(guest => new Date(guest.datum).getMonth() == month);

      for (let i = 0; i < days.length; i++) {

        if (days && guest) {
          if (days[i].affVorname == undefined && this.guests![i].sprungArt == 'AFF' && guest.length > 0) {
            let shift: OpenShift = {
              datum: days[i].datum,
              tag: days[i].tag,
              shift: 'AFF Instruktor',
              kommentar: 'Ohne AFF Instruktor können keine AFF Schüler ausgebildet werden'
            };

            this.openShifts.push(shift);

          } else if (days[i].sdlVorname === undefined) {

            let shift: OpenShift = {
              datum: days[i].datum,
              tag: days[i].tag,
              shift: 'Sprungdienstleiter',
              kommentar: 'Ohne Sprungdienstleiter findet kein Sprungbetrieb statt'
            };
            this.openShifts.push(shift);

          } else if (days[i].instrVorname === undefined) {

            let shift: OpenShift = {
              datum: days[i].datum,
              tag: days[i].tag,
              shift: 'Tages Instruktor',
              kommentar: 'Ohne Tages Instruktor können keine Schüler ausgebildet werden'
            };
            this.openShifts.push(shift);

          }
        }

      }
    }
    return this.openShifts;

  }

  filterNextWeek(date: Date): Cituro[] {
    return this.days!.filter(day => day.datum == date);
  }

  filterRestlicheTage(): Cituro[] {
    return this.days!.filter(day => day.datum != this.naechsterSamstag && day.datum != this.naechsterSonntag);
  }

  filterNextWeekGuests(date: Date): CituroGuests[] {
    return this.guests!.filter(guest => guest.datum == date);
  }

  getNumberOfTAGuests(uhrzeit: string, date: Date, art: string): number {
    return this.filterNextWeekGuests(date).filter(guest => guest.uhrzeit == uhrzeit && guest.sprungArt == art).length;
  }

  getNumberOfAFFGuests(date: Date, art: string): number {
    return this.filterNextWeekGuests(date).filter(guest => guest.sprungArt == art).length;
  }


}
