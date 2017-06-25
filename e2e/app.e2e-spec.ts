import { browser, element, by } from 'protractor';

describe('Hero details E2E Tests', function () {

  let expectedAppName = 'Tour of Heroes';
  let expectedTitle = 'My Heroes!';

  beforeEach(function () {
    browser.get('');
  });

  it('should display: ' + expectedAppName, function () {
    expect(element(by.css('h1')).getText()).toEqual(expectedAppName);
  });

  it('should display: ' + expectedTitle, function () {
    expect(element(by.css('h2')).getText()).toEqual(expectedTitle);
  });

});
