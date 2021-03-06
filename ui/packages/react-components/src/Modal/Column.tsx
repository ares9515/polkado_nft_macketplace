// Copyright 2017-2021 @polkadot/react-components authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ColumnsProps } from './types';

import React from 'react';
import styled from 'styled-components';

function Column ({ children, className = '' }: ColumnsProps): React.ReactElement<ColumnsProps> {
  return (
    <div className={`ui--Modal-Column ${className}`}>
      {children}
    </div>
  );
}

export default React.memo(styled(Column)`
  padding: 0.25em 0;

  &:nth-child(1) {
    flex: 100%;
    max-width: 100%;
  }

  &:nth-child(2) {
    display: none;
    flex: 0%;
  }

  @media (min-width: 1024) {
    &:nth-child(1),
    &:only-child {
      flex: 0 65%;
      max-width: 65%;
    }

    &:nth-child(2) {
      box-sizing: border-box;
      display: block;
      flex: 0 34%;
      font-size: 0.95rem;
      opacity: 0.75;
      padding: 0.25em 0.5rem;
    }
  }
`);
