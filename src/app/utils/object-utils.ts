import {IDictionary} from '../interfaces/i-dictionary';
import {ArrayUtils} from './array-utils';
import {CommonExpressions as cmp} from './common-expressions';


export class ObjectUtils {
  /**
   * Returns a new object that only contains the properties of the first object that match the filter.
   */
  public static filter(object: Object, expression: (value) => boolean): Object {
    let result = {};
    for (let key in object) {
      if (object.hasOwnProperty(key) && expression(object[key]) === true) {
        result[key] = object[key];
      }
    }
    return result;
  }

  /**
   * Converts an object into an array of its properties, where the name of the property
   * is now a property of the object's value. Allows you to do a normal filter on the
   * object returned form ObjectUtils.filter.
   */
  public static toArray(object: Object): any[] {
    let result: any[] = [];
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        let obj = object[key];
        obj['key'] = key;
        result.push(obj);
      }
    }
    return result;
  }

  /**
   * Converts a given Map into and Object
   * @param map
   * @returns {{}}
   */
  public static fromMap(map: Map<string, any>): IDictionary<string> {
    let result = {};

    Array.from(map.keys()).forEach(key => result[key] = map.get(key));

    return result;
  }

  /**
   * Looks through the top level values in an Object to determine if any of them
   * match a given value. If any of them do, we send back the name of the property.
   * @param {Object} object - The object to look within
   * @param {any} valueToMatch - The value to look for
   * @returns {string} The property name found with that value or null. Only returns
   *  first property found with matched value.
   */
  public static findPropertyWithValue(object: Object, valueToMatch: any): string {
    for (let prop in object) {
      if (object.hasOwnProperty(prop)) {
        if (object[prop] === valueToMatch) {
          return prop;
        }
      }
    }

    return null;
  }

  /**
   * Does a deep compare of two javascript objects via all the properties.
   * The method uses Object.keys. The browser compatibility on Object.keys is:
   * Chrome 5, Firefox 4.0, Internet Explorer 9, Opera 12, Safari 5, Android 4.4, IOS 9
   */
  public static deepCompare(object1: any, object2: any): boolean {
    let i;

    // bail if either object1 or object2 is null or undefined
    if ((cmp.isDefinedAndNotNull(object1) && cmp.isUndefinedOrNull(object2)) ||
        (cmp.isDefinedAndNotNull(object2) && cmp.isUndefinedOrNull(object1))) {
      return false;
    }

    let keysForObject1NotSorted = Object.keys(object1);
    let keysForObject2NotSorted = Object.keys(object2);
    if (keysForObject1NotSorted.length !== keysForObject2NotSorted.length) {
      return false; // not the same number of keys
    }

    // sort the keys
    let keysObject1 = keysForObject1NotSorted.sort();
    let keysObject2 = keysForObject2NotSorted.sort();

    if (keysObject1.join('') !== keysObject2.join('')) {
      return false; // different keys
    }
    for (i = 0; i < keysObject1.length; ++i) {
      let propertyKey = keysObject1[i];
      let keyValueObject1 = object1[propertyKey];
      let keyValueObject2 = object2[propertyKey];

      // types do not match
      if (typeof keysObject1 !== typeof keysObject2) {
        return false;
      } else if (keyValueObject1 instanceof Array) {
        if (ArrayUtils.areEqual(keyValueObject1, keyValueObject2) === false) {
          return false;
        }
      } else if (keyValueObject1 instanceof Date) {
        if (`${keyValueObject1}` !== `${keyValueObject2}`) {
          return false;
        }
      } else if (keyValueObject1 instanceof Function) {
        // No way to test functional equality in javascript.
        // The closest we can do is compare their code as string for equality.
        if (keyValueObject2.toString() !== keyValueObject1.toString()) {
          return false;
        }
      } else if (keyValueObject1 instanceof Object) {
        if (this.deepCompare(keyValueObject1, keyValueObject2) === false) {
          return false;
        }
      }

      let notArrayNotObject = !(keyValueObject1 instanceof Object) && !(keyValueObject1 instanceof Array);
      // change !== to != for loose comparison
      if (notArrayNotObject && keyValueObject1 !== keyValueObject2) {
        return false; // not the same value
      }
    }
    return true;
  }

  public static deepObjectClone<T>(object: T): T {
    if (cmp.isUndefinedOrNull(object)) {
      return object;
    }
    return JSON.parse(JSON.stringify(object));
  }
}
