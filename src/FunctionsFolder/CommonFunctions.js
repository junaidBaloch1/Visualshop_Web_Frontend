const TotalBudget = (products) => {
 var total=0;
 products.map((product)=>{
  total=total+product.price
 })
 return total
}
   

  export{
    TotalBudget
  }