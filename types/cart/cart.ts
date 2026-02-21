
export interface CartItem {
    id: number;
    title: string;
    price: number;
    image: string;
    quantity: number;
    selectedSize: string;
    selectedColor: string;
}

export interface CartSummary {
    totalItems: number;
    totalPrice: number;
    delivaryFee: number;
    salesTax: number;
    grandTotal: number;
}