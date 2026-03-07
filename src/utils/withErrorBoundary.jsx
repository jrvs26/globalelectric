import React from "react";
import ErrorBoundary from "../components/ErrorBoundary";

export const withErrorBoundary = (Component) => {
    return (
        <ErrorBoundary>
            <Component />
        </ErrorBoundary>
    );
};