/* global Given, When, Then, And */

import PreencherDataIdaeVolta from '../pageobjects/SelecionaDataIdaeVoltaPages'
const preencherIdaeVoltaeBuscar = new PreencherDataIdaeVolta

Given(/^que eu clico no campo de selecionar datas$/, () => {
	preencherIdaeVoltaeBuscar.SelecionaIdaeVolta();
});

When(/^eu escolher as datas$/, () => {
	//preencherIdaeVoltaeBuscar.SelecionaIdaeVolta();
});

And(/^clicar em buscar voo$/, () => {
	preencherIdaeVoltaeBuscar.ClicarBotaoConfirmar();
});

Then(/^será exibido os voos com os filtros escolhidos$/, () => {
	preencherIdaeVoltaeBuscar.ClicarBotaoBuscar();
});
