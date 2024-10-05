export const OfcLinks = {
  github: "https://git.new/pvOF6aq",
  twitter: "https://x.com/SaidevDhal",
  instagram: "https://www.instagram.com/dev.unfazed",
  sponsor: "https://github.com/sponsors/SkidGod4444",
  portfolio: "http://devwtf.in",
};

export const beforeCode = `function sumArrayTraditional(arr: number[]): number {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Usage:
const numbers1 = [1, 2, 3, 4, 5];
console.log(sumArrayTraditional(numbers1));  // Output: 15
`

export const afterCode = `function sumArrayFunctional(arr: number[]): number {
  return arr.reduce((acc, current) => acc + current, 0);
}

// Usage:
const numbers2 = [1, 2, 3, 4, 5];
console.log(sumArrayFunctional(numbers2));  // Output: 15
`
