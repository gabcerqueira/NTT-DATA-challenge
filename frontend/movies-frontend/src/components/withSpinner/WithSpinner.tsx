import { FunctionComponent } from "react";

import Spinner from "../spinner/Spinner";

interface withSpinnerProps {
  isLoading: boolean;
}

const WithSpinner = <P extends object>(
  WrappedComponent: FunctionComponent<P>
) => {
  return ({ isLoading, ...otherProps }: P & withSpinnerProps) => {
    return isLoading ? (
      <Spinner />
    ) : (
      <WrappedComponent {...(otherProps as P)} />
    );
  };
};

export default WithSpinner;
