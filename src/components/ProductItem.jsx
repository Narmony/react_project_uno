import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import IconButton from '@material-ui/core/IconButton';


import notebook from '../assets/notebook.jpeg';
import phone from '../assets/phone.jpeg';
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
    item:{
        display: 'flex',
        alignItems: 'flex-start',
        
        '& img':{
            height: 100,
        }
    },
    card:{
        marginBottom:10,
        padding: 10,
        width: 120, 
    }
});

const images = {
    notebook,
    phone,
};

const ProductList = ({product})=>{
    const classes = useStyles();
    return (<li className={classes.item}>
     <Card className={classes.card}>
    <CardActionArea>
    
   
    <p>name: {product.name}</p>
    <p>price: {product.price}</p>
    <p>count: {product.count}</p>
    <img src={images[product.img]} alt={product.name}></img>
    </CardActionArea>
    </Card>
    <IconButton><ShoppingBasketIcon/></IconButton>
    </li>)
};
    export default ProductList;