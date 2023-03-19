import Link from 'next/link';
import React, { useState } from 'react';

import classes from './NavBar.module.css';

const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className='d-flex flex-column site-container'>
      <div className={classes.MyNavbar}>
        <div className={classes['left-side']}>
          <Link className={classes['site-title']} href='/'>
            MyCoolStore
          </Link>
        </div>
        <div className={classes['right-side']}>
          <div
            className={classes.links}
            id={showLinks ? classes['hidden'] : ''}
          >
            {/* <SearchBar
              searchBarInputRef={searchCategoriesInputRef}
              searchBar={searchBar}
              setSearchBar={setSearchBar}
              id='categories'
              data={categories}
              placeholder='Search Category...'
            /> */}

            {/* <SearchBar
              id='products'
              searchBar={searchBar}
              setSearchBar={setSearchBar}
              searchBarInputRef={searchProductsInputRef}
              data={products}
              placeholder='Search Product...'
            /> */}
          </div>
          <div className={classes.icons}>
            {/* <Icon
            type={'cart-shopping'}
            size='2xl'
            color='white'
            amount={cartItemsAmount}
            onClick={showCartHandler}
          /> */}
            {/* <Icon
            type={'user'}
            size='2xl'
            color='white'
            isLoggedIn={isLoggedIn}
            onClick={showUserModalHandler}
          /> */}
          </div>
          <div className={classes.Hamburger}>
            {/* <Hamburger showLinks={showLinks} setShowLinks={setShowLinks} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
