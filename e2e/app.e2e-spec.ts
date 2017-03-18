import { IfiPage } from './app.po';

describe('ifi App', () => {
  let page: IfiPage;

  beforeEach(() => {
    page = new IfiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
