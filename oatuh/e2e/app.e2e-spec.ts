import { OatuhPage } from './app.po';

describe('oatuh App', () => {
  let page: OatuhPage;

  beforeEach(() => {
    page = new OatuhPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
