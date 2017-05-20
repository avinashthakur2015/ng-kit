import { NgkitPage } from './app.po';

describe('ngkit App', () => {
  let page: NgkitPage;

  beforeEach(() => {
    page = new NgkitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
