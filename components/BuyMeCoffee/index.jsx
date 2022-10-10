import React from 'react';
import cl from 'classnames';

import styles from './index.module.scss';
import ScreenEgg from "../ScreenEgg";

const BuyMeCoffee = ({className,}) => {
    return (
        <ScreenEgg type="right">
            <div className={cl(className, styles.buyCoffee)}>
                <a
                    href='https://stripe.com'
                    target="_blank"
                    className={styles.buyCoffeeButton}
                    rel="noopener"
                >
                    Buy me a coffee...
                </a>
            </div>
        </ScreenEgg>
    );
};

export default BuyMeCoffee;