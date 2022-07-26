import React, { memo } from 'react';

export const ConditionalWrapper = memo(({ condition, wrapper, children }) =>
  condition ? wrapper(children) : children,
);

ConditionalWrapper.displayName = 'ConditionalWrapper';
