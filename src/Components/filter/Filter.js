import React from "react";
import {connect} from 'react-redux';
import { setFilter } from "../../redux/products/productsActions";
import { filterSelector } from "../../redux/products/productsSelectors";


const Filter = ({ filter, setFilter }) => {
 const onHandleChange = (event) => {
  setFilter(event.target.value);
 };
 return (
  <label>
   <input type="text" value={filter} onChange={onHandleChange} />
  </label>
 );
};

const mapStateToProps = (state, ownProps) => ({
    filter: filterSelector(state)
})

const mapDispatchToProps = {
 setFilter,
};


export default connect(mapStateToProps, mapDispatchToProps)(Filter);
