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
  const [editProduct, setEditProduct] = useState(null);
  const [products, setProducts] = useState({});
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchQuery, setSearchQuery] = useState('');

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

  const handleEdit = (key) => {
    setEditProduct(key);
    setProduct({
      ...products[key],
    });
  };

  const handleCancelEdit = () => {
    setEditProduct(null);
    setProduct({
      productName: '',
      price: '',
      cost: '',
    });
  };

  const writeToDatabase = () => {
    const uuid = uid();
    if (editProduct) {
      set(ref(db, `/${editProduct}`), {
        ...product,
        uuid: editProduct,
      })
        .then(() => {
          console.log('Product data updated!');
          setEditProduct(null);
          setProduct({
            productName: '',
            price: '',
            cost: '',
          });
        })
        .catch((error) => {
          console.error('Error updating product in the database', error);
        });
    } else {
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
    }
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

  const handleSort = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const sortedProducts = Object.entries(products).sort((a, b) => {
    const orderMultiplier = sortOrder === 'asc' ? 1 : -1;
    return orderMultiplier * a[1].productName.localeCompare(b[1].productName);
  });

  const filteredProducts = sortedProducts.filter(([key, product]) => {
    return product.productName.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className={style.MainPageContainer}>
      <div className={style.InputForm}>
        <input
          name="productName"
          value={product.productName}
          onChange={handleChange}
          className={style.Input}
          placeholder="Имя продукта"
        />
        <input
          name="price"
          type="number"
          value={product.price}
          onChange={handleChange}
          className={style.Input}
          placeholder="Цена"
        />
        <input
          name="cost"
          type="number"
          value={product.cost}
          onChange={handleChange}
          className={style.Input}
          placeholder="Количество"
        />
        <button className={style.AddButton} onClick={writeToDatabase}>
          {editProduct ? 'Обновить продукт' : 'Добавить продукт'}
        </button>
        {editProduct && (
          <button className={style.CancelButton} onClick={handleCancelEdit}>
            Отмена
          </button>
        )}
      </div>
      <input
        value={searchQuery}
        onChange={handleSearchChange}
        className={style.Input}
        placeholder="Поиск по имени продукта"
      />
      <div className={style.HeaderRow}>
        <span className={style.PrName} onClick={handleSort}>
          Имя продукта
        </span>
        <span className={style.PrPrice}>Цена</span>
        <span className={style.PrCost}>Количество</span>
        <span className={style.PrAction}>Действие</span>
      </div>
      <div className={`${style.MainPageContainer} ${style.ProductListContainer}`}>
        <ol start="1">
          {filteredProducts.map(([key, product]) => (
            <li key={key} className={style.ProductRow}>
              <span className={style.ProductName}>{product.productName}</span>
              <span className={style.ProductPrice}>{product.price}</span>
              <span className={style.ProductCost}>{product.cost}</span>
              <button className={style.EditButton} onClick={() => handleEdit(key)}>
                Изменить
              </button>
              <button className={style.DeleteButton} onClick={() => handleDelete(key)}>
                Удалить
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default MainPage;
