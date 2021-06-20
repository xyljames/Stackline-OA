import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class ChartService {
  constructor( private http: HttpClient) {}
  //fetch local mock data
   getChartContent=(): Observable<any> => this.http.get('./assets/mock_json_data/stackline_frontend_assessment_data_2021.json')
}

 
