import React from 'react';
import './card-list.styles.css';
import Card from '../Card/card.component';

/* 
=================================================
Notes:
 - Props are any parameters that we pass into "CardList" from the point that calls this component.
 - Children are the content that are passed in-between the JSX component element from the point of instanciation.
=================================================
*/
const CardList = (props) => {
    return (
        <div className="card-list">
            {props.monsters.map(monster => (
                <Card key={monster.id} monster={monster} />
            ))}
        </div>
    )
}

export default CardList;