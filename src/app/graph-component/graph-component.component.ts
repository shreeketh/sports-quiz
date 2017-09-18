import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graph-component',
  templateUrl: './graph-component.component.html',
  styleUrls: ['./graph-component.component.css']
})
export class GraphComponentComponent implements OnInit {
  @Input() graphData: any[]= [];
  constructor() { }

  ngOnInit() {
  }

 // Doughnut
  public doughnutChartLabels:string[] = ['Wrong', 'Correct'];
  //public doughnutChartData:number[] = this.graphData;
  public doughnutChartType:string = 'doughnut';
  
 

  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}
