import { TimesheetWebAppPage } from './app.po';

describe('timesheet-web-app App', function() {
  let page: TimesheetWebAppPage;

  beforeEach(() => {
    page = new TimesheetWebAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
