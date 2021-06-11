import Operate from '../../logic/operate';

describe('Logic operators', () => {
  it('Should return an object', () => {
    const result = Operate('2', '4', '+');
    expect(typeof result).toEqual('object');
  });
  it('Should be a function', () => {
    expect(typeof Operate).toEqual('function');
  });
  it('Should sum', () => {
    const result = Operate('2', '4', '+');
    expect(result * 1).toBe(6);
  });
  it('Should sustrate', () => {
    const result = Operate('2', '4', '-');
    expect(result * 1).toEqual(-2);
  });
  it('Should return a multiplied value', () => {
    const result = Operate('2', '4', 'X');
    expect(result * 1).toEqual(8);
  });
  it('Should return divide', () => {
    const result = Operate('2', '4', '/');
    expect(result * 1).toEqual(0.5);
  });
  it('Should return division-by-zero error', () => {
    const result = Operate('2', '0', '/');
    expect(result).toEqual('No division by zero');
  });
});
