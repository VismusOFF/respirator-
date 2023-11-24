import React, { useState, useEffect } from 'react';
import style from './MainPage.module.scss';
import { db } from '../../../main';
import { uid } from 'uid';
import { ref, set, onValue, remove } from 'firebase/database';

function MainPage() {
    const [product, setProduct] = useState({
        productName: '',
        price: '',
        cost: '',
    });
    const [products, setProducts] = useState({});

    useEffect(() => {
        const productsRef = ref(db, '/');
        const unsubscribe = onValue(productsRef, (snapshot) => {
            setProducts(snapshot.val() || {});
        });

        return () => unsubscribe();
    }, []);

    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value,
        });
    };

    const writeToDatabase = () => {
        const uuid = uid();
        set(ref(db, `/${uuid}`), {
            ...product,
            uuid: uuid,
        })
        .then(() => {
            console.log('Product data written!');
            setProduct({
                productName: '',
                price: '',
                cost: '',
            });
        })
        .catch((error) => {
            console.error('Error writing product to the database', error);
        });
    };

    const handleDelete = (uuid) => {
        remove(ref(db, `/${uuid}`))
        .then(() => {
            console.log('Removed:', uuid);
        })
        .catch((error) => {
            console.error('Could not remove:', error);
        });
    };

    return (
        <div className={style.MainPageContainer}>
            <div className={style.InputForm}>
                <input
                    name="productName"
                    value={product.productName}
                    onChange={handleChange}
                    className={style.Input}
                    placeholder="Enter product name"
                />
                <input
                    name="price"
                    type="number"
                    value={product.price}
                    onChange={handleChange}
                    className={style.Input}
                    placeholder="Enter price"
                />
                <input
                    name="cost"
                    type="number"
                    value={product.cost}
                    onChange={handleChange}
                    className={style.Input}
                    placeholder="Enter cost"
                />
                <button className={style.AddButton} onClick={writeToDatabase}>Add Product</button>
            </div>
            <div className={style.HeaderRow}>
                <span>Product Name</span>
                <span>Price</span>
                <span>Cost</span>
                <span>Action</span>
            </div>
            <div className={`${style.MainPageContainer} ${style.ProductListContainer}`}>
                <ol start="1">
                    {Object.keys(products).map((key) => (
                        <li key={key} className={style.ProductRow}>
                            <span className={style.ProductName}>{products[key].productName}</span>
                            <span className={style.ProductPrice}>{products[key].price}</span>
                            <span className={style.ProductCost}>{products[key].cost}</span>
                            <button className={style.DeleteButton} onClick={() => handleDelete(key)}>Delete</button>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}

export default MainPage;