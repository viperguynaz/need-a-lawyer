import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fromSlug'
})
export class FromSlugPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return value;
    }

    return value.replace(/-+/g, ' ');
  }

}
