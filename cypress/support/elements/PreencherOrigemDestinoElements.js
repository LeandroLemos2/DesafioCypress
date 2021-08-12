
// reconhecer CLASSE = .NOMEDACLASSE //
// reconhecer ID = #NOMEDOID ///

//ELEMENTOS SITE SMILLES //
//#inputOrigin (CAMPO DE ORIGEM)
//#inputDestination (CAMPO DESTINO)
// DATA IDA (.smls-hf-main) 10 DIAS PRA FRENTE(.ui-datepicker-group-first > .ui-datepicker-calendar > tbody > :nth-child(3) > :nth-child(6) > .ui-state-default)
// DATA VOLTA (.smls-hf-main) VOLTA >> .ui-datepicker-group-last > .ui-datepicker-calendar > tbody > :nth-child(4) > :nth-child(2) > .ui-state-default

 //ContainerOrigem = () => { return ':nth-child(1) > .col-md-3'}

class PreencherOrigemDestinoElements {
    CampoOrigem = () => {return '#inputOrigin'}
    ClicarSugestaoOrigem = () => {return '#ulOriginAirport > :nth-child(3)'}
    CampoDestino = () => {return '#inputDestination'}
    ClicarSugestaoDestino = () => {return '#ulDestinationAirport > :nth-child(1)'}

}



export default PreencherOrigemDestinoElements;
