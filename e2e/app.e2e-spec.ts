import { AngularRouterPage } from './app.po';

describe('angular-router App', function() {
  let page: AngularRouterPage;

  beforeEach(() => {
    page = new AngularRouterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
