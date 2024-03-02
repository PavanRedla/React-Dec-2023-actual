import React, { Component } from "react";

export default class MyErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so that next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    console.log(error, errorInfo);
    // You can also log error messages to an error reporting service here
    // if you have a common file to render error we can call that component by passing these error and errorInfo
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Error path
      return <h2>Something went wrong, component cannot be loaded.</h2>;
    } else {
      // Normally, just render children
      return this.props.children;
    }
  }
}
