import {CommonExpressions as cmnExp} from './common-expressions';
import {ObjectUtils} from './object-utils';
import {IDictionary} from '../interfaces/i-dictionary';

export class ArrayUtils {

    public static sortArrayNumeric(numericArray: number[]): number[] {
      if (cmnExp.isDefinedAndNotNull(numericArray)) {
        return numericArray.sort((num1, num2) => { return num1 - num2; });
      }
      return numericArray;
    }

    /**
     * Does a deep compare of two arrays and also will handle case
     * when arrays have nested objects
     */
    public static  areEqual(ary1: any[], ary2: any[]): boolean {
        // types do not match
        if (typeof ary1 !== typeof ary2) {
            return false;
        }
        // catches case when undefined or null
        if (!Array.isArray(ary1) || !Array.isArray(ary2)) {
            return false;
        }
        if (ary1.length !== ary2.length) {
            return false;
        }
        // at this point we know ary1 and ary2 length are equal
        if (ary1.length === 0) {
            return true;
        }
        // compare two arrays it will handle nested objects in array
        return ObjectUtils.deepCompare(ary1, ary2);
    }

    /**
     * Method sorts a array of objects by specified object key
     * - Defaults to asc sort
     * @param list
     * @param key
     * @param sortAsc - Sort direction asc and desc
     * @returns {(a:any, b:any)=>number}
     */
    public static sortByKey(list: any[], key: string, sortAsc: boolean = true): any[] {
        let objectKeyFunction = (x) => x[key];
        return this.sortByNestedObjectKey(list, objectKeyFunction, sortAsc);
    }

    /**
     * Method sorts an array of objects by specified object key value returned from a given selector function
     * - Defaults to asc sort
     * @param list
     * @param keySelector - function that takes an element of list and returns the property to sort on
     * @param sortAsc - Sort direction asc and desc
     * @returns {(a:any, b:any)=>number}
     */
    public static sortByNestedObjectKey(
        list: any[], 
        keySelector: (element: any) => void, 
        sortAsc: boolean = true
        ): any[] {
        if (cmnExp.isEmpty(list) || cmnExp.isUndefinedOrNull(keySelector)) {
            return list; //do nothing
        }
        let sortByKeyFunction = (a: any, b: any) => {
            let A = keySelector(a), B = keySelector(b);
            let result = (A < B) ? -1 : ((A > B) ? 1 : 0);
            return !sortAsc ? (result * -1) : result;
        };

        // clone the list before sort
        let resultList = list.slice(0);
        return resultList.sort(sortByKeyFunction);
    }

    /**
     * Method groups an array by some properties of its elements
     * @param array - array to be grouped
     * @param groupKeyGenerator - function that returns a string representation of the values to group the array by
     */
    public static groupBy(array: any[], groupKeyGenerator: (element) => string): IDictionary<any[]> {
      if (cmnExp.isUndefinedOrNull(array) || cmnExp.isUndefinedOrNull(groupKeyGenerator)) {
        return undefined;
      }
      let bins: IDictionary<any> = {};
      array.forEach((element) => {
        let propValue = groupKeyGenerator(element);
        if (!bins.hasOwnProperty(propValue)) {
          bins[propValue] = [];
        }
        bins[propValue].push(element);
      });
      return bins;
    }
}
