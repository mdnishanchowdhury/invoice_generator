import { MdOutlineDeleteOutline } from 'react-icons/md'

function InvoiceItems({ state, derived, dispatch }) {
    return (
        <div className="p-4 bg-white rounded-lg shadow-sm">
            <h4 className="font-semibold mb-3">Items</h4>

            <div className="space-y-2">
                {
                    state.items.map((it) => (
                        <div key={it.id} className="grid grid-cols-12 gap-2 items-center">

                            {/* Item description */}
                            <fieldset className="col-span-5">
                                <legend className="fieldset-legend block text-sm font-semibold mb-1">Item description</legend>
                                <input
                                    className="input  w-full border rounded p-2"
                                    placeholder="Item description"
                                    value={it.name}
                                    onChange={(e) =>
                                        dispatch({ type: 'UPDATE_ITEM', id: it.id, field: 'name', value: e.target.value })
                                    }
                                />
                            </fieldset>

                            {/* Quantity */}
                            <fieldset className="col-span-2">
                                <legend className="fieldset-legend block text-sm font-semibold mb-1">Quantity </legend>
                                <input
                                    className="input  w-full border rounded p-2"
                                    type="number"
                                    min="0"
                                    placeholder="Quantity"
                                    value={it.qty}
                                    onChange={(e) =>
                                        dispatch({ type: 'UPDATE_ITEM', id: it.id, field: 'qty', value: Number(e.target.value) })
                                    }
                                />
                            </fieldset>

                            {/* Price */}
                            <fieldset className="col-span-3">
                                <legend className="fieldset-legend block text-sm font-semibold mb-1">Price</legend>
                                <input
                                    className="input w-full border rounded p-2"
                                    placeholder="Item Price"
                                    type="number"
                                    min="0"
                                    value={it.unitPrice}
                                    onChange={(e) => {
                                        const val = e.target.value;
                                        dispatch({
                                            type: 'UPDATE_ITEM',
                                            id: it.id,
                                            field: 'unitPrice',
                                            value: val === '' ? '' : Number(val),
                                        });
                                    }}
                                />
                            </fieldset>


                            <div className='col-span-2 flex gap-3 items-center pt-10 '>
                                {/* Amount */}
                                <div className="text-right">
                                    {(Number(it.qty || 0) * Number(it.unitPrice || 0)).toFixed(2)}
                                </div>

                                {/* Remove button */}
                                <button
                                    onClick={() => dispatch({ type: 'REMOVE_ITEM', id: it.id })}
                                >
                                    <MdOutlineDeleteOutline className='w-5 h-5 object-cover' />
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>


            <div className="mt-3 flex gap-2">
                <button onClick={() => dispatch({ type: 'ADD_ITEM' })} className="px-3 py-2 bg-indigo-600 text-white rounded">Add Item</button>
                <div className="ml-auto text-sm">
                    Subtotal: <strong>Tk- {derived.subTotal.toFixed(2)}</strong>
                </div>
            </div>
        </div>
    )
}

export default InvoiceItems