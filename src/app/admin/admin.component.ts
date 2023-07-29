import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SideNavItems } from '../shared/sidenav-link';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
@ViewChild('sidenav') sidenav?: MatSidenav;
arrow = 'arrow_back';
navItems =  SideNavItems;
indexExpanded = -1;





toggleSidenav(){
  this.sidenav?.toggle();
  this.arrow = this.arrow === 'arrow_forward' ? 'arrow_back':'arrow_forward';
}
togglePanels(index: number) {
  this.indexExpanded = index == this.indexExpanded ? -1 : index;
}
}
