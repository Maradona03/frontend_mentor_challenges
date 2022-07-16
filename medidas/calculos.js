

/*Rete o nome no campo Resultados*/
function nome(){

let nome_com = document.querySelector('#nome').value;
     document.querySelector('#nome_resul').value=nome_com;
}


/*seleciona o Valor do Sexo e a Fórmula de Calculo*/
function sexo_selecionado(){

      let sexo =document.querySelector('#sexo').value;
       Number (document.querySelector('#sexo_resul').value = sexo);
        console.log(sexo);
        sexo == "masculino" ? percentual= percentualH  :  percentual=percentualM
  
        console.log(sexo_selecionado)
}

/*Função de Resultado do Percentual de gordura (Botão Calcular)*/
function percentual(){

}


/*repete o Peso no campo Resultados*/
function peso(){

    let peso = Number (document.querySelector('#peso').value);
    Number (document.querySelector('#peso_atual').value=peso);

} 

/*Repete o Peso Anterior no campo Resultados*/
function peso_anterior(){

    let pesoAnterior = Number (document.querySelector('#peso_anterior').value);
    Number (document.querySelector('#peso_ant_resul').value=pesoAnterior);

}


/*Calcula a difernça entre o Peso Atual e o Anterior*/
function diferencaEntrePesos(){
  let pesoAtual =Number (document.querySelector('#peso').value);
  let pesoAnterior =Number (document.querySelector('#peso_ant_resul').value);
  let diferenca = Number(pesoAtual) - Number(pesoAnterior);
  document.querySelector('#diferenca_pesos').value = diferenca.toFixed(3);

}


/*Repete a Gordura anterior no Campo Resultados*/
function gorduraAnterior(){

    let gorduraAnt = Number (document.querySelector('#gordura_anterior').value);
    Number (document.querySelector('#percent_anterior').value=gorduraAnt);

}



/*Calcula a difernça entre o Percentual de Gordura Atual e o Anterior*/
function diferencaEntrePercentuais(){
  let persentualAtual =Number (document.querySelector('#percent_atual').value);
  let persentualAnterior =Number (document.querySelector('#percent_anterior').value);
  let diferenca = Number(persentualAtual) - Number(persentualAnterior);
 Number (document.querySelector('#direfenca_percent').value = diferenca.toFixed(1));

}







/* Percentual de Gordura Homens*/
function percentualH(){
  let triceps =Number (document.querySelector('#tri').value);
  let panturrilha =Number (document.querySelector('#pant').value);
  let peito =Number (document.querySelector('#pei').value);
  let subescapular =Number (document.querySelector('#sub').value);
  let suprailiaca =Number (document.querySelector('#supra').value);
  let abdomem =Number (document.querySelector('#abd').value);
  let coxa =Number (document.querySelector('#coxa').value);

  let resultado = triceps + panturrilha + peito + subescapular + suprailiaca + abdomem + coxa;

  let  soma_dobras =Number (resultado);
  let soma_potencia =Number (resultado)**2;
  let idade = Number (document.querySelector('#idade').value);
  let fracao_mult_dobras =Number (0.00043499)*soma_dobras;
  let  fracao_mult_dobras_potencia =Number (0.00000055)* Number (soma_potencia);
  let fracao_idade =Number (0.00028826)*idade;

  let resul_densidade =Number (1.112) - Number (fracao_mult_dobras) + Number (fracao_mult_dobras_potencia) - Number (fracao_idade);

  let divisao = Number (4.95)/ Number (resul_densidade);
  let subtracao =Number (divisao-4.50);
  let soma_total =Number (subtracao*100);

  let resultado_per = Number (soma_total);
    document.querySelector('#percent_atual').value=resultado_per.toFixed(1);

}

/* Percentual de Gordura Mulheres*/
function percentualM(){
  let triceps =Number (document.querySelector('#tri').value);
  let panturrilha =Number (document.querySelector('#pant').value);
  let biceps =Number (document.querySelector('#biceps').value);
  let subescapular =Number (document.querySelector('#sub').value);
  let suprailiaca =Number (document.querySelector('#supra').value);
  let abdomem =Number (document.querySelector('#abd').value);
  let coxa =Number (document.querySelector('#coxa').value);

  let resultado = triceps + biceps + panturrilha + subescapular + suprailiaca + abdomem + coxa;

  let  soma_dobras =Number (resultado);
  let soma_potencia =Number (resultado)**2;
  let idade = Number (document.querySelector('#idade').value);
  let fracao_mult_dobras =Number (0.00046971)*soma_dobras;
  let  fracao_mult_dobras_potencia =Number (0.00000056)* Number (soma_potencia);
  let fracao_idade =Number (0.00012828)*idade;

  let resul_densidade =Number (1.097) - Number (fracao_mult_dobras) + Number (fracao_mult_dobras_potencia) - Number (fracao_idade);

  let divisao = Number (4.95)/ Number (resul_densidade);
  let subtracao =Number (divisao-4.50);
  let soma_total =Number (subtracao*100);

  let resultado_per = Number (soma_total);
    document.querySelector('#percent_atual').value=resultado_per.toFixed(1);

}

