import { TheMovieAppPage } from './app.po';

describe('the-movie-app App', () => {
  let page: TheMovieAppPage;

  beforeEach(() => {
    page = new TheMovieAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
