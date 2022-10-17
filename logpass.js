
describe('Напиши автотест на проверку логики восстановления пароля:', function () {
   it('Вход', function () {
        cy.visit('https://login.qa.studio');
        cy.get("#mail").type('german@dolnikov.ru');
        cy.get("#pass").type('iLoveqastudio1');
        cy.get("#loginButton").click();
        cy.contains('Авторизация прошла успешно');
    })
})
