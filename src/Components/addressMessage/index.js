import React from "react";
import styles from "./index.module.scss";
import Pencil from '../../assets/pencil.svg'

const Address = () => {
  return (
    <>
      <div className={styles.content}>
          <div>
                <strong>Адрес доставки: </strong>
                Мирзо Улугбек район, Хамида Алимджана площадь революции дом 22, кв 13
          </div>
          <div>
              <img src={Pencil} alt="edit" />
          </div>
        
      </div>
    </>
  );
};

export default Address;
