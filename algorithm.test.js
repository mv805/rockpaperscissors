const { getComputerChoice } = require("./algorithm");

function getRandomDist() {
  const ITERATIONS = 10000;
  const testSamples = {
    rock: 0,
    scissors: 0,
    paper: 0,
  };

  for (let index = 0; index < ITERATIONS; index++) {
    testSamples[getComputerChoice()]++;
  }

  return {
    rockDist: Math.trunc((testSamples.rock / ITERATIONS) * 100),
    paperDist: Math.trunc((testSamples.paper / ITERATIONS) * 100),
    scissorsDist: Math.trunc((testSamples.scissors / ITERATIONS) * 100),
  };
}

test("Random distribution correct for selection picker", () => {
  const distResults = getRandomDist();
  expect(distResults.paperDist).toBeLessThan(40);
  expect(distResults.rockDist).toBeLessThan(40);
  expect(distResults.scissorsDist).toBeLessThan(40);
  console.log(distResults);
});
