import * as React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }


  render() {
    // @ts-ignore
    if (this.state.hasError) {
      return <h2>Что-то пошло не так.</h2>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
