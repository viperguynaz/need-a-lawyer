import { NumberUtils } from './number-utils';

describe('Shared Util: NumderUtils', () => {
  
      it('Returns 100 * 1.60934', () => {
        const result = NumberUtils.milesToKilometers(100);  
        expect(result).toEqual(160.934);
      });

});