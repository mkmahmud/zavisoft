import { CartItem, CartSummary } from '@/types/cart/cart';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface CartState {
    items: CartItem[];
    cartSummary: CartSummary;
}

const initialState: CartState = {
    items: [],
    cartSummary: {
        totalItems: 0,
        totalPrice: 0,
        delivaryFee: 0,
        salesTax: 0,
        grandTotal: 0,
    }
};

//  Update summary
const updateTotals = (state: CartState) => {
    const subtotal = state.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const totalItems = state.items.reduce((acc, item) => acc + item.quantity, 0);

    // set Delivery fee
    const deliveryFee = subtotal > 0 ? 5 : 0;

    // 10% Sales Tax
    const tax = Math.round(subtotal * 0.1);

    state.cartSummary = {
        totalItems: totalItems,
        totalPrice: subtotal,
        delivaryFee: deliveryFee,
        salesTax: tax,
        grandTotal: subtotal + deliveryFee + tax,
    };
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const existingItem = state.items.find(
                (item) =>
                    item.id === action.payload.id &&
                    item.selectedSize === action.payload.selectedSize &&
                    item.selectedColor === action.payload.selectedColor
            );

            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
            } else {
                state.items.push(action.payload);
            }


            updateTotals(state);
        },

        removeFromCart: (state, action: PayloadAction<{ id: number; selectedSize: string; selectedColor: string }>) => {
            state.items = state.items.filter(
                (item) =>
                    !(
                        item.id === action.payload.id &&
                        item.selectedSize === action.payload.selectedSize &&
                        item.selectedColor === action.payload.selectedColor
                    )
            );


            updateTotals(state);
        },



        clearCart: (state) => {
            state.items = [];
            updateTotals(state);
        }
    },
});



export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;