import {async} from '@angular/core/testing';
import {AsyncUtils} from './async-utils';

describe('Shared Util: Async Utils', () => {
  describe ('forEach: various tests for processing a loop async', () => {
    it('should return defined promise for null params', () => {
      async(() => {
        let promise = AsyncUtils.forEach(null, null);
        expect(promise).toBeDefined();
      });
    });

    it('should return defined promise for null handler method', () => {
      async(async () => {
        let value = [];
        let promise = await AsyncUtils.forEach(value, null);
        expect(value).toEqual([]);
        expect(promise).toBeDefined();
      });
    });

    it('should return empty array', () => {
      async(async () => {
        let list = [];
        await AsyncUtils.forEach(list, (item: any) => {});
        expect(list.length).toEqual(0);
      });
    });

    it('should return array with modified item via handler',
        async(() => {
          let list = ['a', 'b'];
          AsyncUtils.forEach(list, (item: any) => {
            let index = list.indexOf(item);
            list[index] = 'aaa';
            list.push(item);
          }).then(() => {
            expect(list.length).toEqual(4);
            expect(list[0]).toEqual('aaa');
            expect(list[1]).toEqual('aaa');
            expect(list[2]).toEqual('a');
            expect(list[3]).toEqual('b');
          });

          // async this should evaluate before forEach is processed
          expect(list[0]).toEqual('a');
          expect(list[1]).toEqual('b');
        })
    );

  });


  describe ('nextTick: move function call to back of the event loop', () => {
    it('should moved variable assignment to back of event loop', () => {
      async(async () => {
        let value = 'tttttttttttt';
        let promise = AsyncUtils.nextTick().then(() => {
          value = 'aaa';
        });
        AsyncUtils.nextTick().then(() => {
          expect(value).toEqual('aaa');
        });
        // async this should evaluate before nextTick is processed
        expect(promise).toBeDefined();
        expect(value).toEqual('tttttttttttt');
      });
    });

  });
});


