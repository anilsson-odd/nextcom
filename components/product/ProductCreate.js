'use client';
import { useEffect } from 'react';
import { useProduct } from '@/context/product';
import { useCategory } from '@/context/category';
import { useTag } from '@/context/tag';

export default function ProductCreate() {
  const {
    product,
    setProduct,
    updatingProduct,
    setUpdatingProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    uploading,
    setUploading,
    uploadImages,
    deleteImage,
  } = useProduct();

  const { categories, fetchCategories } = useCategory();
  const { tags, fetchTags } = useTag();

  useEffect(() => {
    fetchCategories();
    fetchTags();
  }, []);

  return (
    <div>
      <p className='lead'>{updatingProduct ? 'Update' : 'Create'} Product</p>

      <input
        type='text'
        placeholder='Title'
        value={updatingProduct ? updatingProduct?.title : product?.title}
        onChange={(e) =>
          updatingProduct
            ? setUpdatingProduct({ ...updatingProduct, title: e.target.value })
            : setProduct({ ...product, title: e.target.value })
        }
        className='form-control p-2 my-2'
      />

      <textarea
        rows='5'
        className='form-control p-2 mb-2'
        placeholder='Description'
        value={
          updatingProduct ? updatingProduct?.description : product?.description
        }
        onChange={(e) =>
          updatingProduct
            ? setUpdatingProduct({
                ...updatingProduct,
                description: e.target.value,
              })
            : setProduct({ ...product, description: e.target.value })
        }
      ></textarea>

      <input
        type='number'
        placeholder='Price'
        min='1'
        className='form-control p-2 mb-2'
        value={updatingProduct ? updatingProduct?.price : product?.price}
        onChange={(e) =>
          updatingProduct
            ? setUpdatingProduct({
                ...updatingProduct,
                price: e.target.value,
              })
            : setProduct({ ...product, price: e.target.value })
        }
      />

      <input
        type='text'
        placeholder='Color'
        value={updatingProduct ? updatingProduct?.color : product?.color}
        onChange={(e) =>
          updatingProduct
            ? setUpdatingProduct({ ...updatingProduct, color: e.target.value })
            : setProduct({ ...product, color: e.target.value })
        }
        className='form-control p-2 my-2'
      />

      <input
        type='text'
        placeholder='Brand'
        value={updatingProduct ? updatingProduct?.brand : product?.brand}
        onChange={(e) =>
          updatingProduct
            ? setUpdatingProduct({ ...updatingProduct, brand: e.target.value })
            : setProduct({ ...product, brand: e.target.value })
        }
        className='form-control p-2 my-2'
      />

      <input
        type='number'
        placeholder='Stock'
        min='1'
        className='form-control p-2 mb-2'
        value={updatingProduct ? updatingProduct?.stock : product?.stock}
        onChange={(e) =>
          updatingProduct
            ? setUpdatingProduct({
                ...updatingProduct,
                stock: e.target.value,
              })
            : setProduct({ ...product, stock: e.target.value })
        }
      />

      <pre>{JSON.stringify(product, null, 4)}</pre>
    </div>
  );
}
