import React from "react";
import { render } from "react-dom";
//
import { ErrorBoundary } from "./ErrorBoundary";

class Child extends React.Component {
  state = {
    errorMe: false
  };
  render() {
    return (
      <button
        onClick={() =>
          this.setState(prevState => ({
            ...prevState,
            errorMe: true
          }))
        }
      >
        Click to break me
        {/* eslint-disable-next-line react/jsx-no-undef */}
        {this.state.errorMe ? <IDontExist /> : <span />}
      </button>
    );
  }
}

const App = () => (
  <ErrorBoundary>
    <h2>I'm wrapped in an ErrorBoundary</h2>
    <Child />
  </ErrorBoundary>
);

render(<App />, document.getElementById("root"));
