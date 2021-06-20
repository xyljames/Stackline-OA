import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/chart.reducer';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
import {ChartService} from './services/chart.service';
import {HttpClientModule} from '@angular/common/http';
import {DataTableModule} from 'angular-6-datatable';

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    DataTableModule,
    HttpClientModule,
    StoreModule.forRoot({
      chart: reducer
    })
  ],
  providers: [ChartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
