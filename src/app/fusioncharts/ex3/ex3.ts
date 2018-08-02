import { Component, AfterViewInit} from '@angular/core';

import fcDemos from '../samplecode';
import SelectedSingleton from '../services/selected.singleton';
declare var Prism;

@Component({
  selector: 'chart',
  templateUrl: 'ex3.html'
})

export class Ex3 {
  demoId = 'ex3';
  sampleCode = fcDemos;
  dataSource = {
    "chart": {
      "caption": "Expense Analysis",
      "subCaption": "ACME Inc.",
      "xAxisname": "Region",
      "yAxisName": "Amount (In USD)",
      "numberPrefix": "$",
      "exportenabled": "1",
      "theme": "fusion"
    },
    "categories": [{
      "category": [{
        "label": "East"
      }, {
        "label": "West"
      }, {
        "label": "South"
      }, {
        "label": "North"
      }]
    }],
    "dataset": [{
      "seriesName": "Actual Expenses",
      "data": [{
        "value": "1441290"
      }, {
        "value": "855912"
      }, {
        "value": "911404"
      }, {
        "value": "648136"
      }]
    }, {
      "seriesName": "Budgeted Expenses",
      "renderAs": "line",
      "data": [{
        "value": "1297430"
      }, {
        "value": "776485"
      }, {
        "value": "685352"
      }, {
        "value": "726791"
      }]
    }, {
      "seriesName": "Unknown liabilities",
      "renderAs": "area",
      "showAnchors" : "0",
      "data": [{
        "value": "143860"
      }, {
        "value": "79427"
      }, {
        "value": "226052"
      }, {
        "value": "78655"
      }]
    }]
  };

  constructor () {

  }
  ngOnInit(){
    setTimeout(() => {
      SelectedSingleton.change(this.sampleCode['ex3'].title);
    })
  }
  ngAfterViewInit() {
        Prism && Prism.highlightAll();
      }
    }
