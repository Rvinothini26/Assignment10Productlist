import React, { useState, useEffect } from 'react'

function Productlist() {
    //useState hook
    const[products,setProducts]=useState([]);
    const [searchProducts,setSearchProducts]=useState('');
    const [filterProducts,setfilterProducts]=useState('all');
    const [categories,setCategories]=useState([]);
   const [sortDirection, setSortDirection] = useState('asc'); 
    //***important interview question */
    //useEffect->having the direct access to our DOM elements//
    // components lifecycle methods ->mounting - function run, updating -  unmounting-stop
    useEffect(()=>{// Asynchronous function by default -mounting
   fetch("https://fakestoreapi.com/products")
   .then(res=>res.json())//updating
   .then(data=>setProducts(data))
   fetch("https://fakestoreapi.com/products/categories")
   .then(res=>res.json())
   .then(data=>setCategories(['all',...data]));
    

    },[]);//unmounting
    
    const addtocart=(title)=>{
        console.log(`produt add to cart-${title}`)
    }
    const filteredProducts=products.filter(product=>filterProducts==='all'||product.category===filterProducts)
    .filter(product=>product.title.toLowerCase().includes(searchProducts.toLowerCase()));

     function sortByPrice(direction) {
        setSortDirection(direction);
        const sortedProducts = [...products].sort((a, b) => {
          if (direction === 'asc') {
            return a.price - b.price; // Ascending order
          } else {
            return b.price - a.price; // Descending order
          }
        });
        setProducts(sortedProducts);
      }
    
  return (
    

   <section className='p-4 md:p-8'> 
<h3 className='text-2xl md:text-3xl font-bold text-center mb-6 text-pink-900 font-serif '>Product Line</h3>
{/* {search and filter} */}
<div className='p-10'>
    <input type='text' placeholder='Search Products' 
    value={searchProducts}
    onChange={(e)=>setSearchProducts(e.target.value)}
    className='border border-gray-400 rounded px-4 py-3 w-full md:w-1/2'/>
{/* {filter} */}
<label className='p-4  mx-4 text-pink-900 '>Filter</label>
<select value={filterProducts} onChange={(e)=>setfilterProducts(e.target.value)}>
 {
    categories.map((category,index)=>(
        <option key={index} value={category}>
         {category.toUpperCase()};
        </option>
    ))
 }  
</select>
<label htmlFor="sort-price" className='p-4 mx-4 text-pink-900'>Sort by price:</label>
          <select id="sort-price" onChange={e => sortByPrice(e.target.value)}>
            <option value="all"></option>
            <option value="asc">LOW TO HIGH</option>
            <option value="desc">HIGH TO LOW</option>
          </select>

  
      </div>
{/* Grid layout */}
<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
    {
        //map is also known as list in react
filteredProducts.map(product => (
    <div key={product.id} className='bg-white shadow rounded p-4 flex flex-col items-center'>
        <img src ={product.image}  className='h-40 w-auto mb-4 object-contain 'alt="" />
        <h4 className='text-md md:text-lg font-semibold mb-2 text-center h-30'>{product.title}</h4>

        <h4 className='text-md md:text-lg font-semibold text-pink-500'>${product.price}</h4>
        <h4 className='text-md md:text-lg font-semibold text-green-700'>Rating :{product.rating.rate}</h4>
        <button onClick={()=>addtocart(product.title)} className='bg-pink-600 px-6 py-2 text-white rounded w-1/2 hover:bg-pink-400'> add to cart</button>
        </div>
))
    }
</div>

   </section>
  )
}

export default Productlist
