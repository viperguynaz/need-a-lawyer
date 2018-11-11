// import { CommonExpressions as cmnExp } from './common-expressions';


// describe('Shared Util: Common Expressions', () => {
//   describe('isDefinedAndNotNull: Evaluate value for defined and not null', () => {
//     it('Returns that the passed value is defined and not null', () => {
//       const result = cmnExp.isDefinedAndNotNull('testing');

//       expect(result).toEqual(true);
//     });

//     it('Returns that the passed value is undefined', () => {
//       const result = cmnExp.isDefinedAndNotNull(undefined);

//       expect(result).toEqual(false);
//     });

//     it('Returns that the passed value is null', () => {
//       const result = cmnExp.isDefinedAndNotNull(null);

//       expect(result).toEqual(false);
//     });
//   });

//   describe('isUndefinedOrNull: Evaluate value for undefined or null', () => {
//     it('Returns that the passed value is undefined', () => {
//       const result = cmnExp.isUndefinedOrNull(undefined);

//       expect(result).toEqual(true);
//     });

//     it('Returns that the passed value is null', () => {
//       const result = cmnExp.isUndefinedOrNull(null);

//       expect(result).toEqual(true);
//     });

//     it('Returns that the passed value is defined and not null', () => {
//       const result = cmnExp.isUndefinedOrNull('testing');

//       expect(result).toEqual(false);
//     });
//   });

//   describe('isEmpty: Evaluate value for empty content', () => {
//     it('Returns that the passed value is undefined or null', () => {
//       let result = cmnExp.isEmpty(null);

//       expect(result).toEqual(true);
//     });

//     it('Returns that the passed value is empty when it has an object with no properties', () => {
//       let result = cmnExp.isEmpty({});

//       expect(result).toEqual(true);
//     });

//     it('Returns that the passed value is not empty when it has an object with at least one key', () => {
//       let result = cmnExp.isEmpty({ myProp: 'test' });

//       expect(result).toEqual(false);
//     });

//     it('Returns that the passed value is empty when it has an empty string literal', () => {
//       let result = cmnExp.isEmpty('');

//       expect(result).toEqual(true);
//     });

//     it('Returns that the passed value is not empty when it has a string literal with content', () => {
//       let result = cmnExp.isEmpty('a');

//       expect(result).toEqual(false);
//     });

//     it('Returns that the passed value is empty when it has an empty array', () => {
//       let result = cmnExp.isEmpty([]);

//       expect(result).toEqual(true);
//     });

//     it('Returns that the passed value is not empty when it has an array of content', () => {
//       let result = cmnExp.isEmpty(['a']);

//       expect(result).toEqual(false);
//     });
//   });

//   describe('isNotEmpty: Evaluate value for not empty content', () => {
//     it('Returns that the passed value is empty when it has an empty string literal', () => {
//       let result = cmnExp.isNotEmpty('');

//       expect(result).toEqual(false);
//     });

//     it('Returns that the passed value is not empty when it has a string literal with content', () => {
//       let result = cmnExp.isNotEmpty('a');

//       expect(result).toEqual(true);
//     });
//   });


//   describe('areEqual: Evaluate value for numbers strings arrays or objects', () => {
//     it('Compares two numbers not equal', () => {
//       let result = cmnExp.areEqual(123, 321);
//       expect(result).toEqual(false);
//     });

//     it('Compares two numbers that are equal', () => {
//       let result = cmnExp.areEqual(123, 123);
//       expect(result).toEqual(true);
//     });

//     it('Compares two empty strings', () => {
//       let result = cmnExp.areEqual('', '');
//       expect(result).toEqual(true);
//     });

//     it('Compares null to empty string', () => {
//       let result = cmnExp.areEqual(null, '');
//       expect(result).toEqual(false);
//     });

//     it('Compares two empty objects', () => {
//       let result = cmnExp.areEqual({}, {});
//       expect(result).toEqual(true);
//     });

//     it('Compares undefined to empty object', () => {
//       let something;
//       let result = cmnExp.areEqual(something, {});
//       expect(result).toEqual(false);
//     });

//     it('Compares two objects that are equal', () => {
//       let result = cmnExp.areEqual({a: 'abc'}, {a: 'abc'});
//       expect(result).toEqual(true);
//     });

//     it('Compares two objects that are now equal', () => {
//       let result = cmnExp.areEqual({a: 'abc'}, {a: 'abc2'});
//       expect(result).toEqual(false);
//     });
//   });
// });

