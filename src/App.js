import React, { Component } from 'react';
import MyComponet from './MyComponet';
import MyComponent from './MyComponet';

class App extends Component {
  render() {
    const name = '리액트';
    return (
      <>
        <MyComponent>리액트</MyComponent>
      </>
    );
  }
}

export default App;
