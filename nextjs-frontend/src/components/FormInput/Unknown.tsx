import * as React from 'react';
import { ReactNode } from 'react';

export const MyUnknown = ({ key }) => {
  return {
    carve(): ReactNode {
      return <div key={key}></div>;
    }
  };
};
