import React from 'react';
import styles from'./index.module.scss';

import Apple from '../../assets/apple.svg';
import Point from '../../assets/point.svg';

const ProductInfo=()=>{
    return(
        <>
        <div className={styles.Product_container}>

            <div className={styles.fullInfo}>
                <div className={styles.imgConent}>
                    <img src={Apple} alt="apple" />
                </div>
                <div className={styles.mainInfo}>
                    <div>Яблоко</div>

                    <div className={styles.NameforKg}>
                        <div>1 кг</div>
                        <img src={Point}/>
                        <div>Семеренько</div>
                    </div>
                    <div>(15.000 Сум за 1 кг)</div>
                </div>
            </div>

            <div className={styles.AddInfo}>
                    <div>
                        <div className={styles.titleCount}>Объем</div>
                        <div>13</div>
                    </div>

                    <div>
                        <div className={styles.titleCount}>Цена</div>
                        <div>15.000 Сум</div>
                    </div>

            </div>
        </div>
        </>
    );
}

export default ProductInfo;