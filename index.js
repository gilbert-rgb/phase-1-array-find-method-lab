function superbowlWin(record) {
    // Find the first record where the result is "W" and return the year.
    const winRecord = record.find(r => r.result === "W");
    return winRecord ? winRecord.year : undefined;
  }

  const sadReality = [ { result: "N/A" }, { result: "N/A" }, { result: "N/A" } ]
expect(superbowlWin(sadReality)).to.equal(undefined)
console.log(sadReality)
  





