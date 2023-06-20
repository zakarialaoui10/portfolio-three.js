import {Component} from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('showUp', [
      transition(':enter', [
        style({transform: 'translateY(100%)' }),
        animate('500ms 1s', style({ transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class HomeComponent {
  title: string[] = ["I'm front-", "End", "Developer"];
  // aboutMe: string = 'Hi, I\'m Olga and I\'m developing your sites. Tell me about your idea and I will design its mechanical heart.'
  aboutMe: string[] = ["Hi, I'm Olga and I'm developing your sites.", "Tell me about your idea and I will", "design its mechanical heart."]


}
