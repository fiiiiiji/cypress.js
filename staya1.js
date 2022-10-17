
describe('Напиши автотесты для формы логина и пароля на Staya', function () {
   it('ошибка авторизации', function () {
        cy.visit('https://staya.dog/');
        cy.get("#stickyHeader > section.header-bottom.transition-header > div > div > a").click();
        cy.get("#__layout > div > main > div > div > div > section > div > form > input:nth-child(1)").type('ya.inferno1@yandex.ru');
        cy.get("#__layout > div > main > div > div > div > section > div > form > input:nth-child(2)").type('34rr2089');
        cy.get("#__layout > div > main > div > div > div > section > div > form > button > span").click();
        cy.contains('Невозможно войти с предоставленными учетными данными.');
    })
})