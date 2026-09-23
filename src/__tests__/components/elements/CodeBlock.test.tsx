import { render, screen } from '@testing-library/react';
import React from 'react';

jest.mock('react-syntax-highlighter', () => {
  const PrismLight = ({ children }: { children?: React.ReactNode }) => (
    <pre>{children}</pre>
  );

  PrismLight.registerLanguage = jest.fn();

  return { PrismLight };
});

jest.mock('react-syntax-highlighter/dist/cjs/languages/prism/css', () => ({}));
jest.mock('react-syntax-highlighter/dist/cjs/languages/prism/diff', () => ({}));
jest.mock(
  'react-syntax-highlighter/dist/cjs/languages/prism/javascript',
  () => ({}),
);
jest.mock('react-syntax-highlighter/dist/cjs/languages/prism/tsx', () => ({}));
jest.mock(
  'react-syntax-highlighter/dist/cjs/languages/prism/typescript',
  () => ({}),
);
jest.mock('react-syntax-highlighter/dist/cjs/styles/prism', () => ({
  a11yDark: {},
}));

import CodeBlock from '@/common/components/elements/CodeBlock';

describe('CodeBlock', () => {
  it('renders code and the copy control', async () => {
    const { container } = render(
      <CodeBlock className='language-javascript'>
        {'const answer = 42;\n'}
      </CodeBlock>,
    );

    expect(
      await screen.findByRole('button', { name: 'Copy to Clipboard' }),
    ).toBeInTheDocument();

    expect(container).toHaveTextContent('const answer = 42;');
  });
});
