import hello from '../hello';

describe("handling promise in jasmine", () => {
  it(`can't wait after promise resolved using jasmine clock`, () => {
    jasmine.clock().install();

    const cb = jasmine.createSpy('cb');
    hello(cb);
    jasmine.clock().tick(200000);
    expect(cb).toHaveBeenCalledTimes(0);
    
    jasmine.clock().uninstall();
  })

  it("waits after promise resolved using Promise.resolve", (done) => {
    const cb = jasmine.createSpy('cb');
    hello(cb);
    Promise.resolve()
      .then(() => {
        expect(cb).toHaveBeenCalledTimes(1);
        done();
      });
  });

  it("waits after promise resolved using setTimeout", (done) => {
    const cb = jasmine.createSpy('cb');
    hello(cb);
    setTimeout(() => {
      expect(cb).toHaveBeenCalledTimes(1);
      done();
    }, 0);
  });
});
