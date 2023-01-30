import React from 'react';
import classes from './list.module.css';

function List(props) {
    return (
        <div className={classes.list_container}>
            <span className={classes.list_header}>{props.title}</span>
            {
                props.data.length ? props.data.map((data, k) => (
                    <div key={k} className={classes.list_content}>
                        <div className={classes.list_img}>
                            <img className={classes.image} src={require('../assets/icons/wallet.png')} alt="" />
                        </div>
                        <div className={classes.list_text_wrap}>
                            <span className={classes.text_title}>{data.name}</span>
                            <span className={classes.text_amount}>{data.balance}</span>
                        </div>
                        <div className={classes.list_activity}>
                            <button className={classes.btn_activity} onClick={() => props.updateFunc(data)}>
                                <img className={classes.btn_img} src={require('../assets/icons/trash.png')} alt="" />
                            </button>
                            <button className={classes.btn_activity}>
                                <img className={classes.btn_img} src={require('../assets/icons/edit.png')} alt="" />
                            </button>
                        </div>
                    </div>
                )) : <p>No Data</p>
            }
        </div>
    );
}

export default List;