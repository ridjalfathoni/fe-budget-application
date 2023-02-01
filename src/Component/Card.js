import React from 'react';
import classes from './card.module.css'
function Card(props) {
    return (
        <>
            {
                props.cardListContent.map((cards) => (
                    <div key={cards.key} className={`${classes.card} ${cards.key}`}>
                        <div className={classes.items_img}>
                            <img className={classes.card_img} src={cards.imgUrl} alt={cards.subheader} />
                        </div>
                        {
                            cards.subheader &&
                            <div className={classes.card_content}>
                                <span className={classes.card_subheader}>{cards.subheader}</span>
                                <span className={classes.text_amount}>{cards.amount}</span>
                            </div>
                        }
                    </div>
                ))
            }
        </>
    );
}

export default Card;