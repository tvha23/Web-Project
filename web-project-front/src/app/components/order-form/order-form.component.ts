import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service'
@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
  order = {
    OrdererAdress:'',
    OrdererFirstName:'' ,
    OrdererLastName: '',
    OrdererPostalCode: '',
  };

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
  }
  createOrder():void {
    const data = {
      ordererAdress: this.order.OrdererAdress,
      ordererFirstName: this.order.OrdererFirstName,
      ordererLastName: this.order.OrdererLastName,
      ordererPostalCode: this.order.OrdererPostalCode,
    };

    this.orderService.create(data).subscribe();
  }

}
