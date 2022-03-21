export default function NewCard(qtdCards, deck) {

    let cards = [];
    let deckReposicao = [];
    for (let i = 0; i < deck.length; i++) {
        deckReposicao.push(deck[i])
    }
    deckReposicao.sort(() => Math.random() - 0.5);
    for (let i = 0; i < qtdCards; i++) {
        cards.push(deckReposicao[i])
    }
    return cards;
}