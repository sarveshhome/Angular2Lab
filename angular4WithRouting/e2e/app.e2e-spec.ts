import { DemoprojPage } from './app.po';

describe('demoproj App', () => {
  let page: DemoprojPage;

  beforeEach(() => {
    page = new DemoprojPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
