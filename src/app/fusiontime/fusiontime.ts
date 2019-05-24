import { Component } from '@angular/core';
import * as FusionCharts from 'fusioncharts';

@Component({
  selector: 'fusiontime',
  templateUrl: './fusiontime.html'
})
export class FusionTime {
  dataSource: any;
  type: string;
  width: string;
  height: string;
  chartNum = 'first';
  constructor() {
    this.type = 'column2d';
    this.width = '400';
    this.height = '400';
    this.dataSource = {
      chart: {
        caption: 'Countries With Most Oil Reserves [2017-18]',
        subCaption: 'In MMbbl = One Million barrels',
        xAxisName: 'Country',
        yAxisName: 'Reserves (MMbbl)',
        numberSuffix: 'K',
        theme: 'fusion'
      },
      data: [
        {
          label: 'Venezuela',
          value: '290'
        },
        {
          label: 'Saudi',
          value: '260'
        },
        {
          label: 'Canada',
          value: '180'
        },
        {
          label: 'Iran',
          value: '140'
        },
        {
          label: 'Russia',
          value: '115'
        },
        {
          label: 'UAE',
          value: '100'
        },
        {
          label: 'US',
          value: '30'
        },
        {
          label: 'China',
          value: '30'
        }
      ]
    };
  }

  showChart(num) {
    this.chartNum = num;
  }

  showChart1: boolean;
  showChart2: boolean;

  ngOnInit() {
    this.showChart1 = true;
    setInterval(() => {
      this.showChart2 ? this.onShowChart1() : this.onShowChart2();
    }, 30); // Small timeout simulates quick charts switching and causes an error.
  }

  onShowChart1() {
    this.showChart1 = true;
    this.showChart2 = false;
  }

  onShowChart2() {
    this.showChart1 = false;
    this.showChart2 = true;
  }
}
