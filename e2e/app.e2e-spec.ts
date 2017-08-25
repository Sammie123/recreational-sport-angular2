import { RecreationalSportPage } from './app.po';

describe('recreational-sport App', () => {
  let page: RecreationalSportPage;

  beforeEach(() => {
    page = new RecreationalSportPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
