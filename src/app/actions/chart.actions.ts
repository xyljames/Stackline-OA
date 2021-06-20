import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Chart } from './../models/chart.model';

export const ADD_CHART       = '[CHART] Add';
export const REMOVE_CHART    = '[CHART] Remove';

export class AddChart implements Action {
    readonly type = ADD_CHART;
    constructor(public payload: Chart) {}
}

export class RemoveChart implements Action {
    readonly type = REMOVE_CHART;
    constructor(public payload: number) {}
}

export type Actions = AddChart | RemoveChart