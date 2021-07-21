import React from 'react';
import MemoryCard from './components/MemoryCard';
import './App.css';
import Timer from './components/Timer';


function generateDeck() {
  const symbols = ['🍇', '🍔', '🍕', '🌮', '🍱', '🍪', '🍺', '🥐'];
  let deck = [];
  for (let i=0; i<16; i++) {
    let cardObject = {
      isFlipped: false,
      symbol: symbols[i % 8]
    }
    deck.push(cardObject);
  }
  shuffle(deck);
  return deck;
}

function shuffle(a) {
  let j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
  return a;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: generateDeck(),
      pickedCards: [],
      hits: 0
    };
  }

  checkWin() {
    if (this.state.hits > 7) {
      return true;
    }
    return false;
  }

  pickCard(cardIndex) {
        if (this.state.deck[cardIndex].isFlipped) {
          return;
        }
        let cardToFlip = {...this.state.deck[cardIndex]};
        cardToFlip.isFlipped = true;
        let newPickedCards = this.state.pickedCards.concat(cardIndex);
        let newDeck = this.state.deck.map((card, index) => {
          if (cardIndex === index) {
            return cardToFlip;
          }
          return card;
        });
    
        if (newPickedCards.length === 2) {
          let card1Index = newPickedCards[0];
          let card2Index = newPickedCards[1];
          if (newDeck[card1Index].symbol !== newDeck[card2Index].symbol) {
            setTimeout(this.unflipCards.bind(this, card1Index, card2Index),1000)
          } else {
            this.setState({
              hits: this.state.hits + 1
            })
          }
          newPickedCards = [];
        }
    
        this.setState({
          deck: newDeck,
          pickedCards: newPickedCards
        })
    }

  unflipCards(card1Index, card2Index) {
    let card1 = {...this.state.deck[card1Index]};
    let card2 = {...this.state.deck[card2Index]};
    card1.isFlipped = false;
    card2.isFlipped = false;
    let newDeck = this.state.deck.map((card, index) => {
      if (index === card1Index) {
        return card1;
      } if (index === card2Index) {
        return card2;
      }
      return card;
      
    });
    this.setState({
      deck: newDeck
    });
  }


  render() {
    let cardsJSX = this.state.deck.map((card, index) => {
      return  <MemoryCard 
                symbol={card.symbol} 
                isFlipped={card.isFlipped} 
                key={index} 
                pickCard={this.pickCard.bind(this, index)} 
                />
    });
    let displayTimer = (this.checkWin() === true) ? <h2>You WIN!!</h2> : <Timer />

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="title">Memory Game</h1>
          <h4 className="subtitle">Match Cards to Win</h4>
        </header>
        <div>
          {displayTimer}
        </div>
        <div>
          {cardsJSX.slice(0,4)}
        </div>
        <div>
          {cardsJSX.slice(4,8)}
        </div>
        <div>
          {cardsJSX.slice(8,12)}
        </div>
        <div>
          {cardsJSX.slice(12,16)}
        </div>
      </div>
    );
  }
  

}

export default App;
