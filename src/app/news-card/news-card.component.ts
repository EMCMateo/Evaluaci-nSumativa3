import { Component, OnInit, Input, } from '@angular/core';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss'],
  
})
export class NewsCardComponent  implements OnInit {
  @Input() tituloN: string ="";
  @Input() imagen: string ="";
  @Input() description: string="";
  constructor() { }

  ngOnInit() {}

}
