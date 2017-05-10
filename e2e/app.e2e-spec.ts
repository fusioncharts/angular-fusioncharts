import { Ng2FcPage } from './app.po';

describe('ng2-fc App', () => {
  let page: Ng2FcPage;

  beforeEach(() => {
    page = new Ng2FcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
