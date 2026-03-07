import React, { Component } from "react";
import { Navigate } from "react-router-dom";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Option 1: render Maintenance component (URL stays the same)
      // return <Maintenance />;

      // Option 2: navigate to a dedicated maintenance route
      return <Navigate to="/maintenance" replace />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;