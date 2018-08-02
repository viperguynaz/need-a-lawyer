import { ToSlugPipe } from './to-slug.pipe';

describe('ToSlugPipe', () => {
  it('create an instance', () => {
    const pipe = new ToSlugPipe();
    expect(pipe).toBeTruthy();
  });

  it('replaces hyphens with spaces', () => {
    const val = new ToSlugPipe().transform('aaa bbb ccc');
    expect(val).toEqual('aaa-bbb-ccc');
  });

});
