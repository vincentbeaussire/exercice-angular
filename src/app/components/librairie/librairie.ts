import { Component } from '@angular/core';
import {SortPipe} from '../../utils/sort-pipe';
import {ReadEmojiPipe} from '../../utils/read-emoji-pipe';

interface Book {
  title: string;
  author: string;
  isRead: boolean;
}

@Component({
  selector: 'app-librairie',
  imports: [
    SortPipe,
    ReadEmojiPipe
  ],
  templateUrl: './librairie.html',
  styleUrl: './librairie.css'
})
export class Librairie {
  books: Book[] = [
    { title: 'Le Petit Prince', author: 'Antoine de Saint-Exupéry', isRead: true },
    { title: '1984', author: 'George Orwell', isRead: false },
    { title: 'Ebène', author: 'Ryszard Kapuscinski', isRead: true },
  ];

  toggleReadStatus(book: Book): void {
    book.isRead = !book.isRead;
  }
}


