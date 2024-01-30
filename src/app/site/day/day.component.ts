import { Component, OnInit } from '@angular/core';
import { NotificationServiceService } from 'src/app/services/notification-service.service';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.sass']
})
export class DayComponent implements OnInit {

constructor(private notificationService: NotificationServiceService) { }

ngOnInit(): void {

}


}
