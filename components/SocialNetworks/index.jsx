import React from 'react';
import cl from 'classnames';
import {
    AiFillLinkedin,
    AiOutlineTwitter,
    AiFillInstagram,
} from 'react-icons/ai';
import {BsTelegram} from 'react-icons/bs';
import ScreenEgg from "../ScreenEgg";

import styles from './index.module.scss';

const socialNetworks = [
    {
        id: 1,
        href: 'https://www.linkedin.com/in/igor-vorobyovv/',
        icon: AiFillLinkedin,
    },
    {
        id: 2,
        href: 'https://twitter.com/Vorob_ev',
        icon: AiOutlineTwitter,
    },
    {
        id: 3,
        href: 'https://www.instagram.com/vorob_ev/',
        icon: AiFillInstagram,
    },
    {
        id: 4,
        href: 'https://t.me/igorr_v',
        icon: BsTelegram,
    },
]

const SocialNetworks = ({className,}) => {
    return (
        <ScreenEgg type="left">
            <ul className={cl(className, styles.list)}>
                {socialNetworks.map((socialNetwork) => (
                    <li
                        key={socialNetwork.id}
                        className={styles.listItem}
                    >
                        <a
                            href={socialNetwork.href}
                            target="_blank"
                            className={styles.listLink}
                        >
                            {React.createElement(
                                socialNetwork.icon,
                                {
                                    color: 'black',
                                    size: 50
                                }
                            )}
                        </a>
                    </li>
                ))}
            </ul>
        </ScreenEgg>
    );
};

export default SocialNetworks;