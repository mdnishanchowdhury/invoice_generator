function InvoiceHeader({ state, dispatch }) {
    return (
        <div className="p-4 bg-white rounded-lg shadow-sm">
            <fieldset className="col-span-3">
                <legend className="fieldset-legend block text-sm font-semibold mb-1">Invoice Title</legend>
                <input value={state.title} onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'title', value: e.target.value })}
                    className="input w-full border rounded p-2" />
            </fieldset>

            <div className="grid grid-cols-2 gap-4 mt-4">
                {/* invoide number*/}
                <div>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend block text-sm font-semibold mb-1">Invoice Number</legend>
                        <input value={state.invoiceNumber} onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'invoiceNumber', value: e.target.value })} className="input w-full border rounded p-2" />
                    </fieldset>
                </div>

                {/* Date */}
                <div>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend block text-sm font-semibold mb-1">Date</legend>
                        <input type="date" value={state.date} onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'date', value: e.target.value })} className="input w-full border rounded p-2" />
                    </fieldset>
                </div>

                {/* Due Date */}
                <div>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend block text-sm font-semibold mb-1">Due Dater</legend>
                        <input type="date" value={state.dueDate} onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'dueDate', value: e.target.value })} className="input w-full border rounded p-2" />
                    </fieldset>
                </div>

                {/* tax */}
                <div>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend block text-sm font-semibold mb-1">Tax %</legend>
                        <input type="number" value={state.taxPercent} onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'taxPercent', value: e.target.value })} className="input w-full border rounded p-2" />
                    </fieldset>
                </div>

            </div>
        </div>

    )
}

export default InvoiceHeader