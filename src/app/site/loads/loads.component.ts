import { Component, OnInit } from '@angular/core';
import { Load } from 'src/app/interfaces/load';
import { NotificationServiceService } from 'src/app/services/notification-service.service';
import { Jumper } from 'src/app/interfaces/jumper';

@Component({
  selector: 'app-loads',
  templateUrl: './loads.component.html',
  styleUrls: ['./loads.component.sass']
})
export class LoadsComponent implements OnInit {
  trash:string = "/assets/icons/recycle-bin.png";
  airplane:string = "/assets/icons/plane.png";
  coment:string = "/assets/icons/coment.png";
  add:string = "/assets/icons/add.png";

  loads: Load[] = [
    {id: 1, number: 1, auslastung: 6, createDate: new Date()},
    {id: 2, number: 2, auslastung: 6, createDate: new Date()},
    {id: 3, number: 3, auslastung: 6, createDate: new Date()},
    {id: 4, number: 4, auslastung: 6, createDate: new Date()},
    {id: 5, number: 5, auslastung: 6, createDate: new Date()},
  ];

  jumper: Jumper[] = [
    {id: 1, loadId: 1, vorname: "Max", nachname: "Mustermann", boncardId: 123456, sprungart: "Tandem"},
    {id: 2, loadId: 1, vorname: "Max", nachname: "Mustermann", boncardId: 123456, sprungart: "Tandem"},
    {id: 3, loadId: 1, vorname: "Max", nachname: "Mustermann", boncardId: 123456, sprungart: "Tandem"},
    {id: 4, loadId: 1, vorname: "Max", nachname: "Mustermann", boncardId: 123456, sprungart: "Tandem"},
    {id: 5, loadId: 1, vorname: "Max", nachname: "Mustermann", boncardId: 123456, sprungart: "Tandem"},
    {id: 6, loadId: 1, vorname: "Max", nachname: "Mustermann", boncardId: 123456, sprungart: "Tandem"},
    {id: 6, loadId: 1, vorname: "Max", nachname: "Mustermann", boncardId: 123456, sprungart: "Tandem"},
    {id: 6, loadId: 1, vorname: "Max", nachname: "Mustermann", boncardId: 123456, sprungart: "Tandem"},
    {id: 6, loadId: 1, vorname: "Max", nachname: "Mustermann", boncardId: 123456, sprungart: "Tandem"},
    {id: 6, loadId: 1, vorname: "Max", nachname: "Mustermann", boncardId: 123456, sprungart: "Tandem"},
    {id: 7, loadId: 2, vorname: "Max", nachname: "Mustermann", boncardId: 123456, sprungart: "Tandem"},
    {id: 8, loadId: 2, vorname: "Max", nachname: "Mustermann", boncardId: 123456, sprungart: "Tandem"},
    {id: 9, loadId: 2, vorname: "Max", nachname: "Mustermann", boncardId: 123456, sprungart: "Tandem"},
    {id: 10, loadId: 2, vorname: "Max", nachname: "Mustermann", boncardId: 123456, sprungart: "Tandem"},
    {id: 11, loadId: 2, vorname: "Max", nachname: "Mustermann", boncardId: 123456, sprungart: "Tandem"},

  ];

  constructor(private notificationService: NotificationServiceService) { }

  ngOnInit(): void {
  }

  createLoad(){
    let load: Load = {id: 0, number: 0, auslastung: 0, createDate: new Date()};
    this.loads.push(load);
  }

  deleteLoad(loadId: number){
    this.loads = this.loads.filter(load => load.id !== loadId);
  }

  successFlight(loadId: number){
    this.notificationService.notificationInfoShort("Not implemented yet");
  }

  addComent(loadId: number){
    this.notificationService.notificationInfoShort("Not implemented yet");
  }

  deleteJumper(loadId: number, jumperId: number){
    this.jumper = this.jumper.filter(jumper => jumper.id !== jumperId);
  }

  addJumper(loadId: number){
    let jumper: Jumper = {id: 0, loadId: loadId, vorname: "Max", nachname: "Mustermann", boncardId: 0, sprungart: ""};
    this.jumper.push(jumper);
  }

  // Filter

  filteredJumper(loadId: number){
    return this.jumper.filter(jumper => jumper.loadId === loadId);

  }

}
