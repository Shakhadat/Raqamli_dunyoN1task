import styles from './App.module.scss';
import  Orders from '../src/Components/orders'
import ProgressBar from './Components/ProressBar';
import Address from './Components/addressMessage';
// import ProductInfo from './Components/ProductInfo';
import ProductBox from './Components/Productbox';
import DelyBox from './Components/delybox';


function App() {
  return (
   <>
   <div className={styles.container}>
     <div>
        <Orders/>
     </div>

     <div>
        <ProgressBar/>
        <Address/>
        <ProductBox/>
        <DelyBox/>
     </div>
    
     
     
     
   
   </div>
   
   </>
  );
}

export default App;
