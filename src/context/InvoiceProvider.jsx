import { createContext, useReducer } from "react"

// context create
export const InvoiceContext = createContext();

// initial data
const today = new Date().toISOString().slice(0, 10);

// input from
const initialState = {
    selectedTemplate: 1,
    title: "Invoice",
    invoiceNumber: `NO-${Date.now()}`,
    date: today,
    dueDate: "",
    from: { name: "", address: "", email: "", phone: "" },
    to: { name: "", address: "", email: "", phone: "" },
    items: [{ id: 1, name: "", qty: 0, unitPrice: 0 }],
    taxPercent: 0,
    notes: "Thank you for your business",
    signature: null,
}

const invoiceReducer = (state, action) => {
    switch (action.type) {
        // field update
        case "SET_FIELD":
            return { ...state, [action.field]: action.value };

        // from update
        case "SET_FROM":
            return { ...state, from: { ...state.from, [action.field]: action.value } };

        // to update
        case 'SET_TO':
            return { ...state, to: { ...state.to, [action.field]: action.value } }

        // new item
        case "ADD_ITEM":
            const newItem = { id: Date.now(), name: "", qty: 1, unitPrice: 0 };
            return { ...state, items: [...state.items, newItem] };

        // item update
        // case "UPDATE_ITEM":
        //     return {
        //         ...state,
        //         items: state.items.map((item) =>
        //             item.id === action.id ? { ...item, [action.field]: action.value } : item
        //         ),
        //     };

        case "UPDATE_ITEM":
            return {
                ...state,
                items: state.items.map((item) =>
                    item.id === action.id
                        ? { ...item, [action.field]: action.field === "unitPrice" ? Number(action.value) : action.value }
                        : item
                ),
            };


        // item remove
        case "REMOVE_ITEM":
            return { ...state, items: state.items.filter((item) => item.id !== action.id) };

        // template change
        case "SET_TEMPLATE":
            return { ...state, selectedTemplate: action.templateId };


        // signature update
        case "SET_SIGNATURE":
            return { ...state, signature: action.value };

        default:
            return state;
    }
}


function InvoiceProvider({ children }) {
    const [state, dispatch] = useReducer(invoiceReducer, initialState);



    // calculation total
    const subTotal = state.items.reduce((sum, item) => sum + item.qty * item.unitPrice, 0);


    // tax amount calculation
    const taxAmount = subTotal * (state.taxPercent / 100);
    const total = subTotal + taxAmount;

    const derived = { subTotal, taxAmount, total }

    return (
        <InvoiceContext.Provider value={{ state, dispatch, derived }}>
            {children}
        </InvoiceContext.Provider>
    )
}

export default InvoiceProvider;