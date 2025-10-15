function InvoiceFromTo({ state, dispatch }) {
    return (
        <div className="fieldset grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-lg shadow-sm">
                <h4 className="font-semibold mb-2 ">From</h4>

                {/* company */}
                <fieldset className="fieldset">
                    <input placeholder="Company name" value={state.from.name} onChange={(e) => dispatch({ type: 'SET_FROM', field: 'name', value: e.target.value })} className="input w-full border rounded p-2 mb-2" />
                </fieldset>

                {/* address */}
                <fieldset className="fieldset">
                    <input placeholder="Address" value={state.from.address} onChange={(e) => dispatch({ type: 'SET_FROM', field: 'address', value: e.target.value })} className="input w-full border rounded p-2 mb-2" />
                </fieldset>

                {/* email*/}
                <fieldset className="fieldset">
                    <input placeholder="Email" value={state.from.email} onChange={(e) => dispatch({ type: 'SET_FROM', field: 'email', value: e.target.value })} className=" input w-full border rounded p-2 mb-2" />
                </fieldset>

                {/* phone*/}
                <fieldset className="fieldset">
                    <input placeholder="Phone" value={state.from.phone} onChange={(e) => dispatch({ type: 'SET_FROM', field: 'phone', value: e.target.value })} className="input w-full border rounded p-2" />
                </fieldset>
            </div>

            <div className="p-4 bg-white rounded-lg shadow-sm">
                <h4 className="font-semibold mb-2">To</h4>
                {/* client name*/}
                <fieldset className="fieldset">
                    <input placeholder="Client name" value={state.to.name} onChange={(e) => dispatch({ type: 'SET_TO', field: 'name', value: e.target.value })} className="input w-full border rounded p-2 mb-2" />
                </fieldset>

                {/* address */}
                <fieldset className="fieldset">
                    <input placeholder="Address" value={state.to.address} onChange={(e) => dispatch({ type: 'SET_TO', field: 'address', value: e.target.value })} className="input w-full border rounded p-2 mb-2" />
                </fieldset>

                {/* email"*/}
                <fieldset className="fieldset">
                    <input placeholder="Email" value={state.to.email} onChange={(e) => dispatch({ type: 'SET_TO', field: 'email', value: e.target.value })} className="input w-full border rounded p-2 mb-2" />
                </fieldset>

                {/* phone"*/}
                <fieldset className="fieldset">
                    <input placeholder="Phone" value={state.to.phone} onChange={(e) => dispatch({ type: 'SET_TO', field: 'phone', value: e.target.value })} className="input w-full border rounded p-2" />
                </fieldset>

            </div>
        </div>
    )
}

export default InvoiceFromTo;