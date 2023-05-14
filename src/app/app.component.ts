import { Component, OnInit } from '@angular/core';
import { faBolt, faBrain, faComment, faEye} from '@fortawesome/free-solid-svg-icons';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'assignment1';
  faBolt = faBolt;
  faBrain = faBrain;
  faComment = faComment;
  faEye = faEye;
  isDesktopView!: boolean;
  constructor(private breakpointObserver: BreakpointObserver){}
  ngOnInit(): void {
    this.breakpointObserver.observe([Breakpoints.Handset])
    .subscribe(result => {
      this.isDesktopView = !result.matches;
    });
  }
  
}
