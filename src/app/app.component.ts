import { Component,OnInit } from '@angular/core';
import { AngularFire,FirebaseListObservable } from 'angularfire2'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  //title:any="loading";

  constructor(private _fb:AngularFire){

  }
  ngOnInit(){
  	//const telugu:FirebaseListObservable<any> = this._fb.database.list('data');
	//telugu.subscribe(data=>this.title=data)
  }

}
