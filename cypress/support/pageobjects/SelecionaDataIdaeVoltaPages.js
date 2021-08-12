/// <reference types="cypress"/>
const ambiente = Cypress.config("baseUrl")

import SelecionaDataIdaeVoltaElements from '../elements/SelecionaDataIdaeVoltaElements'
const selecionaIdaeVolta = new SelecionaDataIdaeVoltaElements


// SELECIONAR DATA IDA E VOLTA
class PreencherDataIdaeVolta {
    SelecionaIdaeVolta (){
    cy.get(selecionaIdaeVolta.CampoIda()).click()
    cy.get(selecionaIdaeVolta.ClicaDataCampoIda()).click({force:true})
    cy.get(selecionaIdaeVolta.CampoVolta()).click({force:true})
    cy.get(selecionaIdaeVolta.ClicaDataCampoVolta()).click({force:true})

    }

    ClicarBotaoConfirmar (){

        cy.get(selecionaIdaeVolta.ClicarCampoConfirmarData()).click({force:true})
    }

    ClicarBotaoBuscar (){
        cy.get(selecionaIdaeVolta.ClicarCampoBuscarVoo()).click({force:true})
    }
}


export default PreencherDataIdaeVolta;