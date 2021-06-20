import { Action } from '@ngrx/store'
import { Chart } from './../models/chart.model'
import * as ChartActions from './../actions/chart.actions'

const initialState: Chart = {
    name: '',
    url: ''
}

export function reducer(state: Chart[] = [initialState], action: ChartActions.Actions) {
    switch(action.type) {
        case ChartActions.ADD_CHART:
            return [...state, action.payload];
        case ChartActions.REMOVE_CHART:
            state.splice(action.payload, )
            return state;
        default:
            return state;
    }
}