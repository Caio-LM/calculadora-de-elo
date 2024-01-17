
const nickname = "Gomes"
function calculateMr(win, lose){
    const mr = win - lose
    return mr
}
const mrr = calculateMr(20,2)
function calculatElo(){

    if(mrr <= 10){   
        let elo = "Bronze"

        console.log("O " + nickname + " tem " + mrr + " vitorias e é elo " + elo)
    }

    if(mrr >= 11 && mrr <= 20){
        let elo = "Prata"

        console.log("O " + nickname + " tem " + mrr + " vitorias e é elo " + elo)
    }

    if(mrr >= 21 && mrr <= 30){
        let elo = "Ouro"

        console.log("O " + nickname + " tem " + mrr + " vitorias e é elo " + elo)
    }

    if(mrr >= 31 && mrr <= 40){
        let elo = "Plantina"

        console.log("O " + nickname + " tem " + mrr + " vitorias e é elo " + elo)
    }
    if(mrr >= 41 && mrr <= 50){
        let elo = "Diamante"
        console.log("O " + nickname + " tem " + mrr + " vitorias e é elo " + elo)
    }
    if(mrr >= 51){
        let elo = "Lendario"
        console.log("O " + nickname + " tem " + mrr + " vitorias e é elo " + elo)
    }
}
calculatElo()




