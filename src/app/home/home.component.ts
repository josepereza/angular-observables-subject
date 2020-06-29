import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {filter, map} from "rxjs/operators";
import {UserService} from "../user.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  activatedBtnClicked: boolean = false;

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    // this.subscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // });

    const customIntervalObservable = Observable.create((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count == 30) {
          observer.complete();
        }
        // this error would never is thrown because the condition is true only after the observer is complete
        if (count > 31) {
          observer.error(new Error('Count is greater than 3'));
        }
        count++;
      }, 1000);
    });
    this.subscription = customIntervalObservable.pipe(
      filter(data => {
        return data >= 5;
      }),
      map((data) => {
        if (data < 20) {
          return 'not to hot - ' + data;
        } else {
          return 'very hot - ' + data;
        }
      }))
      .subscribe((string) => {
        console.log(string);
      }, (error) => {
        alert(error);
      }, () => {
        alert("Observer is complete!");
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
