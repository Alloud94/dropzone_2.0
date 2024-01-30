import { Component, OnInit } from '@angular/core';
import { Cituro } from 'src/app/interfaces/cituro';
import { CituroGuests } from 'src/app/interfaces/cituroGuests';
import { NotificationServiceService } from 'src/app/services/notification-service.service';

@Component({
  selector: 'app-cituro-mail',
  templateUrl: './cituro-mail.component.html',
  styleUrls: ['./cituro-mail.component.sass']
})
export class CituroMailComponent implements OnInit {
  days?: Cituro[];
  guests?: CituroGuests[];

  // Test Date
  heute = new Date();
  naechsterSamstag = new Date();
  naechsterSonntag = new Date();
  uebernaechstenSamstag = new Date();


  constructor() { }

  ngOnInit(): void {
    this.naechsterSamstag.setDate(this.heute.getDate() + (6 - this.heute.getDay() + 7) % 7 + 1);
    this.naechsterSonntag.setDate(this.heute.getDate() + (7 - this.heute.getDay()) % 7 + 1);
    this.uebernaechstenSamstag.setDate(this.heute.getDate() + (13 - this.heute.getDay() + 7) % 7 + 1);
  
    this.days = [
      {
        id: 1,
        datum: this.naechsterSamstag,
        tag: this.getWochentag(this.naechsterSamstag),
        kommentar: "Test1",
        pilotVorname: "TestPilotVorname1",
        pilotNachname: "TestPilotNachname1",
        sdlVorname: "TestSDLVorname1",
        sdlNachname: "TestSDLNachname1",
        affVorname: "TestAFFVorname1",
        affNachname: "TestAFFNachname1",
        instrVorname: "TestINSTRVorname1",
        instrNachname: "TestINSTNachname1",
        videoVorname: "TestVideoVorname1",
        videoNachname: "TestVideoNachname1"
      },
      {
        id: 2,
        datum: this.naechsterSonntag,
        tag: this.getWochentag(this.naechsterSonntag),
        kommentar: "Test2",
        pilotVorname: "TestPilotVorname2",
        pilotNachname: "TestPilotNachname2",
        sdlVorname: "TestSDLVorname2",
        sdlNachname: "TestSDLNachname2",
        affVorname: "TestAFFVorname2",
        affNachname: "TestAFFNachname2",
        instrVorname: "TestINSTRVorname2",
        instrNachname: "TestINSTNachname2",
        videoVorname: "TestVideoVorname2",
        videoNachname: "TestVideoNachname2"
      },
      {
        id: 3,
        datum: this.uebernaechstenSamstag,
        tag: this.getWochentag(this.uebernaechstenSamstag),
        kommentar: "Test3",
        pilotVorname: "TestPilotVorname3",
        pilotNachname: "TestPilotNachname3",
        sdlVorname: "TestSDLVorname3",
        sdlNachname: "TestSDLNachname3",
        affVorname: "TestAFFVorname3",
        affNachname: "TestAFFNachname3",
        instrVorname: "TestINSTRVorname3",
        instrNachname: "TestINSTNachname3",
        videoVorname: "TestVideoVorname3",
        videoNachname: "TestVideoNachname3"
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
      }


    ];
  
  }

  getWochentag(datum: Date): string {
    const wochentage = ['Samstag', 'Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag'];
    const tagIndex = datum.getDay();
    return wochentage[tagIndex];
  }

  filterNextWeek(date:Date): Cituro[] {
    return this.days!.filter(day => day.datum == date);
  }

  filterNextWeekGuests(date:Date): CituroGuests[] {
    return this.guests!.filter(guest => guest.datum == date);
  }

  getNumberOfTAGuests(uhrzeit:string, date:Date, art:string): number {
    return this.filterNextWeekGuests(date).filter(guest => guest.uhrzeit == uhrzeit && guest.sprungArt == art).length;
  }

  getNumberOfAFFGuests(date:Date, art:string): number {
    return this.filterNextWeekGuests(date).filter(guest => guest.sprungArt == art).length;
  }


}
