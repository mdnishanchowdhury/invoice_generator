import { forwardRef } from "react";
import useInvoice from "../../Hook/useInvoice";

// header section
const InvoiceHeader = ({ state }) => (
  <div className="flex justify-between items-center bg-indigo-600 text-white p-5 rounded-t-lg">
    <div>
      <h2 className="text-2xl font-bold">{state.title || "Invoice"}</h2>
      <p className="text-sm opacity-90">#{state.invoiceNumber}</p>
    </div>
    <div className="text-right text-sm">
      <p>Date: {state.date || "-"}</p>
      <p>Due: {state.dueDate || "-"}</p>
    </div>
  </div>
);

// from / to
const InvoiceFromTo = ({ from, to }) => (
  <div className="flex justify-between text-sm mt-4">
    <div>
      <p className="font-semibold mb-1">From</p>
      <p>{from?.name}</p>
      <p>{from?.address}</p>
      <p>{from?.email}</p>
      <p>{from?.phone}</p>
    </div>
    <div className="text-right">
      <p className="font-semibold mb-1">To</p>
      <p>{to?.name}</p>
      <p>{to?.address}</p>
      <p>{to?.email}</p>
      <p>{to?.phone}</p>
    </div>
  </div>
);

// items table
const InvoiceItems = ({ items }) => (
  <table className="w-full mt-6 border border-gray-300 rounded-lg overflow-hidden text-sm">
    <thead className="bg-gray-100 border-b border-gray-300">
      <tr>
        <th className="text-left p-2 font-semibold">Description</th>
        <th className="text-left p-2 font-semibold">Qty</th>
        <th className="text-left p-2 font-semibold">Unit</th>
        <th className="text-right p-2 font-semibold">Amount</th>
      </tr>
    </thead>
    <tbody>
      {
        items.length > 0 ? (
          items.map((it, i) => (
            <tr key={i} className="border-t border-gray-200">
              <td className="p-2">{it.name}</td>
              <td className="p-2">{it.qty}</td>
              <td className="p-2">Tk.{Number(it.unitPrice).toFixed(2)}</td>
              <td className="p-2 text-right">Tk.{(it.qty * it.unitPrice).toFixed(2)}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" className="text-center text-gray-500 p-4">
              No items added
            </td>
          </tr>
        )
      }
    </tbody>
  </table>
);

// total section
const InvoiceTotal = ({ derived, taxPercent }) => (
  <div className="flex justify-end mt-6">
    <div className="w-64 border border-gray-300 rounded-md p-4 bg-gray-50">
      <div className="flex justify-between text-sm mb-1">
        <span>Price:</span>
        <span>Tk.{derived.subTotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between text-sm mb-1">
        <span>Tax ({taxPercent || 0}%):</span>
        <span>Tk.{derived.taxAmount.toFixed(2)}</span>
      </div>
      <div className="flex justify-between font-semibold text-lg border-t mt-2 pt-2">
        <span>Total Price:</span>
        <span>Tk.{derived.total.toFixed(2)}</span>
      </div>
    </div>
  </div>
);

// notes & signature
const InvoiceNotes = ({ notes, signature }) => (
  <div className="mt-6 text-sm">
    {notes && <p>{notes}</p>}
    {signature && <img src={signature} alt="signature" className="h-12 mt-3" />}
  </div>
);

export default forwardRef(function Template1(_, ref) {
  const { state, derived } = useInvoice();

  return (
    <div ref={ref} className="bg-white rounded-lg shadow p-6 mx-auto">
      <InvoiceHeader state={state} />
      <InvoiceFromTo from={state.from} to={state.to} />
      <InvoiceItems items={state.items} />
      <InvoiceTotal derived={derived} taxPercent={state.taxPercent} />
      <InvoiceNotes notes={state.notes} signature={state.signature} />
    </div>
  );
});
