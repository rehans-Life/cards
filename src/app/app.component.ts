import { Component } from '@angular/core';
import { Post } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts: Post[] = [
    {
      title: 'Neat Tree',
      username: 'nature',
      imageURL: 'assets/tree.jpeg',
      content: 'I saw this neat tree today',
    },
    {
      title: 'Snowy Mountain',
      username: 'mountainlover',
      imageURL: 'assets/mountain.jpeg',
      content: 'Here is a picture of a snowy mountain',
    },
    {
      title: 'Mountain Biking',
      username: 'biking12222',
      imageURL: 'assets/biking.jpeg',
      content: 'I did some biking today',
    },
    {
      title: 'Neat Tree',
      username: 'nature',
      imageURL: 'assets/tree.jpeg',
      content: 'I saw this neat tree today',
    },
    {
      title: 'Snowy Mountain',
      username: 'mountainlover',
      imageURL: 'assets/mountain.jpeg',
      content: 'Here is a picture of a snowy mountain',
    },
    {
      title: 'Mountain Biking',
      username: 'biking12222',
      imageURL: 'assets/biking.jpeg',
      content: 'I did some biking today',
    },
  ];
}
