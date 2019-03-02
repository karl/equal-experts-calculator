# Equal Experts Tech Test - Karl O'Keeffe

This was a really enjoyable tech test!

My code is available here:

https://github.com/karl/equal-experts-calculator

An online demo is available here:

https://equal-experts-calculator.netlify.com/


## Approach

The GitHub history provides a great way to see the approach I took to solving this problem:

https://github.com/karl/equal-experts-calculator/commits/master

### Deploys (~10 mins)

I like to develop and release incrementally, so the first thing I do on any new project is set up source control and deploys.

The first 10 minutes were spent creating the GitHub repo, setting up the Create React App scaffolding, and automating deployments to Netlify.

### Tooling (~10 mins)

Next up was to get some tooling in place that is invaluable in maintaining speed of development. In this case setting up ESLint and Prettier.

### Spike (~30 mins)

Once the deploys and tooling were in place the next step was a quick spike/prototype of how to build a working calculator. I've never written a calculator before, so I needed a bit of trial and error to work out how to sensibly handle `=` (or if it was even needed!) and where the logic to handle consecutive operator presses should live.

### Refactor and basic test suite (~15 mins)

With the spike done I then tackled refactoring the code (in the case the only thing that really needed to be done was moving the Calculator code to it's own module).

Then I got a basic test suite up and running. I took the chance to use `react-testing-library` which I've heard good things about, but never used myself.

### Make tests easier to write (~10 mins)

With some initial tests in place, I was worried that the verbose nature of the tests would make them slow to write and slow for others to understand. I spent 10 minutes creating some small helper functions for calculator specific tests.

### Comprehensive tests (~10 mins)

The helper functions I created above made it very quick and easy to write tests to cover all the remaining functionality of the calculator.

### Styling (~15 mins)

I was running low on time by this point, so I threw together the simplest styling I could that would make the calculator look OK, and fit in with the Equal Experts branding.

### Finishing off (~10 mins)

With the time limit up I fleshed out the `README` ensuring it had the version of the tech test.


## Trade offs

While I'm happy with the result I had to make some trade offs to get it done on time:

- You cannot enter numbers with a decimal point (although the calculator should handle results with a decimal point).
- The layout of the buttons is pretty poor. With more time I would have had a separate column for the operator buttons, and given them a different colour.
