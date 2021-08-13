import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileSignComponent } from './mobile-sign/mobile-sign.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GroupidSignComponent } from './groupid-sign/groupid-sign.component';
import { GroupDashboardComponent } from './group-dashboard/group-dashboard.component';



@NgModule({
  declarations: [MobileSignComponent, DashboardComponent, GroupidSignComponent, GroupDashboardComponent],
  imports: [
    CommonModule
  ],
  exports:[MobileSignComponent, DashboardComponent, GroupidSignComponent, GroupDashboardComponent]
})
export class SingleWalletModule { }
