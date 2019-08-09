import { Component } from '@angular/core';
import * as FusionCharts from 'fusioncharts';
const dataUrl =
  'https://s3.eu-central-1.amazonaws.com/fusion.store/ft/data/plotting-multiple-series-on-time-axis-data.json';
const schema = [
  {
    name: 'Time',
    type: 'date',
    format: '%d-%b-%y'
  },
  {
    name: 'Type',
    type: 'string'
  },
  {
    name: 'Sales Value',
    type: 'number'
  }
];
const updatedDataSource = [
  ['01-Feb-11', 'Grocery', 8866],
  ['01-Feb-11', 'Footwear', 984],
  ['02-Feb-11', 'Grocery', 2174],
  ['02-Feb-11', 'Footwear', 1109],
  ['03-Feb-11', 'Grocery', 2084],
  ['03-Feb-11', 'Footwear', 6526],
  ['04-Feb-11', 'Grocery', 1503],
  ['04-Feb-11', 'Footwear', 1007],
  ['05-Feb-11', 'Grocery', 4928],
  ['05-Feb-11', 'Footwear', 4112],
  ['06-Feb-11', 'Grocery', 4667],
  ['06-Feb-11', 'Footwear', 7206],
  ['07-Feb-11', 'Grocery', 1064],
  ['07-Feb-11', 'Footwear', 7890],
  ['08-Feb-11', 'Grocery', 851],
  ['08-Feb-11', 'Footwear', 6002],
  ['09-Feb-11', 'Grocery', 7326],
  ['09-Feb-11', 'Footwear', 5168],
  ['10-Feb-11', 'Grocery', 8399],
  ['10-Feb-11', 'Footwear', 7992],
  ['11-Feb-11', 'Grocery', 4084],
  ['11-Feb-11', 'Footwear', 3001],
  ['12-Feb-11', 'Grocery', 4012],
  ['12-Feb-11', 'Footwear', 7891],
  ['13-Feb-11', 'Grocery', 1673],
  ['13-Feb-11', 'Footwear', 511],
  ['14-Feb-11', 'Grocery', 6018],
  ['14-Feb-11', 'Footwear', 1861],
  ['15-Feb-11', 'Grocery', 9011],
  ['15-Feb-11', 'Footwear', 1424],
  ['16-Feb-11', 'Grocery', 5817],
  ['16-Feb-11', 'Footwear', 6807],
  ['17-Feb-11', 'Grocery', 5813],
  ['17-Feb-11', 'Footwear', 4126],
  ['18-Feb-11', 'Grocery', 566],
  ['18-Feb-11', 'Footwear', 3482],
  ['19-Feb-11', 'Grocery', 9065],
  ['19-Feb-11', 'Footwear', 5649],
  ['20-Feb-11', 'Grocery', 6734],
  ['20-Feb-11', 'Footwear', 309],
  ['21-Feb-11', 'Grocery', 6937],
  ['21-Feb-11', 'Footwear', 6568],
  ['22-Feb-11', 'Grocery', 3038],
  ['22-Feb-11', 'Footwear', 2458],
  ['23-Feb-11', 'Grocery', 4445],
  ['23-Feb-11', 'Footwear', 356],
  ['24-Feb-11', 'Grocery', 8782],
  ['24-Feb-11', 'Footwear', 5883],
  ['25-Feb-11', 'Grocery', 9489],
  ['25-Feb-11', 'Footwear', 6556],
  ['26-Feb-11', 'Grocery', 9624],
  ['26-Feb-11', 'Footwear', 1601],
  ['27-Feb-11', 'Grocery', 9033],
  ['27-Feb-11', 'Footwear', 1359],
  ['28-Feb-11', 'Grocery', 6932],
  ['28-Feb-11', 'Footwear', 4361],
  ['01-Mar-11', 'Grocery', 625],
  ['01-Mar-11', 'Footwear', 3807],
  ['02-Mar-11', 'Grocery', 904]
];

@Component({
  selector: 'fusiontime',
  templateUrl: './fusiontime.html'
})
export class FusionTime {
  dataSource: any;
  type: string;
  width: string;
  height: string;

  constructor() {
    this.type = 'timeseries';
    this.width = '600';
    this.height = '500';
    this.dataSource = {
      data: null,
      chart: {
        //  exportEnabled: 1
      },
      caption: {
        text: 'Online Sales of a SuperStore in India & the US'
      },
      yAxis: [
        {
          plot: {
            value: 'Sales',
            type: 'line'
          }
        }
      ]
    };

    this.fetchData();
    // this.updateMyChartData();
  }
  fetchData() {
    let jsonify = res => res.json();
    let dataFetch = fetch(dataUrl).then(jsonify);

    Promise.all([dataFetch]).then(res => {
      let data = res[0];
      let fusionTable = new FusionCharts.DataStore().createDataTable(
        data,
        schema
      ); // Instance of DataTable to be passed as data in dataSource

      this.dataSource.data = fusionTable;
    });
  }

  updateMyChartData() {
    let updatedfusionTable = new FusionCharts.DataStore().createDataTable(
      updatedDataSource,
      schema
    );
    this.dataSource.caption.text = 'HELLLOOO!!!!';
    this.dataSource.data = updatedfusionTable;
  }
}
