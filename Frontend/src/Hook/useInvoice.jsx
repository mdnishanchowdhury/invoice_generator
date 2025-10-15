import { useContext } from "react";
import { InvoiceContext } from "../context/InvoiceProvider";

function useInvoice() {
    const invoice = useContext(InvoiceContext);
    return invoice;
}

export default useInvoice;