import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import * as ChartActions from './../actions/chart.actions';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store<AppState>) { }


  addChart(name, url) {
    // dispatch action to create chart
    this.store.dispatch(new ChartActions.AddChart({name: name, url: url}))
  }
  ngOnInit() {
  }

}
