import { Injectable } from '@angular/core'
import { AngularFire, FirebaseListObservable } from 'angularfire2'

@Injectable()
export class TeluguService{

	constructor(private _af:AngularFire){

	}

	getData(){
		const teluguData: FirebaseListObservable<any>=this._af.database.list('data');
		return teluguData
	}
}