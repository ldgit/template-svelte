import App from './App.svelte';

import { render, screen } from '@testing-library/svelte';

describe('App', () => {
  it('should run', async () => {
    render(App, { name: 'World' });
    expect(await screen.findByText('Hello World!')).toBeInTheDocument();
  });
});
