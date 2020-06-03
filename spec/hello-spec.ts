import hello from '../hello';

describe("jasmine", () => {
  beforeEach(() => {
    jasmine.clock().install();
  })

  afterEach(() => {
    jasmine.clock().uninstall();
  })

  it("can mock clock", async () => {
    const message = hello();
    jasmine.clock().tick(200000);
    expect(await message).toBe("Hello,world!");
  });
});
