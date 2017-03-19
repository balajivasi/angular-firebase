import { Component, OnInit } from '@angular/core';

import { TeluguService } from './telugu.service'

@Component({
  selector: 'app-telugu',
  templateUrl: './telugu.component.html',
  styleUrls: ['./telugu.component.scss']
})
export class TeluguComponent implements OnInit {

  teluguIndustry:any;

  constructor(private _ts:TeluguService) { }


  ngOnInit() {
  	this.listData()

  }

  listData():void{
  	this._ts.getData().subscribe(data=>this.teluguIndustry=data[0]);
  }

}
