import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {PrimePopupComponent} from './popups/prime-popup/prime-popup.component';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UiComponent implements OnInit {

  constructor(public popup: MatDialog) { }

  ngOnInit() {
  }

  public openPopup() {

    const dialogRef = this.popup.open( PrimePopupComponent, {
      height: '400px',
      width: '600px',
    });

  }

}
