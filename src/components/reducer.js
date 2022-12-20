export const reducer = (state, action) => {
  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      item: state.item.filter((currItem) => {
        return currItem.id !== action.payload;
      }),
    };
  }
  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      item: [],
    };
  }
  if (action.type === "INCREMENT") {
    let updatedCart = state.item.map((currItem) => {
      if (currItem.id === action.payload) {
        return { ...currItem, quantity: currItem.quantity + 1 };
      }
      return currItem;
    });
    return { ...state, item: updatedCart };
  }

  if (action.type === "DECREMENT") {
    let updatedCart = state.item
      .map((currItem) => {
        if (currItem.id === action.payload) {
          return { ...currItem, quantity: currItem.quantity - 1 };
        }
        return currItem;
      })
      .filter((currItem) => {
        return currItem.quantity !== 0;
      });
    return { ...state, item: updatedCart };
  }

  if ((action.type = "GET_TOTAL")) {
    let { totalItem, totalAmount } = state.item.reduce(
      (accume, curVal) => {
        let { quantity, price } = curVal;
        let updatedAmount = price * quantity;
        accume.totalItem += quantity;
        accume.totalAmount += updatedAmount;
        return accume;
      },
      { totalItem: 0, totalAmount: 0 }
    );
    return { ...state, totalItem, totalAmount };
  }

  return state;
};
