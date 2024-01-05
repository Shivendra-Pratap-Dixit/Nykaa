import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { getProd } from '../Redux/product/action';

const Productdata = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.prodReducer.products);
  const [searchParams] = useSearchParams();
  const paramsobj = {
    params: {
      gender: searchParams.getAll('gender'),
      category: searchParams.getAll('category'),
      sort: searchParams.get('order') && 'price',
      order: searchParams.get('order'),
    },
  };

  useEffect(() => {
    dispatch(getProd(paramsobj));
  }, [searchParams]);
// console.log(products)
  return (
    <table className="min-w-full bg-white border border-gray-300">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b">Products</th>
          <th className="py-2 px-4 border-b">Gender</th>
          <th className="py-2 px-4 border-b">Category</th>
          <th className="py-2 px-4 border-b">Price</th>
          <th className="py-2 px-4 border-b">Description</th>
          <th className="py-2 px-4 border-b">Action</th>
        </tr>
      </thead>
      <tbody>
        {products?.map((item) => (
          <tr key={item.id} className="border-b">
            <td className="flex items-center gap-4 py-2 px-4"><img className='w-8 h-8 rounded-lg ' src={item.picture} alt='avtar'/>{item.name}</td>
            <td className="py-2 px-4">{item.gender}</td>
            <td className="py-2 px-4">{item.category}</td>
            <td className="py-2 px-4">{item.price}</td>
            <td className="py-2 px-4">{item.description}</td>
            <td className="py-2 px-4">
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Productdata;
