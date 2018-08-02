import {StringHelpers as strHlp} from './string-helpers';
import {IDictionary} from '../interfaces/i-dictionary';


describe('Shared Util: String Helpers', () => {
  describe('replaceAll: Replaces values on a string from a given dictionary', () => {
    it('Returns the passed string if not given a replace dictionary', () => {
      let result = strHlp.replaceAll('this is my test string with foo!', null);

      expect(result).toEqual('this is my test string with foo!');
    });

    it('Returns a string using replacements from a dictionary', () => {
      let replaceDictionary: IDictionary<string> = {
        'foo': 'bar',
        'test': 'testing'
      };

      let result = strHlp.replaceAll('this is my test string with foo!', replaceDictionary);

      expect(result).toEqual('this is my testing string with bar!');
    });
  });

  describe('slug: Slug a given string', () => {
    it('Returns a string with spaces replaced', () => {
      let result = strHlp.slug('foo bar');

      expect(result).toEqual('foo-bar');
    });

    it('Returns a string with ampersands replaced', () => {
      let result = strHlp.slug('foo & bar');

      expect(result).toEqual('foo-and-bar');
    });

    it('Returns a string with non-word characters removed', () => {
      let result = strHlp.slug('foo|bar');

      expect(result).toEqual('foobar');
    });

    it('Returns a string with multiple, consecutive hyphens condensed', () => {
      let result = strHlp.slug('foo--bar');

      expect(result).toEqual('foo-bar');
    });

    it('Returns a string with front and ending spaces removed', () => {
      let result = strHlp.slug(' foo & bar ');

      expect(result).toEqual('foo-and-bar');
    });

    it('Returns a string converted to lowercase', () => {
      let result = strHlp.slug('FOO BAR');

      expect(result).toEqual('foo-bar');
    });

    it('Returns an array of slugged strings', () => {
      let result = strHlp.slug(['foo bar', 'bar to the foo', 'FOO & BAR --']);

      expect(result).toEqual(['foo-bar', 'bar-to-the-foo', 'foo-and-bar-']);
    });

    it('Returns non-strings to strings', () => {
      let result = strHlp.slug([3, null, undefined, 'test']);

      expect(result).toEqual(['3', '', '', 'test']);
    });
  });

  describe('unslug: Unslugs a given string', () => {
    it('Returns a string with hyphens replaced by spaces', () => {
      let result = strHlp.unslug('foo-bar');

      expect(result).toEqual('foo bar');
    });
  });

  describe('pluralize: Pluralizes a given string', () => {
    it('Returns a string that ends in an s or z', () => {
      let result = strHlp.pluralize('eggs');
      let result2 = strHlp.pluralize('toastz');

      expect(result).toEqual('eggs');
      expect(result2).toEqual('toastz');
    });
    it('Returns a pluralized string when given a string that doesnt end in s or z', () => {
      let result = strHlp.pluralize('omelet');

      expect(result).toEqual('omelets');
    });
  });
});
