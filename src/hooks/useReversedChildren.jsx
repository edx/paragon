import React, { useMemo } from 'react';

const useReversedChildren = (children) => {
  const reversedChildren = useMemo(
    () => React.Children.toArray(children).reverse(),
    [children],
  );

  return reversedChildren;
};

export default useReversedChildren;
