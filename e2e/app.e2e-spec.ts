import { Primeng2Page } from './app.po';

describe('primeng2 App', function() {
  let page: Primeng2Page;

  beforeEach(() => {
    page = new Primeng2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
