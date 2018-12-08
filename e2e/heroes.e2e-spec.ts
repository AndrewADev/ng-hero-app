import { HeroesPage } from './heroes.po';

describe('ng-hero-app HeroesPage', () => {
    let page: HeroesPage;

    beforeEach(() => {
        page = new HeroesPage();
    });


    describe('when adding a new Hero', () => {
         const testHeroName = 'Testor';

        // NOTE: I want the equivalent of NUnit's (or I think JUnit's) "Assume"
        //  for bailing on this test if we have unexpected data, but haven't
        //  found a way to call that out so far.
        it('should not contain our test hero to be added', async () => {
            const names = await page.getHeroNames();
            expect(names).not.toContain(testHeroName);
        });

        it('should add a new Hero', async () => {
            page.navigateTo();
            page.addHero(testHeroName);
            const heroNames = await page.getHeroNames();
            expect(heroNames.some(heroLabel => /.*Testor/.test(heroLabel))).toBeTruthy();
        });
    });
});
