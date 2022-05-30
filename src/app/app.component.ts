import { Component } from '@angular/core';
import { NavigationError, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router) {
    console.log('V-0.5.3')
    this.router.events.subscribe(event => {
      if (event instanceof NavigationError) {
        this.router.navigateByUrl('');
      }
    });
  }


}
