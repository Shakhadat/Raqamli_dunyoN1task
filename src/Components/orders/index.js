import React from "react";
import styles from './index.module.scss';
import next from '../../assets/nextsign.svg'


const CreateOrder=()=>{
    return(
        <>
        <div className={styles.card}>
            <div>
                <div className={styles.order_property}>Заказ:</div>
                <div className={styles.restProperty}>Курьер:</div>
                <div className={styles.restProperty}>Марка машины:</div>
                <div className={styles.restProperty}>Номер тел:</div>
            </div>

            <div className={styles.values}>
                <div className={styles.order_property}>№2525253</div>
                <div className={styles.restvalue}>Сардорбек Имамов</div>
                <div className={styles.restvalue}>Shevrolet Spark</div>
                <div className={styles.restvalue}>+988 90 255 33 44</div>
            </div>
            <div className={styles.thirdCol}>
                <div>
                    <img src={next} alt="next" />
                 </div>
                <div >12.03.2022г</div>
            </div>
        </div>
        </>
    );
}

const Orders=()=>{
    return(
        <>
        <div className={styles.head}>Активные заказы</div>
        <CreateOrder/>
        <CreateOrder/>
        <CreateOrder/>
        </>
    );
}

export default Orders;

