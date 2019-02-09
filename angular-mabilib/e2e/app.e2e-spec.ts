import { AngularMabilibPage } from './app.po';

describe('angular-mabilib App', () => {
  let page: AngularMabilibPage;

  beforeEach(() => {
    page = new AngularMabilibPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
