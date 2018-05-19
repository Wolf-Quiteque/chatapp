
import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {usercreds} from '../../models/interfaces/usercreds';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(public afireauth: AngularFireAuth) {
    console.log('Hello AuthProvider Provider');
  }
    login(credentials:usercreds){
      var promise = new Promise( (resole,reject)=>{
        this.afireauth.auth.signInWithEmailAndPassword(credentials.email,credentials.password).then( ()=>{
            resole(true);
        }).catch( (err)=>{
          reject(err);
        })
      })
      return promise;
    }

}
