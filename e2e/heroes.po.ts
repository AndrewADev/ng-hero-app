import { browser, by, element } from 'protractor';

export class HeroesPage {
  navigateTo() {
    return browser.get('/heroes');
  }

  getInputField() {
    return element.all(by.tagName('label')).first();
  }

  getAddHeroButton() {
    return element(by.buttonText('add'));
  }

  addHero(heroName: string) {
    const field = this.getInputField();
    field.sendKeys(heroName);
    this.getAddHeroButton().click();
  }

  getHeroNames() {
    return element.all(by.id('heroSummaries'))
                               .all(by.className('heroLink'))
                               .map<string>((hero) => hero.getText());
  }

}
