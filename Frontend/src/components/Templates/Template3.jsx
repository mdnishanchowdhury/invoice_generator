import { forwardRef } from 'react'
import useInvoice from '../../Hook/useInvoice'

const Header = ({ state }) => (
  <div className="border-b-2 border-gray-300 pb-3 mb-6 flex justify-between items-center">
    <div>
      <h1 className="text-3xl font-semibold tracking-wide text-gray-800">{state.title}</h1>
      <p className="text-sm text-gray-500 mt-1">Invoice #{state.invoiceNumber}</p>
    </div>
    <div className="text-right text-sm text-gray-600">
      <p><span className="font-medium">Date:</span> {state.date}</p>
      <p><span className="font-medium">Due:</span> {state.dueDate || '-'}</p>
    </div>
  </div>
)

const FromTo = ({ from, to }) => (
  <div className="grid grid-cols-2 gap-6 mb-8 text-sm">
    <div>
      <h3 className="font-semibold text-gray-700 mb-1">From</h3>
      <p>{from.name}</p>
      <p className="text-xs text-gray-500">{from.address}</p>
    </div>
    <div className="text-right">
      <h3 className="font-semibold text-gray-700 mb-1">To</h3>
      <p>{to.name}</p>
      <p className="text-xs text-gray-500">{to.address}</p>
    </div>
  </div>
)

const Items = ({ items }) => (
  <div>
    <table className="w-full border-collapse text-sm">
      <thead>
        <tr className="bg-gray-100 text-gray-700">
          <th className="text-left py-2 px-3">Description</th>
          <th className="text-right py-2 px-3">Qty</th>
          <th className="text-right py-2 px-3">Unit</th>
          <th className="text-right py-2 px-3">Total</th>
        </tr>
      </thead>
      <tbody>
        {items.map(it => (
          <tr key={it.id} className="border-b hover:bg-gray-50">
            <td className="py-2 px-3">{it.name}</td>
            <td className="text-right py-2 px-3">{it.qty}</td>
            <td className="text-right py-2 px-3">Tk.{Number(it.unitPrice).toFixed(2)}</td>
            <td className="text-right py-2 px-3 font-semibold">Tk.{(it.qty * it.unitPrice).toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

const Totals = ({ derived, taxPercent }) => (
  <div className="mt-6 flex justify-end">
    <div className="w-60 bg-gray-50 p-4 rounded-md shadow-sm text-sm">
      <div className="flex justify-between"><span>Subtotal</span><span>Tk.{derived.subTotal.toFixed(2)}</span></div>
      <div className="flex justify-between"><span>Tax ({taxPercent}%)</span><span>Tk.{derived.taxAmount.toFixed(2)}</span></div>
      <div className="border-t mt-2 pt-2 flex justify-between font-semibold text-lg text-gray-800">
        <span>Total</span><span>Tk.{derived.total.toFixed(2)}</span>
      </div>
    </div>
  </div>
)

const Notes = ({ notes, signature }) => (
  <div className="mt-8 text-sm text-gray-600">
    {notes && <p className="italic mb-2">{notes}</p>}
    {signature && <img src={signature} alt="Signature" className="h-10 mt-3" />}
  </div>
)

export default forwardRef(function Template3(_, ref) {
  const { state, derived } = useInvoice()

  return (
    <div ref={ref} className="invoice-preview bg-white p-8 rounded-lg shadow-lg">
      <Header state={state} />
      <FromTo from={state.from} to={state.to} />
      <Items items={state.items} />
      <Totals derived={derived} taxPercent={state.taxPercent} />
      <Notes notes={state.notes} signature={state.signature} />
    </div>
  )
})
