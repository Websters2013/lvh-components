import {Component, HostListener, OnInit} from '@angular/core';
import {animate, transition, state, style, trigger} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(100%)'}),
        animate( 200 )
      ]),
      transition('* => void', [
        animate( 200, style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})

export class HeaderComponent implements OnInit {

  public isMenuShow = false;

  @HostListener('document:click', ['$event']) onClick(event) {

    if ( this.isMenuShow ) {

      this.isMenuShow = false;

    }

  }


  constructor() { }

  ngOnInit() {
  }

  public triggerMenu(): void {

    this.isMenuShow = !this.isMenuShow;

  }

  public openMenu(): void {



  }

}
