import hello from '../hello';

describe("A suite", function () {
  it("contains spec with an expectation", function () {
    expect(hello()).toBe("Hello,world!");
  });
});
