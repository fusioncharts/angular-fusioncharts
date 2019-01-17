import { Component, NgZone } from '@angular/core';

import fcDemos from '../samplecode';
import SelectedSingleton from '../services/selected.singleton';
import * as FusionCharts from 'fusioncharts';

declare var Prism;

@Component({
  selector: 'chart',
  templateUrl: './ex35.html',
  styleUrls: ['../ex.css']
})
export class Ex35 {
  demoId = 'ex35';
  sampleCode = fcDemos;
  dataSource: any;
  type: string;
  width: string;
  height: string;
  constructor() {
    this.type = 'timeseries';
    this.width = '100%';
    this.height = '400';
    // This is the dataSource of the chart
    this.dataSource = {
      data: null,
      caption: {
        text: 'Interest Rate Analysis'
      },
      subCaption: {
        text: 'Federal Reserve (USA)'
      },
      yAxis: [
        {
          plot: 'Interest Rate',
          format: {
            suffix: '%'
          },
          title: 'Interest Rate'
        }
      ],
      xAxis: {
        plot: 'Time',
        timemarker: [
          {
            start: 'Jul-1981',
            end: 'Nov-1982',
            label:
              'Economic downturn was triggered by {br} tight monetary policy in an effort to {br} fight mounting inflation.',
            timeFormat: '%b-%Y'
          },
          {
            start: 'Jul-1990',
            end: 'Mar-1991',
            label:
              'This eight month recession period {br} was characterized by a sluggish employment recovery, {br} most commonly referred to as a jobless recovery.',
            timeFormat: '%b-%Y'
          },
          {
            start: 'Jun-2004',
            end: 'Jul-2006',
            label:
              'The Fed after raising interest rates {br} at 17 consecutive meetings, ends its campaign {br} to slow the economy and forestall inflation.',
            timeFormat: '%b-%Y'
          },
          {
            start: 'Dec-2007',
            end: 'Jun-2009',
            label:
              'Recession caused by the worst {br} collapse of financial system in recent {br} times.',
            timeFormat: '%b-%Y'
          }
        ]
      }
    };
    this.fetchData();
  }

  // In this method we will create our DataStore and using that we will create a custom DataTable which takes two
  // parameters, one is data another is schema.
  fetchData() {
    var jsonify = res => res.json();
    var dataFetch = fetch(
      'https://s3.eu-central-1.amazonaws.com/fusion.store/ft/data/date-range-event-overlay-data.json'
    ).then(jsonify);
    var schemaFetch = fetch(
      'https://s3.eu-central-1.amazonaws.com/fusion.store/ft/schema/date-range-event-overlay-schema.json'
    ).then(jsonify);

    Promise.all([dataFetch, schemaFetch]).then(res => {
      const data = res[0];
      const schema = res[1];
      // First we are creating a DataStore
      const fusionDataStore = new FusionCharts.DataStore();
      // After that we are creating a DataTable by passing our data and schema as arguments
      const fusionTable = fusionDataStore.createDataTable(data, schema);
      // Afet that we simply mutated our timeseries datasource by attaching the above
      // DataTable into its data property.
      this.dataSource.data = fusionTable;
    });
  }

  ngOnInit() {
    setTimeout(() => {
      SelectedSingleton.change(this.sampleCode['ex35'].title);
    });
  }
}
