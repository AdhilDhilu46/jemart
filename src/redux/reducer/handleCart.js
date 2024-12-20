const cart = [];

const handleCart = (state = cart, action) => {
    const product = action.payload;
    switch (action.type) {
        case "ADDITEM":
            // Check if product exists
            const exist = state.find((x) => x.id === product.id);
            if (exist) {
                // Increase quantity
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty + 1 } : x
                );
            } else {
                // Add new item
                return [...state, { ...product, qty: 1 }];
            }

        case "DELITEM":
            const exist2 = state.find((x) => x.id === product.id);
            if (exist2.qty === 1) {
                // Remove item
                return state.filter((x) => x.id !== exist2.id);
            } else {
                // Decrease quantity
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty - 1 } : x
                );
            }

        default:
            return state;
    }
}

export default handleCart;