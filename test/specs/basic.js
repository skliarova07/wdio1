const { expect } = require('chai');

describe('Register page', () => {
    before(() => {
        browser.url('https://stage.pasv.us/user/register');
    });

    it('should have the right title', () => {
        const actualTitle = browser.getTitle();
        const expectedTitle = 'Progress Monitor';
        expect(actualTitle).equal(expectedTitle);
    });

    it('should have a correct title', () => {
        const actualH1Text = $('h1').getText();
        const expectedH1Text = 'User Register';
        expect(actualH1Text).equal(expectedH1Text);
    });

    it('should have a correct description', () => {
        const actual = $('p').getText();
        const expected = 'Profiles with fictitious or dummy data will be deleted.';
        expect(actual).equal(expected);
    });

    it('should have a correct submit button text', () => {
        const actual = $('form button').getText();
        const expected = 'Submit';
        expect(actual).equal(expected);
    });

    it('should fill up First Name field', () => {
        const element = $('form input[name = "firstName"]');
        element.setValue('John');
        browser.pause(500)
    });

    it('should fill up Last Name field', () => {
        const element = $('form input[name = "lastName"]');
        element.setValue('Smith');
        browser.pause(500)
    });

    it('should fill up Phone number field', () => {
        const element = $('form input[name = "phone"]');
        element.setValue('11236547890');
        browser.pause(500)
    });

    it('should fill up Email field', () => {
        const element = $('form input[name = "email"]');
        element.setValue('dfghjk@gmail.com');
        browser.pause(500)
    });

    it('should fill up Password field', () => {
        const element = $('form input[name = "password"]');
        element.setValue('wertyuihjk');
        browser.pause(500)
    });

    it('should fill up About field', () => {
        const element = $('form textarea[name = "about"]');
        element.setValue('eat sleep code');
        browser.pause(500)
    });

    it('should fill Goals field', () => {
        const element = $('form textarea[name = "goals"]');
        element.setValue('eat sleep code');
        browser.pause(500)
    });

    it('should choose English level dropdown', () => {
        const element = $('form select[name = "englishLevel"]');
        element.selectByVisibleText('Native');
    });

    it('should choose click button', () => {
        const element = $('form button[type = "submit"]');
        element.click();
        browser.pause(2000)
    });
})