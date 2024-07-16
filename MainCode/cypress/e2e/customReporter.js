// customReporter.js
const reporter = (runResults) => {
  const passed = runResults.tests.filter((test) => test.state === "passed");
  const failed = runResults.tests.filter((test) => test.state === "failed");

  console.log("---------Test Results---------------");

  if (failed.length === 0) {
    console.log("---------Test Passed---------------");
    console.log(`Running: ${runResults.specs[0]} (${runResults.tests.length} tests)`);
    runResults.tests.forEach((test) => {
      console.log(`${test.title} (${test.duration}ms)`);
    });
    console.log(`${runResults.tests.length} passing (${runResults.totalDuration / 1000}s)`);
  } else {
    console.log("---------Test Failed---------------");
    console.log(`Running: ${runResults.specs[0]} (${runResults.tests.length} tests)`);
    failed.forEach((test) => {
      console.log(`${test.title} (${test.duration}ms)`);
    });
    console.error(`${failed.length} failing (${runResults.totalDuration / 1000}s)`);
  }
};

module.exports = reporter;
