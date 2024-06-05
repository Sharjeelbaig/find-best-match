# find-best-match ✔

A module for finding the best match based on Jaccard similarity.

## Installation ⬇

`npm install find-best-match`

## Usage 🚀

```javascript
const findBestMatch = require("npm install find-best-match");

const data = [
  {
    test3: "Salam Alaikum",
    test4: "Hi there, and walaikum asSalam, whats up! 😊",
  },
  {
    test3: "are you fine",
    test4: "I am fine, thank you for asking",
  },
  {
    test3: "what should I call you",
    test4: "You can call me chatbot",
  },
  {
    test3: "how are your uncle?",
    test4: "My uncle is fine!",
  },
];

const X = data.map((entry) => entry.test3); // Array of texts
const y = data.map((entry) => entry.test4); // Array of corresponding responses

const inputText = "how are your uncle?";

const bestResponse = findBestMatch(X, y, inputText);
console.log(bestResponse); // Outputs: My uncle is fine!
```

# License ©

[MIT](https://raw.githubusercontent.com/Sharjeelbaig/find-best-match/main/LICENSE)
[MIT](https://raw.githubusercontent.com/Sharjeelbaig/find-best-match/main/LICENCE)

# Author 👩‍💻

[Sharjeel Baig](https://sharjeelbaig.github.io/)
