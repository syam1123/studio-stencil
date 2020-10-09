import { newE2EPage } from '@stencil/core/testing';

describe('studio-loader', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<studio-loader></studio-loader>');

    const element = await page.find('studio-loader');
    expect(element).toHaveClass('hydrated');
  });
});
