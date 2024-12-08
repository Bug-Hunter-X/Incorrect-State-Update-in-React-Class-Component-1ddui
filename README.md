# Incorrect State Update in React Class Component
This repository demonstrates a common mistake when updating state in React class components: directly using `this.state` in the `setState` callback. This can lead to unexpected behavior because `setState` is asynchronous and `this.state` might not reflect the latest value.

## Problem
The example `bug.js` shows the incorrect way to increment a counter.  Because `setState` is asynchronous, the value of `this.state.count` might not be immediately updated, leading to incorrect calculations or rendering issues. 

## Solution
The correct approach, demonstrated in `bugSolution.js`, is to use the functional update form of `setState`. This ensures that the update is based on the most current state value, preventing the race condition.