import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
 // items: string[] = ['item1', 'item2', 'item3'];
  items: { src: string, alt: string }[] = [   
     { src: 'path/to/image1.jpg ', alt: 'Comic 1' },   
      { src: 'path/to/image2.jpg', alt: 'Comic 2' },   
       { src: 'path/to/image3.jpg', alt: 'Comic 3' },  ];
}
//}
