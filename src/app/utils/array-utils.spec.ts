
import {ArrayUtils} from './array-utils';

describe('Shared Util: Array Utils', () => {
  let anObject: Object = {
    'Stuff1': {wizard: 'Greatest', description: 'White Owl'},
    'Weather': {pestilence: 'negated', description: 'White Owl'},
    'Nonesuch': {occupation: 'Intelligent', description: 'Turquoise Lemon'}
  };
  let data: any[] = ['Saab', 'Volvo', 'BMW'];
  let data2: any[] = ['Saab', 'Volvo', 'BMW', 'Ford'];
  let data3: any[] = ['Saab', 'Volvo', 'BMW', anObject];
  let data4: any[] = [{firstN: 'Joe', lastN: 'Brown'},
    {firstN: 'Billy', lastN: 'Mac'}, {firstN: 'Zeus', lastN: 'Thor'}];
  let data5: any[] = [
    {
      firstN: 'Joe',
      lastN: 'Brown',
      job: { title: 'Butcher' }
    },
    {
      firstN: 'Billy',
      lastN: 'Mac',
      job: { title: 'Baker' }
    },
    {
      firstN: 'Zeus',
      lastN: 'Thor',
      job: { title: 'Candlestick Maker' }
    }
  ];

  let data6: any[] = [
    {
      firstN: 'Joe',
      lastN: 'Brown',
      job: { title: 'Butcher' }
    },
    {
      firstN: 'Billy',
      lastN: 'Mac',
      job: { title: 'Baker' }
    },
    {
      firstN: 'Zeus',
      lastN: 'Thor',
      job: { title: 'Candlestick Maker' }
    },
    {
      firstN: 'Jim',
      lastN: 'Shoes',
      job: { title: 'Baker' }
    },
    {
      firstN: 'Willy',
      lastN: 'Mac',
      job: { title: 'Baker' }
    },
  ];



  describe ('areEqual: used test if two arrays are equal', () => {
    it('compare two empty arrays', () => {
      const result = ArrayUtils.areEqual([], []);
      expect(result).toEqual(true);
    });

    it('compare array to null ', () => {
      const result = ArrayUtils.areEqual(null, []);
      expect(result).toEqual(false);
    });

    it('compare array to undefined ', () => {
      const result = ArrayUtils.areEqual(undefined, []);
      expect(result).toEqual(false);
    });


    it('compare two arrays same length', () => {
      const result = ArrayUtils.areEqual(data, data);
      expect(result).toEqual(true);
    });

    it('compare two arrays different length', () => {
      const result = ArrayUtils.areEqual(data, data2);
      expect(result).toEqual(false);
    });

    it('compare two arrays with nested object', () => {
      let abc = ['Saab', 'Volvo', 'BMW', anObject];
      const result = ArrayUtils.areEqual(abc, data3);
      expect(result).toEqual(true);
    });

    it('compare two arrays with incorrect order', () => {
      let abc =  ['Volvo', 'BMW', 'Saab'];
      const result = ArrayUtils.areEqual(data, abc);
      expect(result).toEqual(false);
    });
  });

  describe ('sortArrayNumeric: used to test sorting method', () => {
    it ('should sort an array numerically', () => {
      let testArray = [1, 5, 4, 2, 3];
      let result = ArrayUtils.sortArrayNumeric(testArray);
      expect(result[0]).toEqual(1);
      expect(result[4]).toEqual(5);
    });
  });

  describe ('sortByKey: used test object array is sorted by key', () => {
    it ('should sort an undefined array', () => {
      let result = ArrayUtils.sortByKey(undefined, 'firstN');
      expect(result).toBeUndefined();
    });
    it ('should sort an undefined key', () => {
      let result = ArrayUtils.sortByKey(data4, undefined);
      expect(result.length).toEqual(3);
    });
    it ('should sort an empty array', () => {
      let result = ArrayUtils.sortByKey([], 'firstN');
      expect(result.length).toEqual(0);
    });
    it ('should sort an object array default asc order', () => {
      let result = ArrayUtils.sortByKey(data4, 'firstN');
      expect(result[0].firstN).toEqual('Billy');
    });
    it ('should sort an object array in desc order', () => {
      let result = ArrayUtils.sortByKey(data4, 'firstN', false);
      expect(result[0].firstN).toEqual('Zeus');
    });
    it ('should sort an object array in asc order', () => {
      let result = ArrayUtils.sortByKey(data4, 'lastN', true);
      expect(result[0].lastN).toEqual('Brown');
    });
  });

  describe ('sortByNestedObjectKey: test object array is sorted by nested object property value', () => {
    let keySelector = (element) => element.job.title;
    it ('should sort an undefined array', () => {
      let result = ArrayUtils.sortByNestedObjectKey(undefined, keySelector);
      expect(result).toBeUndefined();
    });
    it ('should sort when keySelector is undefined', () => {
      let result = ArrayUtils.sortByNestedObjectKey(data5, undefined);
      expect(result.length).toEqual(3); 
    });
    it ('should sort an empty array', () => {
      let result = ArrayUtils.sortByNestedObjectKey([], keySelector);
      expect(result.length).toEqual(0);
    });
    it ('should sort array in ascending order by default', () => {
      let result = ArrayUtils.sortByNestedObjectKey(data5, keySelector);
      expect(result[0].job.title).toEqual('Baker');
    });
    it ('should sort array in descencing order', () => {
      let result = ArrayUtils.sortByNestedObjectKey(data5, keySelector, false);
      expect(result[0].job.title).toEqual('Candlestick Maker');
    });
    it ('should sort array in ascending order', () => {
      let result = ArrayUtils.sortByNestedObjectKey(data5, keySelector, true);
      expect(result[0].job.title).toEqual('Baker');
    });
  });

  describe ('groupBy: test that object array is grouped by equality of a property value', () => {
    it ('should return undefined when array is undefined', () => {
      let keyGenerator = (element) => element.job.title;
      let result = ArrayUtils.groupBy(undefined, keyGenerator);
      expect(result).toBeUndefined();
    });
    it ('should return undefined when array is null', () => {
      let keyGenerator = (element) => element.job.title;
      let result = ArrayUtils.groupBy(null, keyGenerator);
      expect(result).toBeUndefined();
    });
    it ('should return undefined when groupKeyGenerator is undefined', () => {
      let result = ArrayUtils.groupBy(data6, null);
      expect(result).toBeUndefined();
    });
    it ('should group array based on single property', () => {
      let keyGenerator = (element) => element.job.title;
      let result = ArrayUtils.groupBy(data6, keyGenerator);
      expect(result['Baker'].length).toEqual(3);
      expect(result['Baker'][0].firstN).toEqual('Billy');
      expect(result['Baker'][1].firstN).toEqual('Jim');
      expect(result['Baker'][2].firstN).toEqual('Willy');
    });

    it ('should group array based on multiple properties', () => {
      let keyGenerator = (element) => `${element.job.title}|${element.lastN}`;
      let result = ArrayUtils.groupBy(data6, keyGenerator);
      expect(result['Baker|Mac'].length).toEqual(2);
      expect(result['Baker|Mac'][0].firstN).toEqual('Billy');
      expect(result['Baker|Mac'][1].firstN).toEqual('Willy');
      expect(result['Baker|Shoes'].length).toEqual(1);
      expect(result['Baker|Shoes'][0].firstN).toEqual('Jim');
    });
  });
});

