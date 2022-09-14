import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTest';

  
@HostListener('click', ['$event'])
show(){
  alert("HostListener is working on the show method")
}

  display(){
    alert("HostListener is not working on display method");
  }


}
