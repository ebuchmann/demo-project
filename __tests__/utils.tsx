import React, { FC, ReactElement } from 'react';
import { act, render, RenderOptions, RenderResult } from '@testing-library/react';
import ApolloMockedProvider from './ApolloMockedProvider';
// @ts-ignore
import typeDefs from './typeDefs.graphql';
import mocks from './apolloMocks';

export const wait = (duration: number = 0): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, duration));

export const actWait = (duration: number = 0): Promise<void> => act(() => wait(duration));

const Providers: FC = ({ children }) => (
  <ApolloMockedProvider mocks={mocks} typeDefs={typeDefs}>
    {children}
  </ApolloMockedProvider>
);

export const renderWithProviders = (ui: ReactElement, options?: RenderOptions): RenderResult =>
  render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react';
