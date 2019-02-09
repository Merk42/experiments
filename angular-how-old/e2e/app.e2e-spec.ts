import { AngularHowOldPage } from './app.po';

describe('angular-how-old App', () => {
  let page: AngularHowOldPage;

  beforeEach(() => {
    page = new AngularHowOldPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
