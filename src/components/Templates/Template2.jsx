import { forwardRef } from 'react'
import useInvoice from '../../Hook/useInvoice'

const InvoiceHeader = ({ state, accentClass }) => (
  <div className={`flex justify-between items-center ${accentClass} text-white p-4 rounded-t`}>
    <div>
      <h2 className="text-2xl font-bold">{state.title}</h2>
      <div className="text-sm">#{state.invoiceNumber}</div>
    </div>
    <div className="text-right text-sm">
      <div>Date: {state.date}</div>
      <div>Due: {state.dueDate || '-'}</div>
    </div>
  </div>
)

const InvoiceFromTo = ({ from, to }) => (
  <div className="flex justify-between mt-4 text-sm">
    <div>
      <strong>From:</strong> {from.name}<br/>
      <span className="text-xs">{from.address}</span>
    </div>
    <div className="text-right">
      <strong>To:</strong> {to.name}<br/>
      <span className="text-xs">{to.address}</span>
    </div>
  </div>
)

const InvoiceItems = ({ items }) => (
  <div className="mt-6 space-y-2">
    {items.map(it => (
      <div key={it.id} className="flex justify-between py-2 border-b text-sm">
        <div>
          <div className="font-medium">{it.name}</div>
          <div className="text-xs text-gray-500">Qty: {it.qty} × Rs.{Number(it.unitPrice).toFixed(2)}</div>
        </div>
        <div className="font-semibold">Rs.{(Number(it.qty) * Number(it.unitPrice)).toFixed(2)}</div>
      </div>
    ))}
  </div>
)

const InvoiceTotal = ({ derived, taxPercent }) => (
  <div className="mt-6 flex justify-end">
    <div className="w-56 border p-3 rounded text-sm">
      <div className="flex justify-between"><span>Subtotal</span><span>Rs.{derived.subTotal.toFixed(2)}</span></div>
      <div className="flex justify-between"><span>Tax ({taxPercent}%)</span><span>Rs.{derived.taxAmount.toFixed(2)}</span></div>
      <div className="flex justify-between font-bold text-lg mt-2"><span>Total</span><span>Rs.{derived.total.toFixed(2)}</span></div>
    </div>
  </div>
)

const InvoiceNotes = ({ notes, signature }) => (
  <div className="mt-4 text-sm">
    <div>{notes}</div>
    {signature && <img src={signature} alt="signature" className="h-10 mt-2" />}
  </div>
)

export default forwardRef(function Template2(_, ref) {
  const { state, derived } = useInvoice()
  const accentClass = 'bg-emerald-600'

  return (
    <div ref={ref} className="invoice-preview bg-white p-6 rounded shadow">
      <InvoiceHeader state={state} accentClass={accentClass} />
      <InvoiceFromTo from={state.from} to={state.to} />
      <InvoiceItems items={state.items} />
      <InvoiceTotal derived={derived} taxPercent={state.taxPercent} />
      <InvoiceNotes notes={state.notes} signature={state.signature} />
    </div>
  )
})
