
describe('Напиши автотест на проверку логики восстановления пароля:', function () {
   it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio');
        cy.get("#forgotEmailButton").click();
        cy.get("#mailForgot").type('ya.inferno1@yandex.ru');
        cy.get("#restoreEmailButton").click();
        cy.contains('Успешно отправили пароль на e-mail');
    })
})
