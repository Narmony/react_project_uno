import ProductItem from './ProductItem';
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
    list:{
        listStyle: 'none',
        margin: 0,
        padding: 10,
        
    }
});

// .item img {
//     width: 100px;
//   }

const ProductList = ({products})=>{
    const classes = useStyles();
    return (<ul className ={classes.list}>
            {products.map((product)=>(
            //     product.count > 0 ?
            // <ProductItem key={product.id} product={product}/>
            // : null

            !!product.count &&  <ProductItem key={product.id} product={product}/>
            ))}
        </ul>)
   
    };
    export default ProductList;