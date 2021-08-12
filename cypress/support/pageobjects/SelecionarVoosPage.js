/// <reference types="cypress"/>
const ambiente = Cypress.config("baseUrl")

import SelecionarVoosElements from "../elements/SelecionarVoosElements";
const selecionarVoos = new SelecionarVoosElements

class selecionarvoosIdaeVolta {

SelecionarVoos (){

cy.get(selecionarVoos.CampoMilhasIda()).click({force:true})
cy.wait(2000)
cy.get(selecionarVoos.CampoMilhasVolta()).click({force:true})
cy.wait(2000)
cy.get(selecionarVoos.CampoTaxasMilha()).click({force:true})
cy.wait(2000)
cy.get(selecionarVoos.CampoLieAceito()).click({force:true})
cy.wait(2000)
cy.get(selecionarVoos.BotaoContinuar()).click({force:true})

}

}

export default selecionarvoosIdaeVolta;

