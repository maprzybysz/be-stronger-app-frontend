import React from 'react';
import styles from 'components/userComponents/atoms/Logout/Logout.module.scss';
import { deleteUserToken } from 'service/cookieService';



const Logout = ()=> {

  return(
    <div className={styles.wrapper}>
      <div className={styles.buttonWrapper}>
        Wyloguj się
        <button type='button' className={styles.button} onClick={()=>deleteUserToken()}>Wyloguj</button>
      </div>
    </div>
  )
}



export default Logout;