import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from 'react';
import axios from 'axios';

const CartContext = createContext();

const CART_ACTIONS = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  UPDATE_QUANTITY: 'UPDATE_QUANTITY',
  CLEAR_CART: 'CLEAR_CART',
  LOAD_CART: 'LOAD_CART',
};

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3001';


function cartReducer(state, action) {
  switch (action.type) {
    case CART_ACTIONS.ADD_ITEM: {
      const { product, quantity = 1 } = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === product.id,
      );

      if (existingItemIndex >= 0) {
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += quantity;
        updatedItems[existingItemIndex].subtotal =
          updatedItems[existingItemIndex].price *
          updatedItems[existingItemIndex].quantity;

        return {
          ...state,
          items: updatedItems,
          totalItems: state.totalItems + quantity,
          totalAmount: state.totalAmount + product.price * quantity,
        };
      } else {
        const newItem = {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity,
          subtotal: product.price * quantity,
        };

        return {
          ...state,
          items: [...state.items, newItem],
          totalItems: state.totalItems + quantity,
          totalAmount: state.totalAmount + product.price * quantity,
        };
      }
    }

    case CART_ACTIONS.REMOVE_ITEM: {
      const itemToRemove = state.items.find(
        (item) => item.id === action.payload.id,
      );
      if (!itemToRemove) return state;

      const updatedItems = state.items.filter(
        (item) => item.id !== action.payload.id,
      );

      return {
        ...state,
        items: updatedItems,
        totalItems: state.totalItems - itemToRemove.quantity,
        totalAmount: state.totalAmount - itemToRemove.subtotal,
      };
    }

    case CART_ACTIONS.UPDATE_QUANTITY: {
      const { id, quantity } = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === id);

      if (itemIndex === -1) return state;

      const updatedItems = [...state.items];
      const item = updatedItems[itemIndex];
      const quantityDifference = quantity - item.quantity;

      if (quantity <= 0) {
        updatedItems.splice(itemIndex, 1);
        return {
          ...state,
          items: updatedItems,
          totalItems: state.totalItems - item.quantity,
          totalAmount: state.totalAmount - item.subtotal,
        };
      }

      item.quantity = quantity;
      item.subtotal = item.price * quantity;

      return {
        ...state,
        items: updatedItems,
        totalItems: state.totalItems + quantityDifference,
        totalAmount: state.totalAmount + item.price * quantityDifference,
      };
    }

    case CART_ACTIONS.CLEAR_CART:
      return { items: [], totalItems: 0, totalAmount: 0 };

    case CART_ACTIONS.LOAD_CART:
      return action.payload || { items: [], totalItems: 0, totalAmount: 0 };

    default:
      return state;
  }
}

const initialState = {
  items: [],
  totalItems: 0,
  totalAmount: 0,
};

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [clientSecret, setClientSecret] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem('@ecommerce:userId') || 'guest';
    try {
      const savedCart = localStorage.getItem(`@ecommerce:cart:${userId}`);
      if (savedCart) {
        const parsed = JSON.parse(savedCart);
        if (parsed && parsed.items) {
          dispatch({ type: CART_ACTIONS.LOAD_CART, payload: parsed });
        }
      }
    } catch (err) {
      console.error('Erro ao carregar carrinho:', err);
    }
  }, []);

  useEffect(() => {
    const userId = localStorage.getItem('@ecommerce:userId') || 'guest';
    localStorage.setItem(`@ecommerce:cart:${userId}`, JSON.stringify(state));
  }, [state]);

  // Actions
  const addItem = (product, quantity = 1) =>
    dispatch({ type: CART_ACTIONS.ADD_ITEM, payload: { product, quantity } });

  const removeItem = (id) =>
    dispatch({ type: CART_ACTIONS.REMOVE_ITEM, payload: { id } });

  const updateQuantity = (id, quantity) =>
    dispatch({ type: CART_ACTIONS.UPDATE_QUANTITY, payload: { id, quantity } });

  const clearCart = () => dispatch({ type: CART_ACTIONS.CLEAR_CART });

  const getItemQuantity = (id) => {
    const item = state.items.find((item) => item.id === id);
    return item ? item.quantity : 0;
  };

  const isItemInCart = (id) => state.items.some((item) => item.id === id);

  const formatCurrency = (value) =>
    new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);

  const createPaymentIntent = async () => {
    if (!state.items || state.items.length === 0) return null;

    try {
      const response = await axios.post(
        `${baseUrl}/create-payment-intent`,
        {
          products: state.items.map((item) => ({
            id: item.id,
            price: item.price,
            quantity: item.quantity,
          })),
        },
      );
      const secret = response.data.clientSecret;
      setClientSecret(secret);
      return secret;
    } catch {
      return null;
    }
  };

  const contextValue = {
    items: state.items,
    totalItems: state.totalItems,
    totalAmount: state.totalAmount,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    getItemQuantity,
    isItemInCart,
    formatCurrency,
    createPaymentIntent,
    clientSecret,
    setClientSecret,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context)
    throw new Error('useCart deve ser usado dentro de um CartProvider');
  return context;
}
