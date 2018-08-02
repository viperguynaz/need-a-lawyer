import { FromSlugPipe } from './from-slug.pipe';

describe('FromSlugPipe', () => {

  it('create an instance', () => {
    const pipe = new FromSlugPipe();
    expect(pipe).toBeTruthy();
  });

  it('replaces hyphens with spaces', () => {
    const val = new FromSlugPipe().transform('aaa-bbb-ccc');
    expect(val).toEqual('aaa bbb ccc');
  });

});
