```javascript
//Correct way to update state
this.setState(prevState => ({ count: prevState.count + 1 }));
```