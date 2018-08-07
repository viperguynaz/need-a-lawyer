//import {ObjectUtils} from './object-utils';
//import {ArrayUtils} from './array-utils';

export class CommonExpressions {
  public static isDefinedAndNotNull(value: any) {
    return value !== undefined && value !== null;
  }

  public static isUndefinedOrNull(value: any) {
    return value === undefined || value === null;
  }

  public static isEmpty(value: string|any[]|Object) {
    if (this.isUndefinedOrNull(value)) {
      return true;
    }

    if (typeof value === 'object') {
      return Object.keys(value).length === 0;
    }

    return value.length === 0;
  }

  public static isNotEmpty(value: string|any[]|Object) {
    return !this.isEmpty(value);
  }

  public static areEqual(value1: any, value2: any): boolean {
    if (typeof value1 !== typeof value2) {
      return false;
    }

    if (typeof value1 === 'string' ||
        typeof value1 === 'number' ||
        typeof value1 === 'boolean' ||
        this.isUndefinedOrNull(value1)) {
      return value1 === value2;
    }

    // if (Array.isArray(value1)) {
    //   return ArrayUtils.areEqual(value1, value2);
    // }

    // if (typeof value1 === 'object') {
    //   return ObjectUtils.deepCompare(value1, value2);
    // }
  }
}
