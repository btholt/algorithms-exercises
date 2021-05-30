// here are your hashing functions. it's not essential you know how they work
// a library called xxhashjs is being loaded (as XXH) and we're using three different
// instances of that as your hashing functions
const XXH = require("xxhashjs");
const h1 = (string) =>
  Math.abs(XXH.h32(0xabcd).update(string).digest().toNumber() % 100);
const h2 = (string) =>
  Math.abs(XXH.h32(0x1234).update(string).digest().toNumber() % 100);
const h3 = (string) =>
  Math.abs(XXH.h32(0x6789).update(string).digest().toNumber() % 100);

// fill out these two methods
// `add` adds a string to the bloom filter and returns void (nothing, undefined)
// `contains` takes a string and tells you if a string is maybe in the bloom filter
class BloomFilter {
  // you'll probably need some instance variables
  add(string) {
    // code here
  }
  contains(string) {
    // code here
  }
}

// unit tests
// do not modify the below code
describe.skip("BloomFilter", function () {
  let bf;
  beforeEach(() => {
    bf = new BloomFilter();
  });
  test.skip("returns false when empty", () => {
    expect(bf.contains("Brian")).toBe(false);
    expect(bf.contains("Sarah")).toBe(false);
    expect(bf.contains("Simona")).toBe(false);
  });
  test.skip("handles one item", () => {
    expect(bf.contains("Brian")).toBe(false);
    bf.add("Brian");
    expect(bf.contains("Brian")).toBe(true);
    expect(bf.contains("Sarah")).toBe(false);
    expect(bf.contains("Simona")).toBe(false);
  });
  test.skip("handles many items", () => {
    const names = [
      "Brian",
      "Simona",
      "Sarah",
      "Asim",
      "John",
      "Sean",
      "Jessie",
      "Paige",
      "Ashley"
    ];
    names.forEach((item) => bf.add(item));
    names.forEach((item) => expect(bf.contains(item)).toBe(true));
    ["Sam", "Chris", "Taylor", "Florence"].forEach((item) =>
      expect(bf.contains(item)).toBe(false)
    );
  });
});
