import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/shared/navigation.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isActive1: boolean = false;
  isActive2: boolean = false;
  isActive3: boolean = false;

  toggle = true;

  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  navWebLink: any = [
    { url: '/license-list', name: 'MITS License' },
    { url: '/web-license', name: 'WEB License' },
    { url: '/hardware-assets', name: 'Hardware License' },
  ];

  currentlySelected = '/license-list'


  constructor(
    private navService : NavigationService
  ) {}

  ngOnInit(): void {

    this.navService.currentNavigation.subscribe((data) => {
      this.currentlySelected = data;


    })
  }

  toggleActive(data : any) {

    this.currentlySelected = data.url
    this.navService.setCurrentNavigation(this.currentlySelected)

  }

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
  // toggleActive2() {
  //   this.isActive2 = true;
  //   this.isActive1 = false;
  //   this.isActive3 = false;
  // }

  // toggleActive3() {
  //   this.isActive3 = true;
  //   this.isActive2 = false;
  //   this.isActive1 = false;
  // }

  // enableDisableRule() {
  //   this.toggle = !this.toggle;
  // }

  // toggleActive(buttonNumber: number) {
  //   switch (buttonNumber) {
  //     case 1:
  //       this.isActive1 = true;
  //       this.isActive2 = false;
  //       this.isActive3 = false;

  //       console.log(this.isActive1);
  //       break;
  //     case 2:
  //       this.isActive2 = true;
  //       this.isActive1 = false;
  //       this.isActive3 = false;

  //       console.log(this.isActive2);
  //       break;
  //     case 3:
  //       this.isActive3 = true;
  //       this.isActive1 = false;
  //       this.isActive2 = false;

  //       console.log(this.isActive3);
  //       break;
  //   }
  // }
}
