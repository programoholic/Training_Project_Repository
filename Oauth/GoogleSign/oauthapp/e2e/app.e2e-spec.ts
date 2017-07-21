import { OauthappPage } from './app.po';

describe('oauthapp App', () => {
  let page: OauthappPage;

  beforeEach(() => {
    page = new OauthappPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
