import {ObjectUtils} from './object-utils';

describe('Shared Util: Object Utils', () => {
  let data = {};
  let originalObject1 = {
    name: 'Rectangle',
    id: 111,
    dimensions: {
      width: 6,
      height: 8
    }
  };
  let originalObject2 = {
    name: 'Square',
    id: 123,
    dimensions: {
      width: 3,
      height: 3
    }
  };

  beforeEach(() => {
    data = {
      'Stuff1': {wizard: 'Greatest', description: 'White Owl'},
      'Weather': {pestilence: 'negated', description: 'White Owl'},
      'Nonesuch': {occupation: 'Intelligent', description: 'Turquoise Lemon'}
    };
  });

  describe('filter', () => {
    it('should return an object that matches applied filters', () => {
      let result = ObjectUtils.filter(data, value => value.description === 'White Owl');
      expect(result['Stuff1']).toEqual({wizard: 'Greatest', description: 'White Owl'});
      expect(result['Weather']).toEqual({pestilence: 'negated', description: 'White Owl'});
      expect(result['Nonesuch']).toBeUndefined();
    });
  });

  describe('toArray: Converts an Object who properties are also Objects into an Array of Objects', () => {
    it('should return an array of objects where each value is the value of its corresponding property on the object' +
      'with an additional property of key added which matches the objects former key.', () => {
      let result = ObjectUtils.toArray(data);
      expect(result[0]['key']).toEqual('Stuff1');
      expect(result[0]['wizard']).toEqual('Greatest');
    });
  });

  describe('fromMap: Convert a Map to an Object', () => {
    it('should return an object from a passed in map', () => {
      let map = new Map();
      map.set('foo', '1');
      map.set('bar', '2');

      let result = ObjectUtils.fromMap(map);

      expect(typeof result).toEqual('object');
      expect(Object.keys(result).length).toEqual(2);
      expect(result['foo']).toEqual('1');
      expect(result['bar']).toEqual('2');
    });
  });


  describe('deepCompare: compare objects, arrays, strings numbers etc', () => {
    it('should deepCompare two empty objects', () => {
      const result = ObjectUtils.deepCompare({}, {});
      expect(result).toEqual(true);
    });

    it('should deepCompare an empty array with a null', () => {
      const result = ObjectUtils.deepCompare([], null);
      expect(result).toEqual(false);
    });

    it('should deepCompare two strings', () => {
      const result = ObjectUtils.deepCompare('abc', 'abc');
      expect(result).toEqual(true);
    });

    it('should deepCompare two numbers', () => {
      const result = ObjectUtils.deepCompare(123, 123);
      expect(result).toEqual(true);
    });

    it('should deepCompare two booleans', () => {
      const result = ObjectUtils.deepCompare(true, true);
      expect(result).toEqual(true);
    });

    it('should deepCompare two objects that are equal', () => {
      let obj1 = { foo: 1, bar: 'monkey'};
      let obj2 = { bar: 'monkey', foo: 1};
      const result = ObjectUtils.deepCompare(obj1, obj2);
      expect(result).toEqual(true);
    });

    it('should deepCompare two objects that are not equal', () => {
      let obj1 = { foo: 1, bar: 'monkey', rock: 'lives'};
      let obj2 = { bar: 'monkey', foo: 1};
      const result = ObjectUtils.deepCompare(obj1, obj2);
      expect(result).toEqual(false);
    });

    it('should deepCompare two nested arrays are not equal', () => {
      let jangoFett = {
        occupation: 'Bounty Hunter',
        genetics: 'super',
        nestedArray: ['hero', null]
      };

      let bobaFett = {
        occupation: 'Bounty Hunter',
        genetics: 'super',
        nestedArray: ['hero', 'zero']
      };

      const result = ObjectUtils.deepCompare(jangoFett, bobaFett);
      expect(result).toEqual(false);
    });

    it('should deepCompare two nested arrays are equal', () => {
      let aObject = {a: 'yWing', b: 'xWing', c: ['lightSaber', 'dark side'] };
      let aDate = new Date();
      let jangoFett = {
        occupation: 'Bounty Hunter',
        genetics: 'super',
        nestedArray: ['hero', aObject],
        date: aDate
      };

      let bobaFett = {
        occupation: 'Bounty Hunter',
        genetics: 'super',
        nestedArray: ['hero', aObject],
        date: aDate
      };

      const result = ObjectUtils.deepCompare(jangoFett, bobaFett);
      expect(result).toEqual(true);
    });


    it('should deepCompare arrays not equal', () => {
      let aObject = {a: 'yWing', b: 'xWing', c: ['lightSaber', 'dark side'] };
      let aDate = new Date();
      let jangoFett = {
        nestedArray: ['hero', aObject],
      };

      let bobaFett = {
        nestedArray: [aObject, 'hero'],
      };

      const result = ObjectUtils.deepCompare(jangoFett, bobaFett);
      expect(result).toEqual(false);
    });


    it('should deepCompare two nested objects that are not equal', () => {
      let aObject = {a: 'yWing', b: 'xWing'};
      let jangoFett = {
        occupation: 'Bounty Hunter',
        genetics: 'super',
        nestedObj: {a: null, b: '123'},
        nestedArray: ['hero', 'zero']
      };

      let bobaFett = {
        occupation: 'Bounty Hunter',
        genetics: 'super',
        nestedObj: aObject,
        nestedArray: ['hero', 'zero']
      };

      const result = ObjectUtils.deepCompare(jangoFett, bobaFett);
      expect(result).toEqual(false);
    });


    it('should deepCompare two nested objects that are equal', () => {
      let aObject = {a: 'yWing', b: 'xWing'};
      let jangoFett = {
        occupation: 'Bounty Hunter',
        genetics: 'super',
        nestedObj: aObject,
        nestedArray: ['hero', 'zero']
      };

      let bobaFett = {
        occupation: 'Bounty Hunter',
        genetics: 'super',
        nestedObj: aObject,
        nestedArray: ['hero', 'zero']
      };

      const result = ObjectUtils.deepCompare(jangoFett, bobaFett);
      expect(result).toEqual(true);
    });


    it('should deepCompare two nested objects with functions not equal', () => {
      let jangoFett = {
        occupation: 'Bounty Hunter',
        aFunction: () => { alert('hi333'); }
      };

      let bobaFett = {
        occupation: 'Bounty Hunter',
        aFunction: () => { alert('hi'); }
      };

      const result = ObjectUtils.deepCompare(jangoFett, bobaFett);
      expect(result).toEqual(false);
    });

    it('should deepCompare two nested objects with functions that are equal', () => {
      let jangoFett = {
        occupation: 'Bounty Hunter',
        aFunction: () => { alert('hi'); }
      };

      let bobaFett = {
        occupation: 'Bounty Hunter',
        aFunction: () => { alert('hi'); }
      };

      const result = ObjectUtils.deepCompare(jangoFett, bobaFett);
      expect(result).toEqual(true);
    });
  });
  
  describe('deepObjectClone: take an input data object and return a deep copy of the input data object', () => {
    it('should create a copy of an object with the same properties', () => {
      let result = ObjectUtils.deepObjectClone(originalObject1);
      expect(result.name).toEqual(originalObject1.name);
      expect(result.id).toEqual(originalObject1.id);
      expect(result.dimensions.width).toEqual(originalObject1.dimensions.width);
      expect(result.dimensions.height).toEqual(originalObject1.dimensions.height);
    });

    it('should create a copy that does not reference the original data object', () => {
      let result = ObjectUtils.deepObjectClone(originalObject1);
      result.name = 'another rectangle';
      result.id = 222;
      expect(originalObject1.name).toEqual('Rectangle');
      expect(originalObject1.id).toEqual(111);
    });

    it('should create a deep copy of an object array', () => {
      let objectArray = [originalObject1, originalObject2, originalObject1];
      let result = ObjectUtils.deepObjectClone(objectArray);
      result[1].name = 'another rectangle';
      result[1].dimensions = { width: 8, height: 10 };
      expect(objectArray[1].name).toEqual('Square');
      expect(objectArray[1].dimensions.height).toEqual(3);
      expect(objectArray[1].dimensions.width).toEqual(3);
    });

    it('should return undefined when input is undefined', () => {
      let result = ObjectUtils.deepObjectClone(undefined);
      expect(result).toBeUndefined();
    });

    it('should return null when input is null', () => {
      let result = ObjectUtils.deepObjectClone(null);
      expect(result).toBeNull();
    });
  });
});
