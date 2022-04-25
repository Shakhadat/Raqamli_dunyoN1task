import React, {useState} from "react";
import ProductInfo from '../ProductInfo';
import styles from './index.module.scss';
// import img
import NDown from '../../assets/nextdown.svg';


const ProductBox=()=>{
    const [isClicked, setClicked]=useState(false);
    const HandleOpen=(e)=>{
        console.log(e.target);
        e.preventDefault();

        if(isClicked){
            setClicked(false);
            e.target.classList.remove(`${styles.changeStyle}`);

     }
     else{
            setClicked(true);
            e.target.classList.add(`${styles.changeStyle}`)
        }
       
     }
    return(
        <>
        <div className={styles.MainContent}>
            <div className={styles.ProductBoxContainer}>
            <div>
                <div>
                <ProductInfo/>
                <ProductInfo/>
                <ProductInfo/>
                </div>
                <img src={NDown} alt="next" onClick={HandleOpen} />
            </div>
            </div>

            <div>
                <button>Отменить заказ</button>
            </div>
            
        </div>
        
       
        </>
    );
}
export default ProductBox;