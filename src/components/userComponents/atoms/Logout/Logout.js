import React from 'react';
import styles from 'components/userComponents/atoms/DeleteAccount/DeleteAccount.module.scss';
import { deleteUserToken } from 'service/cookieService';



const Logout = ()=> {

  return(
    <div className={styles.wrapper}>
      <div className={styles.buttonWrapper}>
        Wyloguj się
        <button type='button' className={styles.button} onClick={()=>deleteUserToken()}>Wyloguj się</button>
      </div>
    </div>
  )
}



export default Logout;