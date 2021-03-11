import React from 'react';
import {deleteUserToken} from 'service/cookieService';
import styles from 'components/rootComponents/atoms/Footer/Footer.module.scss';

const Footer = () => <footer className={styles.footer}>Design by Mateusz Przybysz<button type='button' onClick={()=>deleteUserToken()}>logout</button></footer>;

export default Footer;
