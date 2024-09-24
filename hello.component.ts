import { Component, Input } from '@angular/core';
@Component({
  selector: 'hello',
  template: `<h1>Hello </h1><router-outlet></router-outlet>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {

}
