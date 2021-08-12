Feature: Teste Principal
    
    Scenario: Preencher origem e destino da viagem
             Given que eu esteja no site Smilles
             When clicar no campo Partindo de
             And no campo Destino
             Then preencho com as informações Sao Paulo e Rio de Janeiro
    

    Scenario: Selecionar Data ida e Volta
            Given que eu clico no campo de selecionar datas
            When eu escolher as datas
            And clicar em buscar voo
            Then será exibido os voos com os filtros escolhidos


    Scenario: Selecionar Voo
            Given eu escolha o primeiro voo da lista ida e volta
            When clicar no campo milhas
            And selecionar o campo milhas na area de taxas
            And clico no campo de aceite de termos
            And clico no botao continuar
            Then será exibida uma pagina para realizar o login

        
   
     
