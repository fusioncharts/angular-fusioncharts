import { Component, NgZone } from '@angular/core';

import fcDemos from '../samplecode';
import SelectedSingleton from '../services/selected.singleton';
import * as FusionCharts from 'fusioncharts';

declare var Prism;

@Component({
  selector: 'chart',
  templateUrl: './ex33.html',
  styleUrls: ['../ex.css']
})
export class Ex33 {
  demoId = 'ex33';
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
      // Initially data is set as null
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
      dataMarker: [
        {
          seriesName: 'Interest Rate',
          time: 'Mar-1980',
          identifier: 'H',
          timeFormat: '%b-%Y',
          tooltext:
            'As a part of credit control program, under the leadership of Paul Volcker, the Fed tightened the money supply, allowing the federal fund rates to approach 20 percent.'
        },
        {
          seriesName: 'Interest Rate',
          time: 'Aug-1982',
          identifier: 'L',
          timeFormat: '%b-%Y',
          tooltext:
            'The FED eases off the monetary brakes, allowing interest rates to fall and the economy to begin a strong recovery.'
        },
        {
          seriesName: 'Interest Rate',
          time: 'Oct-1987',
          identifier: 'L',
          timeFormat: '%b-%Y',
          tooltext:
            'The FED is forced to ease rate after the stock market crash.'
        },
        {
          seriesName: 'Interest Rate',
          time: 'May-1989',
          identifier: 'H',
          timeFormat: '%b-%Y',
          tooltext:
            'Liquidity problem forced the Fed to increase rate to nearly 10%.'
        },
        {
          seriesName: 'Interest Rate',
          time: 'Sept-1992',
          identifier: 'L',
          timeFormat: '%b-%Y',
          tooltext:
            'To fight the jobless economy growth the Fed had to reduce the interest rate to 3%.'
        },
        {
          seriesName: 'Interest Rate',
          time: 'Jun-2003',
          identifier: 'L',
          timeFormat: '%b-%Y',
          tooltext:
            'Struggling to revive the economy, the FED cuts it’s benchmark rate to 1%.'
        },
        {
          seriesName: 'Interest Rate',
          time: 'Sep-2007',
          identifier: 'L',
          timeFormat: '%b-%Y',
          tooltext: 'Fed started reducing the Federal Fund Rate.'
        },
        {
          seriesName: 'Interest Rate',
          time: 'Dec-2008',
          identifier: 'L',
          timeFormat: '%b-%Y',
          tooltext:
            'Fed reduced the interest rates to sub 0.25% to manage the menace of longest economic downturn since World War 2'
        }
      ]
    };
    this.fetchData();
  }

  // In this method we will create our DataStore and using that we will create a custom DataTable which takes two
  // parameters, one is data another is schema.
  fetchData() {
    var jsonify = res => res.json();
    var dataFetch = fetch(
      'https://s3.eu-central-1.amazonaws.com/fusion.store/ft/data/annotating-single-data-point-data.json'
    ).then(jsonify);
    var schemaFetch = fetch(
      'https://s3.eu-central-1.amazonaws.com/fusion.store/ft/schema/annotating-single-data-point-schema.json'
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
      SelectedSingleton.change(this.sampleCode['ex33'].title);
    });
  }
}
