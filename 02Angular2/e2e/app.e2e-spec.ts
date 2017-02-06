import { Angular2SelfPraPage } from './app.po';

describe('angular2-self-pra App', function() {
  let page: Angular2SelfPraPage;

  beforeEach(() => {
    page = new Angular2SelfPraPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
