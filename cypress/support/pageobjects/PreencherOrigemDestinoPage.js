/// <reference types="cypress"/>
const ambiente = Cypress.config("baseUrl")
import PreencherOrigemDestinoElements from '../elements/PreencherOrigemDestinoElements'

const preencherCampoOrigemDestino = new PreencherOrigemDestinoElements

class PreencherOrigemDestinoCampos {


    //Chamada da nossa baseUrl
    AbrirBrowser (){
        cy.visit(ambiente)
    }
    //Preencher Campos Origem e Destino

    PreencherOrigemDestinoCamposForm (){
    //cy.get(preencherCampoOrigemDestino.ContainerName()).should('contain' , 'Full Name')
        cy.get(preencherCampoOrigemDestino.CampoOrigem()).type('Sao Paulo')
        cy.wait(1000)
        cy.get(preencherCampoOrigemDestino.ClicarSugestaoOrigem()).click()
        cy.get(preencherCampoOrigemDestino.CampoDestino()).type('Rio de Janeiro')
        cy.wait(1000)
        cy.get(preencherCampoOrigemDestino.ClicarSugestaoDestino()).click()
    }



    visualizarTest (){
        cy.screenshot
        cy.wait(1000)
    }
}
export default PreencherOrigemDestinoCampos;