import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  emitter = new Subject<boolean>();
  constructor() { }
}
