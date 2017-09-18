import { SportsQuizPage } from './app.po';

describe('sports-quiz App', () => {
  let page: SportsQuizPage;

  beforeEach(() => {
    page = new SportsQuizPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
