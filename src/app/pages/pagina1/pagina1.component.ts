import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component implements 
  OnInit, OnChanges, DoCheck, 
  AfterContentInit, AfterContentChecked, 
  AfterViewInit, AfterViewChecked, OnDestroy {

  public nombre : string = "Gabo";

  timerSubscription! : Subscription;

  public segundos : number = 0;

  constructor() {
    console.log("Constructor");
  }

  ngOnInit(): void {
    console.log("Ng OnInit");

    this.timerSubscription = interval(1000).subscribe( i => {
      console.log(i);
      this.segundos = i;
    })
  }

  ngOnChanges(changes : SimpleChanges): void {
    console.log("Ng on changes");
  }

  ngDoCheck(): void {
    console.log("Ng DoCheck");
  }

  ngAfterContentInit(): void {
    console.log("Ng ngAfterContentInit");
  }

  ngAfterContentChecked(): void {
    console.log("Ng ngAfterContentChecked");
  }

  ngAfterViewInit(): void {
    console.log("Ng ngAfterViewInit");
  }

  ngAfterViewChecked(): void {
    console.log("Ng ngAfterViewChecked");
  }

  ngOnDestroy(): void {
    console.log("Ng OnDestroy");
    this.timerSubscription.unsubscribe();
  }

  evento(){

  }
}
