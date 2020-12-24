import {React, useState} from 'react';
import Coin from './Coin';
import front from './front.jpg';
import back from './back.jpg';
import './CoinFlip.css';

const CoinFlip = (props) => {
    const [image, setImage] = useState('');
    const [heads, setHeads] = useState(0);
    const [tails, setTails] = useState(0);

    const flipCoin = () => {
        const random = Math.floor(Math.random() * 2);
        const choice = props.coin[random];
        setImage(image => choice);

        choice === front ? setHeads(heads+1) : setTails(tails+1);
    }

    return (
        <div className='CoinFlip'>
            <h1>Let's flip a coin!</h1>
            <img alt={image} src={image}></img>
            <button onClick={flipCoin}>Flip Me</button>
            <p>{`Out of ${heads + tails} flips, there have been ${heads} heads and ${tails} tails.`}</p>
        </div>
        
    )
}

CoinFlip.defaultProps = {
    coin: [front, back]
}

export default CoinFlip;