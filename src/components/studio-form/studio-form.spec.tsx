import { newSpecPage } from '@stencil/core/testing';
import { StudioForm } from './studio-form';

describe('studio-form', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StudioForm],
      html: `<studio-form></studio-form>`,
    });
    expect(page.root).toMatchSnapshot()
  });
});
