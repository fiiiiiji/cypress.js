
describe('Напиши автотест на проверку логики восстановления пароля:', function () {
   it('Вход не удался', function () {
        cy.visit('https://login.qa.studio');
        cy.get("#mail").type('german@dolnikov.ru');
        cy.get("#pass").type('iLoveqastudio2');
        cy.get("#loginButton").click();
        cy.contains('Такого логина или пароля нет');
    })
})
