/* global Given, When, Then, And */


import PreencherOrigemDestinoCampo from '../pageobjects/PreencherOrigemDestinoPage'
const preencherOrigemDestino = new PreencherOrigemDestinoCampo

Given(/^que eu esteja no site Smilles$/, () => {
    preencherOrigemDestino.AbrirBrowser();
});
When(/^clicar no campo Partindo de$/, () => {
    preencherOrigemDestino.PreencherOrigemDestinoCamposForm();
});

And(/^no campo Destino$/, () => {
    //preencherOrigemDestino.PreencherOrigemDestinoCamposForm();
});

Then(/^preencho com as informações Sao Paulo e Rio de Janeiro$/, () => {
    preencherOrigemDestino.visualizarTest();
});

