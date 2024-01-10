import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { deleteProd, editProd, getProd } from '../Redux/product/action';
import edit from "../Images/edit-3.svg";
import trash from "../Images/trash-2.svg";
import dot from "../Images/more-horizontal.svg";
import axios from 'axios';
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

  const [isModalOpen, setModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

const handleEdit=async(id)=>{
  const token=localStorage.getItem("token");
try {
  const response=await axios.get(`https://nykaa-irdl.onrender.com/api/products/${id}`,{
    headers: {
      authorization: `Bearer ${token}`,
    }
  })
  const product=response.data;
  // console.log(product)
  setEditingProduct(product);
  setModalOpen(true);
} catch (error) {
  console.error("Error fetching product details:", error);
}
  
}
const handleDelete=(id)=>{
  const isConfirmed = window.confirm('Are you sure you want to delete this product?');
  if (isConfirmed) {
    dispatch(deleteProd(id));
    dispatch(getProd());
  }
}
const handleCloseModal = () => {
  setEditingProduct(null);
  setModalOpen(false);
};
const handleUpdate = () => {
  
  dispatch(editProd(editingProduct._id, editingProduct));
  dispatch(getProd());
  handleCloseModal();
};
  useEffect(() => {
    dispatch(getProd(paramsobj));
  }, [searchParams]);
// console.log(products)
  return (
    <div>
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
        {Array.isArray(products) && products?.map((item) => (
          <tr key={item._id} className="border-b">
            <td className="flex items-center gap-4 py-2 px-4 mx-2"><img className='w-8 h-8 rounded-lg ' src={item.picture} alt='avtar'/>{item.name}</td>
            <td className="py-2 px-2 mx-2">{item.gender}</td>
            <td className="py-2 px-4 mx-2">{item.category}</td>
            <td className="py-2 px-4 mx-2">₹ {item.price}</td>
            <td className="py-2 px-4 mx-2">{item.description}</td>
            <td className="py-2 px-4 flex gap-2 mx-2">
              <button onClick={()=>handleEdit(item._id)}><img src={edit} alt="edit" /></button>
              <button onClick={()=>handleDelete(item._id)}><img src={trash} alt="delete" /></button>
              <button><img src={dot} alt="dot" /></button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>

    {/* //Modal for Editing// */}
    <div className={`${
        isModalOpen ? 'block' : 'hidden'
      } fixed inset-0 overflow-y-auto`}>
    {isModalOpen && editingProduct && (
      <div className="modal">
    
        <div className="modal-content">
            <label>Name: <input type="text" value={editingProduct.name} onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })} /></label>

            <label>Gender:
              <select value={editingProduct.gender} onChange={(e) => setEditingProduct({ ...editingProduct, gender: e.target.value })}>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </label>

            <label>Category:
              <select value={editingProduct.category} onChange={(e) => setEditingProduct({ ...editingProduct, category: e.target.value })}>
                <option value="makeup">Makeup</option>
                <option value="skincare">Skincare</option>
                <option value="haircare">Haircare</option>
              </select>
            </label>

            <label>Price: <input type="number" value={editingProduct.price} onChange={(e) => setEditingProduct({ ...editingProduct, price: e.target.value })} /></label>

            <label>Description: <input type='text' value={editingProduct.description} onChange={(e) => setEditingProduct({ ...editingProduct, description: e.target.value })} /></label>

            <label>Avatar URL: <input type="text" value={editingProduct.avatar} onChange={(e) => setEditingProduct({ ...editingProduct, avatar: e.target.value })} /></label>

           
          <button onClick={handleUpdate}>Update</button>
          <button onClick={handleCloseModal}>Cancel</button>
        </div>
      </div>
    )}
    </div>
    </div>
  );

};

export default Productdata;
