import { forwardRef } from "react";
import useInvoice from "../../Hook/useInvoice";

const Template3 = forwardRef((_, ref) => {
  const { state, derived } = useInvoice();

  return (
    <div ref={ref} style={{ backgroundColor: "#ffffff" }} className="invoice-preview p-6 rounded shadow">
      <div style={{ backgroundColor: "#374151" }} className="text-white p-4 rounded-t flex justify-between">
        <div>
          <h2 className="text-2xl font-bold">{state.title}</h2>
          <div className="text-sm">#{state.invoiceNumber}</div>
        </div>
        <div className="text-right text-sm">
          <div>Date: {state.date}</div>
          <div>Due: {state.dueDate || "-"}</div>
        </div>
      </div>

      <div className="mt-4 text-sm flex justify-between">
        <div>
          <strong>From:</strong> {state.from.name}<br/>
          <span className="text-xs">{state.from.address}</span>
        </div>
        <div>
          <strong>To:</strong> {state.to.name}<br/>
          <span className="text-xs">{state.to.address}</span>
        </div>
      </div>

      <div className="mt-6 text-sm">
        {state.items.map(it => (
          <div key={it.id} className="flex justify-between py-2 border-b">
            <span>{it.name} (Qty: {it.qty})</span>
            <span>Rs.{(Number(it.qty)*Number(it.unitPrice)).toFixed(2)}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-end text-sm">
        <div className="w-48 border p-3 rounded">
          <div className="flex justify-between"><span>Subtotal</span><span>Rs.{derived.subTotal.toFixed(2)}</span></div>
          <div className="flex justify-between"><span>Tax ({state.taxPercent}%)</span><span>Rs.{derived.taxAmount.toFixed(2)}</span></div>
          <div className="flex justify-between font-bold mt-1"><span>Total</span><span>Rs.{derived.total.toFixed(2)}</span></div>
        </div>
      </div>

      {state.notes && <div className="mt-4 text-sm">{state.notes}</div>}
      {state.signature && <img src={state.signature} alt="signature" className="h-10 mt-2" />}
    </div>
  );
});

export default Template3;
