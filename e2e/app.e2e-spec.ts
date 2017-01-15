import { B2eSiPage } from './app.po';

describe('b2e-si App', function() {
  let page: B2eSiPage;

  beforeEach(() => {
    page = new B2eSiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
