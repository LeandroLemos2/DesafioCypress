

class SelecionarVoosElements {

CampoMilhasIda = () => {return '#firstFlights > .segmentsFlightsTemplate > .smiles__flight-search > #flightsArticle0 > :nth-child(4) > .column-miles > .miles > [style="position:relative"] > .checkbox > .flightlb'} 
CampoMilhasVolta = () => {return '#secondFlights > .segmentsFlightsTemplate > .smiles__flight-search > #flightsArticle0 > :nth-child(4) > .column-miles > .miles > [style="position:relative"] > .checkbox > .flightlb'}
CampoTaxasMilha = () => {return '#totalMiles'}  
CampoLieAceito = () => {return '.terms > label'}
BotaoContinuar = () => {return '.button > .btn'}
}

export default SelecionarVoosElements;