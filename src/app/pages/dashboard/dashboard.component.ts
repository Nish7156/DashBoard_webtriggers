import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Chart from 'chart.js';

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "../../variables/charts";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public datasets: any;
  public data: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  id=this.route.snapshot.paramMap.get('id');
  usermaininfo;
  ids:any=[];
  sessionStorage: string;

  constructor(private http:HttpClient,public fb: FormBuilder,private router: Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.car();

    this.datasets = [
      [0, 20, 10, 30, 15, 40, 20, 60, 60],
      [0, 20, 5, 25, 10, 30, 15, 40, 40]
    ];
    this.data = this.datasets[0];


    var chartOrders = document.getElementById('chart-orders');

    parseOptions(Chart, chartOptions());


    var ordersChart = new Chart(chartOrders, {
      type: 'bar',
      options: chartExample2.options,
      data: chartExample2.data
    });

    var chartSales = document.getElementById('chart-sales');

    this.salesChart = new Chart(chartSales, {
			type: 'line',
			options: chartExample1.options,
			data: chartExample1.data
		});
  }

  car(){
    this.http.get('http://localhost:4400/users/'+this.id).subscribe(data => {
      this.usermaininfo = data;
      console.log(this.usermaininfo, 'Get-Data-login');
   });
   localStorage.setItem('test', this.id);
   console.log(localStorage.getItem('test'), 'localStorage');
   sessionStorage.setItem('test', this.id);
    console.log(sessionStorage.getItem('test'), 'sessionStorage');
  }


  public updateOptions() {
    this.salesChart.data.datasets[0].data = this.data;
    this.salesChart.update();
  }


  

}
