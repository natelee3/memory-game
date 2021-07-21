import React from 'react';
import './MemoryCard.css';

class MemoryCard extends React.Component {
    render() {
        let memoryCardInnerClass = this.props.isFlipped ? "MemoryCardInner flipped" : "MemoryCardInner";
        return (
            <div className="MemoryCard" onClick={this.props.pickCard}>
                <div className={memoryCardInnerClass}>
                    <div className="MemoryCardBack">
                        <img src="http://digitalcrafts.com/img/digitalcrafts-logo-white-y.png" alt="dc logo"></img>
                    </div>
                    <div className="MemoryCardFront">
                      {this.props.symbol}
                    </div>
                </div>                
            </div>
        )
    }
}

export default MemoryCard;