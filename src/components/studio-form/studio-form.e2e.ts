import { newE2EPage } from '@stencil/core/testing';

describe('studio-form', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<studio-form></studio-form>');

    const element = await page.find('studio-form');
    expect(element).toHaveClass('hydrated');
  });
});
