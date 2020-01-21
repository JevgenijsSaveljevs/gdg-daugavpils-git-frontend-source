import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ChartDataSets, ChartType, RadialChartOptions, ChartTooltipItem, ChartData } from 'chart.js';
import { Label, BaseChartDirective } from 'ng2-charts';
import { AudioFeature } from '../models/audio-feature';
import { SpotifyService } from '../services/spotify.service';
import { Track } from '../models/track';
import { FeatureDescriptor } from '../utils/feature-descriptor';

@Component({
  selector: 'app-feature-chart',
  templateUrl: './feature-chart.component.html',
  styleUrls: ['./feature-chart.component.scss']
})
export class FeatureChartComponent implements OnInit {

  // @ViewChild("chart", { static: true }) chart;
  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  _track: Track;
  @Input('track')
  set setTrackId(newTrack: Track) {
    this._track = newTrack;
    if (this._track) {
      this.loadFeature();
    } else {
      this.showChart = false;
    }
  }

  get track() {
    return this._track;
  }

  // Radar
  public radarChartOptions: RadialChartOptions = {
    responsive: true,

    legend: {
      display: true,
      labels: {
        filter: (arg1, arg2) => {
          if (arg1.text) {
            return true;
          }
          // return false;
          // return true;
        }
      }
      // labels: {},

    },
    tooltips: {
      callbacks: {
        afterBody: (items: ChartTooltipItem[], data: ChartData) => {

          const item = items[0];
          // return ['', 'aaa', 'll', 'tt'];
          const dimension = data.labels[item.index];
          const description = FeatureDescriptor.getDescritpion(dimension as string);

          return ['', ...description];
        }
      }
      // callbacks: {
      //   label: function (tooltipItem: any, data) {
      //     const dimension = data.labels[tooltipItem.index];
      //     const description = FeatureDescriptor.getDescritpion(dimension as string);
      //     var label = data.datasets[tooltipItem.datasetIndex].label || '';

      //     if (label) {
      //       label += ': ';
      //     }
      //     label += Math.round(tooltipItem['yLabel'] * 100) / 100;
      //     return [label, description];// + '\r\n' + description;
      //   },
      // }
    }
    // tooltips: {
    //   // Disable the on-canvas tooltip
    //   enabled: false,

    //   custom: function (tooltipModel) {
    //     debugger
    //     // Tooltip Element
    //     var tooltipEl = document.getElementById('chartjs-tooltip');

    //     // Create element on first render
    //     if (!tooltipEl) {
    //       tooltipEl = document.createElement('div');
    //       tooltipEl.id = 'chartjs-tooltip';
    //       tooltipEl.innerHTML = '<table></table>';
    //       document.body.appendChild(tooltipEl);
    //     }

    //     // Hide if no tooltip
    //     if (tooltipModel.opacity === 0) {
    //       tooltipEl.style.opacity = '0';
    //       return;
    //     }

    //     // Set caret Position
    //     tooltipEl.classList.remove('above', 'below', 'no-transform');
    //     if (tooltipModel.yAlign) {
    //       tooltipEl.classList.add(tooltipModel.yAlign);
    //     } else {
    //       tooltipEl.classList.add('no-transform');
    //     }

    //     function getBody(bodyItem) {
    //       return bodyItem.lines;
    //     }

    //     // Set Text
    //     if (tooltipModel.body) {
    //       var titleLines = tooltipModel['title'] || [];
    //       var bodyLines = tooltipModel.body.map(getBody);

    //       var innerHtml = '<thead>';

    //       titleLines.forEach(function (title) {
    //         innerHtml += '<tr><th>' + title + '</th></tr>';
    //       });
    //       innerHtml += '</thead><tbody>';

    //       bodyLines.forEach(function (body, i) {
    //         var colors = tooltipModel['labelColors'][i];
    //         var style = 'background:' + colors.backgroundColor;
    //         style += '; border-color:' + colors.borderColor;
    //         style += '; border-width: 2px';
    //         var span = '<span style="' + style + '"></span>';
    //         innerHtml += '<tr><td>' + span + body + '</td></tr>';
    //       });

    //       debugger;



    //       innerHtml += '</tbody>';

    //       var tableRoot = tooltipEl.querySelector('table');
    //       tableRoot.innerHTML = innerHtml;
    //     }

    //     // `this` will be the overall tooltip
    //     var position = this._chart.canvas.getBoundingClientRect();

    //     // Display, position, and set styles for font
    //     tooltipEl.style.opacity = '1';
    //     tooltipEl.style.position = 'absolute';
    //     tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
    //     tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
    //     tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily;
    //     tooltipEl.style.fontSize = tooltipModel.bodyFontSize + 'px';
    //     tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
    //     tooltipEl.style.padding = tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px';
    //     tooltipEl.style.pointerEvents = 'none';
    //   }
    // }

  };

  showChart = false;

  public radarChartLabels: Label[] = [
    'Danceability',
    'Energy',
    'Speechiness',
    'Acousticness',
    'Instrumentalness',
    'Liveness',
    'Valence'
  ];

  public radarChartData: ChartDataSets[] = [
    // { data: [65, 59, 90, 81, 56, 55, 40], label: 'track name' },
    // { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
    { data: [], hideInLegendAndTooltip: false, showLine: false, label: ''}
  ];

  public radarChartType: ChartType = 'radar';

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
    // debugger;
    // console.log(this.chart);
    // this.radarChartData = [];
    // this.chart.update()
  }

  getRandomColor() {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }

  private loadFeature() {
    this.spotifyService.audioFeatures(this.track.id)
      .subscribe({
        next: (feature: AudioFeature) => {
          this.radarChartData.unshift({
            data: [
              feature.danceability,
              feature.energy,
              feature.speechiness,
              feature.acousticness,
              feature.instrumentalness,
              feature.liveness,
              feature.valence
            ],
            label: this.track.name,
            backgroundColor: this.getRandomColor(),

          });
          this.showChart = true;
        },
        error: (error) => {
          console.log(error);
        }
      });
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  cleanFeatures() {
    this.radarChartData = [];
  }
}
