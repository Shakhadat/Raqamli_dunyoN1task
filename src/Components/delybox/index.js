import React from "react";
import styles from './index.module.scss'

const DelyBox=()=>{
    return(

        <>
        
        <div className={styles.Dely_container}>
            <div>Причина отмены?</div>
            <div>
                <div>Стадия отмены</div>
                <div>
                    <div><input type="checkbox" /><label>Заказ слишком долго собирался</label></div>
                    <div><input type="checkbox" /><label>Другое</label></div>
                    <div><input type="checkbox" /><label>Передумал заказывать</label></div>
                </div>
            </div>
        </div>
        </>
    );
}

export default DelyBox;