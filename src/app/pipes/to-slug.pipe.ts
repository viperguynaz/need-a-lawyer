import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toSlug'
})
export class ToSlugPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return value;
    }

    return value.replace(/\s+/g, '-');
  }

}
