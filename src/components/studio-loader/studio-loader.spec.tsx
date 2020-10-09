import { newSpecPage } from '@stencil/core/testing';
import { StudioLoader } from './studio-loader';

describe('studio-loader', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StudioLoader],
      html: `<studio-loader></studio-loader>`,
    });
    expect(page.root).toMatchSnapshot()
  });
});
