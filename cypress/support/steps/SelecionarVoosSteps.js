

/* global Given, When, Then, And */

import selecionarvoosIdaeVolta from '../pageobjects/SelecionarVoosPage'
const selecionarVoosSteps = new selecionarvoosIdaeVolta

Given(/^eu escolha o primeiro voo da lista ida e volta$/, () => {
	selecionarVoosSteps.SelecionarVoos();
});

When(/^clicar no campo milhas$/, () => {
	
});

When(/^selecionar o campo milhas na area de taxas$/, () => {
	
});

When(/^clico no campo de aceite de termos$/, () => {
	
});

When(/^clico no botao continuar$/, () => {
	
});

Then(/^será exibida uma pagina para realizar o login$/, () => {
	
});
