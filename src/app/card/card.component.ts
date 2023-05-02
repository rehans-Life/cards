import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  // Through the Input decorator we are specifying that these
  // properties are going to be set by the parent component
  // which renders this card component
  @Input() title: string = '';
  @Input() username: string = '';
  @Input() imageURL: string = '';
  @Input() content: string = '';
}
