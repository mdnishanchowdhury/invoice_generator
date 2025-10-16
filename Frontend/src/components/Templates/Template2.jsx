import { forwardRef } from "react";
import useInvoice from "../../Hook/useInvoice";

const InvoiceHeader = ({ state }) => (
  <div className="bg-emerald-600 text-white p-4 rounded-t flex justify-between items-center">
    <div>
      <h2 className="text-xl font-bold">Invoice</h2>
      <p className="text-sm">#{state.invoiceNumber}</p>
    </div>
    <div className="text-sm text-right">
      <p>Date: {state.date}</p>
      <p>Due: {state.dueDate || "-"}</p>
    </div>
  </div>
);

const InvoiceFromTo = ({ from, to }) => (
  <div className="flex justify-between mt-4 text-sm">
    <div className="font-semibold">
      <p>
        From: <span className="font-normal">{from.name || "-"}</span>
      </p>
      {from.address && <p className="text-xs text-gray-600">{from.address}</p>}
    </div>
    <div className="text-right font-semibold">
      <p>
        To: <span className="font-normal">{to.name || "-"}</span>
      </p>
      {to.address && <p className="text-xs text-gray-600">{to.address}</p>}
    </div>
  </div>
);

const InvoiceItems = ({ items }) => (
  <div className="mt-6 border-b pb-2 text-sm">
    {items.length === 0 ? (
      <p className="text-gray-500 text-sm">Qty: 0 × Tk.0.00</p>
    ) : (
      items.map((it) => (
        <div key={it.id} className="flex justify-between py-1">
          <div>
            <p className="font-medium">{it.name}</p>
            <p className="text-xs text-gray-500">
              Qty: {it.qty} × Tk.{Number(it.unitPrice).toFixed(2)}
            </p>
          </div>
          <div className="font-semibold">
            Tk.{(Number(it.qty) * Number(it.unitPrice)).toFixed(2)}
          </div>
        </div>
      ))
    )}
  </div>
);

const InvoiceTotal = ({ derived, taxPercent }) => (
  <div className="mt-6 flex justify-end">
    <div className="w-56 border rounded p-3 text-sm">
      <div className="flex justify-between mb-1">
        <span>Subtotal</span>
        <span>Tk.{derived.subTotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-1">
        <span>Tax ({taxPercent}%)</span>
        <span>Tk.{derived.taxAmount.toFixed(2)}</span>
      </div>
      <div className="flex justify-between font-bold text-lg mt-2 border-t pt-2">
        <span>Total</span>
        <span>Tk.{derived.total.toFixed(2)}</span>
      </div>
    </div>
  </div>
);

const InvoiceNotes = ({ notes, signature }) => (
  <div className="mt-6 text-sm">
    {notes && <p>{notes}</p>}
    {signature && (
      <img src={signature} alt="signature" className="h-10 mt-3" />
    )}
    <p className="mt-6 text-gray-700">Thank you for your business</p>
  </div>
);

export default forwardRef(function Template2(_, ref) {
  const { state, derived } = useInvoice();

  return (
    <div
      ref={ref}
      className="invoice-preview bg-white p-6 rounded shadow-sm border border-gray-200"
    >
      <InvoiceHeader state={state} />
      <InvoiceFromTo from={state.from} to={state.to} />
      <InvoiceItems items={state.items} />
      <InvoiceTotal derived={derived} taxPercent={state.taxPercent} />
      <InvoiceNotes notes={state.notes} signature={state.signature} />
    </div>
  );
});
