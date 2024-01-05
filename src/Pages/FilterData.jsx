import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductModal from './ProductModal';

const FilterData = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [gender, setGender] = useState(searchParams.getAll('gender') || []);
  const [category, setCategory] = useState(searchParams.getAll('category') || []);
  const [order, setOrder] = useState(searchParams.get('order') || '');

  const handleGender = (e) => {
    const { value } = e.target;
    let newGender = [...gender];
    if (newGender.includes(value)) {
      newGender = newGender.filter((el) => el !== value);
    } else {
      newGender.push(value);
    }
    setGender(newGender);
  };

  const handleCategory = (e) => {
    const { value } = e.target;
    let newCategory = [...category];
    if (newCategory.includes(value)) {
      newCategory = newCategory.filter((el) => el !== value);
    } else {
      newCategory.push(value);
    }
    setCategory(newCategory);
  };

  const handlePrice = (e) => {
    const { value } = e.target;
    setOrder(value);
  };

  useEffect(() => {
    let params = {
      gender: gender,
      category: category,
    };
    order && (params.order = order);
    setSearchParams(params);
  }, [gender, category, order, setSearchParams]);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="flex justify-around p-4 bg-gray-100">
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Filter By Gender</h3>
        <select
          className="w-full border rounded p-2"
          value={gender}
          onChange={handleGender}
        >
          <option value="men">Men</option>
          <option value="women">Women</option>
        </select>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Filter By Category</h3>
        <select
          className="w-full border rounded p-2"
          value={category}
          onChange={handleCategory}
        >
          <option value="makeup">Makeup</option>
          <option value="skincare">Skincare</option>
          <option value="haircare">Haircare</option>
        </select>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Sort By Price</h3>
        <select
          value={order}
          onChange={handlePrice}
          className="w-full border rounded p-2"
        >
          <option value="">Select</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      <div className=''>
        <button className='items-bottom border border-solid bg-blue-900 text-white mt-60 font-poppins font-lg text-base p-3 rounded'onClick={openModal}>Add Product</button>
        <ProductModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </div>
  );
};

export default FilterData;
