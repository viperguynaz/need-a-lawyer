import {IDictionary} from '../interfaces/i-dictionary';
import {CommonExpressions as cmnExp} from './common-expressions';


export class StringHelpers {
  public static replaceAll(origVal: string, replaceDictionary: IDictionary<string>): string {
    if (cmnExp.isUndefinedOrNull(replaceDictionary)) {
      return origVal;
    }

    let regexMatch = new RegExp(Object.keys(replaceDictionary).join('|'), 'g');

    return origVal.replace(regexMatch, (matched) => replaceDictionary[matched]);
  }

  public static slug(value: string|number|(string|number)[]): string|string[] {
    let slugger = (valToSlug: string|number) => {
      if (cmnExp.isUndefinedOrNull(valToSlug)) {
        return '';
      }

      return valToSlug.toString()
        .trim()
        .replace(/\s+/g, '-')     // Replace spaces with -
        .replace(/&/g, '-and-')   // Replace & with 'and'
        .replace(/[^\w\-]+/g, '') // Remove all non-word chars
        .replace(/\-\-+/g, '-')   // Replace multiple - with single -
        .toLowerCase();
    };

    if (Array.isArray(value)) {
      let clone = value.slice(0) as string[];
      clone.forEach((v, i) => clone[i] = slugger(v));
      return clone;
    } else {
      return slugger(value);
    }
  }

  public static unslug(value: string): string {
    return value.replace(/-/g, ' ');
  }

  public static pluralize(value: string): string {
    let wordLength = value.length;
    if (value.charAt(wordLength - 1) === 's' || value.charAt(wordLength - 1) === 'z') {
      return value;
    } else {
      return value + 's';
    }
  }
}
