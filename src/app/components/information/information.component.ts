import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Constants } from '../../core/constants';
import { LicenseDialogComponent } from '../dialogs/licenseDialog/licenseDialog.component';
import log from 'electron-log';

@Component({
  selector: 'information-page',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
  constructor(private dialog: MatDialog) {
  }

  public applicationVersion: string = Constants.applicationVersion;
  public applicationCopyright: string = Constants.applicationCopyright;
  public websiteUrl: string = Constants.websiteUrl;
  public emailAddress: string = Constants.emailAddress;
  public facebookUrl: string  = Constants.facebookUrl;
  public twitterUrl: string = Constants.twitterUrl;
  public externalComponents: any[] = Constants.externalComponents;

  ngOnInit() {
    log.info("Showing information page");
  }

  openLicenseDialog(): void {
    let dialogRef: MatDialogRef<LicenseDialogComponent> = this.dialog.open(LicenseDialogComponent, {
      width: '450px'
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.animal = result;
    // });
  }

  openDonateLink(): void {
    require('electron').shell.openExternal(Constants.donateUrl);
  }
}
