function calculateJaccardSimilarity(text1, text2) {
  const set1 = new Set(text1.split(" "));
  const set2 = new Set(text2.split(" "));
  const intersection = new Set([...set1].filter((x) => set2.has(x)));
  const union = new Set([...set1, ...set2]);
  return intersection.size / union.size;
}

function findBestMatch(X, y, inputText) {
  let maxSimilarity = -1;
  let bestMatch = "";

  for (let i = 0; i < X.length; i++) {
    const similarity = calculateJaccardSimilarity(X[i], inputText);
    if (similarity > maxSimilarity) {
      maxSimilarity = similarity;
      bestMatch = y[i];
    }
  }

  return bestMatch;
}

module.exports = findBestMatch;
