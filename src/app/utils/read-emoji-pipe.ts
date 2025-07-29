import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'readEmoji'
})
export class ReadEmojiPipe implements PipeTransform {

  transform(isRead: boolean): string {
    return isRead ? '👍' : '👎';
  }

}
