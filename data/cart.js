export let cart=JSON.parse(localStorage.getItem('uploadCart')) || [];

export function saveToStorage(could){
  localStorage.setItem('uploadCart',JSON.stringify(could));
}
export function addToCart(productId){
  let matchingItem;
    cart.forEach((item)=>{
      if(item.id===productId){
        matchingItem = item;
      }})
      if(matchingItem){
        matchingItem.quantity+=1;
      }
      else{
        const cartItem ={
          id : productId,
          quantity: 1
        }
        cart.push(cartItem);
        saveToStorage(cart);
      }
}
export function deleteCart(productId){
  cart = cart.filter((product)=>product.id!=productId)
  saveToStorage(cart);
}