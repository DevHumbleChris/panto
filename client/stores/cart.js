export const useCartStore = defineStore("cart", () => {
  const isCartOpen = useState("isCartOpen", () => false);
  const cart = useState("cart", () => []);

  const noOfItemsInCart = computed(() => {
    return cart?.value?.length;
  });

  const totalCartPrice = computed(() => {
    const totalPrice = cart?.value?.reduce((total, prod) => {
      total = prod?.price * prod?.quantity + total;
      return total;
    }, 0);
    return totalPrice;
  });

  const openCart = () => {
    isCartOpen.value = !isCartOpen?.value;
  };

  const addToCart = (payload) => {
    const prevCart = cart?.value?.filter((prod) => prod?.id === payload?.id);
    if (prevCart?.length <= 0) {
      cart.value.push({ ...payload, quantity: 1 });
    }
  };

  const incCartQuantity = (payload) => {
    cart?.value?.map((prod) => {
      if (prod?.id === payload?.id) {
        prod.quantity += 1;
      }
    });
  };

  const decCartQuantity = (payload) => {
    cart?.value?.map((prod) => {
      if (prod?.id === payload?.id) {
        if (prod?.quantity < 2) {
          const newCart = cart?.value.filter(
            (cartProd) => cartProd?.id !== prod?.id
          );
          cart.value = newCart;
        } else {
          prod.quantity -= 1;
        }
      }
    });
  };

  const removeItemFromTheCart = (payload) => {
    const newCart = cart?.value.filter(
      (cartProd) => cartProd?.id !== payload?.id
    );
    cart.value = newCart;
  };

  return {
    isCartOpen,
    openCart,
    cart,
    addToCart,
    incCartQuantity,
    decCartQuantity,
    noOfItemsInCart,
    totalCartPrice,
    removeItemFromTheCart
  };
});
