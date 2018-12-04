import { Component, OnInit, Input} from '@angular/core';

interface Navbar {
  menuName: string;
  linkName: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor() { }

  ngOnInit() {}

}
