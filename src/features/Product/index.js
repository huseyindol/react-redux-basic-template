/**
 *
 * Product
 *
 */

import React, { memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectProduct } from "./slice";
import { ProductTag } from "./styles";
// import PropTypes from 'prop-types';

function Product() {
  const ProductState = useSelector(selectProduct);
  const dispatch = useDispatch();
  return <ProductTag>Product</ProductTag>;
}

Product.propTypes = {};

export default memo(Product);
