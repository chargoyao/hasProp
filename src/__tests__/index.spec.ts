import { hasProp } from '../index';
describe('test hasProp function', () => {
  it('if property has exist', () => {
    const proxy = hasProp({
      age: 10
    });
    expect(proxy.age).toBe(10);
  });
  it('if property has not exist', () => {
    const proxy: {[key: string]: any} = hasProp({
      age: 100
    });
    expect(() => {proxy.name}).toThrow();
  });
});
