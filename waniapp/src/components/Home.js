import { connect } from "react-redux";
import { addToCart, removeToCart } from "../redux/actions";

const Home = ({addToCart, removeToCart, data}) => {
    const styles = {
        width: 30, position: "absolute", right: 13, top: -4, zIndex: 100, backgroundColor: "red", display: "inline", borderRadius: "50%"
    };
    return (
        <div>
            <div>
            <h2 
                    style={styles}
                > 
                    {data.length}
                </h2>
                <img 
                    src="https://png.pngtree.com/png-vector/20190501/ourmid/pngtree-add-to-cart--icon-design-png-image_1013293.jpg"
                    alt="add to cart"
                    style={{width: 100, position: "absolute", right: 0, top: 0 }}
                />
            </div>
            <div>
                <img    
                    src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-max-1.jpg"
                    alt="iphone 14"
                    width="300"
                />
                <h3>Iphone 14</h3>
                <h3>$1000</h3>
                <button onClick={()=>addToCart({productName: "iphone", productPrice: 100})}>Add to card</button>
                <button onClick={removeToCart}>Remove to card</button>
            </div>
            <div>
                {data.map((obj,index)=> (
                    <div>
                        <h3>{obj.productName}</h3>
                        <h3>{obj.productPrice}</h3>
                    </div>
                ))
                }
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
   data: state.data
})

const mapDispatchToProps = {
    addToCart,
    removeToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);