'use client';

import { Component, type ErrorInfo, type ReactNode } from 'react';

type ClientErrorBoundaryProps = {
  children: ReactNode;
  fallback?: ReactNode;
};

type ClientErrorBoundaryState = {
  hasError: boolean;
};

/**
 * Isolates third-party widget crashes so they don't take down the whole page.
 */
export default class ClientErrorBoundary extends Component<
  ClientErrorBoundaryProps,
  ClientErrorBoundaryState
> {
  state: ClientErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ClientErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    if (process.env.NODE_ENV !== 'production') {
      console.error('ClientErrorBoundary caught:', error, info);
    }
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div className='rounded-lg border border-gray-200 bg-[#F7F9FC] p-6 text-center text-sm text-gray-700'>
            This section could not be loaded. Call{' '}
            <a className='underline text-[#0A2540]' href='tel:7028205408'>
              (702) 820-5408
            </a>{' '}
            for Craig Ranch listings help.
          </div>
        )
      );
    }

    return this.props.children;
  }
}
