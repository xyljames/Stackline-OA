import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Chart } from './../models/chart.model';
import { AppState } from './../app.state';
import * as ChartActions from './../actions/chart.actions';
import {ChartService} from '../services/chart.service';
import 'rxjs/add/operator/map';
import * as chartShow from 'chart.js'

@Component({

  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  chart = [];
  data = [];
   sales_list: any = [];
  charts: Observable<Chart[]>;

  constructor(private store: Store<AppState>, private service: ChartService) { 
    this.charts = store.select('chart');
    this.service.getChartContent().subscribe(res =>{

    })
  }

  delChart(index) {
    this.store.dispatch(new ChartActions.RemoveChart(index));
  }

  ngOnInit() {
    this.service.getChartContent().subscribe(res => {
      const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
      this.data = res['0'].sales;
      let sales_list = res['0'].sales.map(res => res.retailSales);
      let margin_list = res['0'].sales.map(res => res.retailerMargin);

      this.chart = new chartShow('canvas', {
        type: 'line',
        data: {
          labels: months,
          datasets: [
            { 
              data: sales_list,
              borderColor: "#3cba9f",
              fill: false
            },
            { 
              data: margin_list,
              borderColor: "#ff0000",
              fill: false
            },
      ]
    },
        options: {
          responsive: true,
          title: {
            display: true,
            text: 'retailSales VS retailerMargin'
          },
          tooltips: {
            mode: 'index',
            intersect: false,
          },
          hover: {
            mode: 'nearest',
            intersect: true
          },
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }],
          }
        }
      });
    });
  }

}
