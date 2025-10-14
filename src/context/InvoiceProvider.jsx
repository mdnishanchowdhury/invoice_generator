import { createContext, useState } from "react"

// context create
export const InvoiceContext = createContext();

function InvoiceProvider({ children }) {
    const today = new Date().toISOString().slice(0, 10);

    // input from
    const [invoice, setInvoice] = useState({
        selectedTemplate: 1,
        title: "Invoice",
        invoiceNumber: `INV-${Date.now()}`,
        date: today,
        dueDate: "",
        from: { name: "", address: "", email: "", phone: "" },
        to: { name: "", address: "", email: "", phone: "" },
        items: [{ id: 1, name: "", qty: 0, unitPrice: 0 }],
        taxPercent: 0,
        notes: "Thank you for your business",
        signature: null
    })

    // update single invoice
    const updateInvoice = (path, value) => {
        const keys = path.split(".");
        setInvoice(prev => {
            const copy = { ...prev };
            let temp = copy;
            keys.forEach((key, i) => {
                if (i === keys.length - 1) {
                    temp[key] = value;
                } else {
                    temp[key] = { ...temp[key] };
                    temp = temp[key];
                }
            });
            return copy;
        });
    };


    // calculation total
    const subTotal = invoice.items.reduce((sum, item) => sum + item.qty * item.unitPrice, 0);


    // tax amount calculation
    const taxAmount = subTotal * (invoice.taxPercent / 100);
    const total = subTotal + taxAmount;

    return (
        <InvoiceContext.Provider value={{ invoice, updateInvoice, subTotal, taxAmount, total }}>
            {children}
        </InvoiceContext.Provider>
    )
}

export default InvoiceProvider;