import { useRef } from 'react'
import useInvoice from '../../Hook/useInvoice'
import InvoiceHeader from './InvoiceHeader'
import InvoiceFromTo from './InvoiceFromTo'
import InvoiceItems from './InvoiceItems'

function InvoiceForm() {
    const { state, derived, dispatch } = useInvoice()
    const fileRef = useRef()

    function handleSignatureUpload(e) {
        const file = e.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => {
            dispatch({ type: 'SET_SIGNATURE', value: reader.result });
        };
        reader.readAsDataURL(file);
    }

    return (
        <div className="space-y-6">
            {/* header */}
            <InvoiceHeader state={state} dispatch={dispatch}></InvoiceHeader>

            {/* from / to */}
            <InvoiceFromTo state={state} dispatch={dispatch}></InvoiceFromTo>

            {/* items */}
            <InvoiceItems state={state} derived={derived} dispatch={dispatch}></InvoiceItems>

            <div className="p-4 bg-white rounded-lg shadow-sm">

                {/*  notes */}
                <fieldset className="col-span-3">
                    <legend className="fieldset-legend block text-sm font-semibold mb-1">Notes</legend>
                    <textarea className="input w-full border rounded p-2 mb-2" rows="3" value={state.notes} onChange={e => dispatch({ type: 'SET_FIELD', field: 'notes', value: e.target.value })} />
                </fieldset>

                {/*   signature */}
                <fieldset className="col-span-3">
                    <legend className="fieldset-legend block text-sm font-semibold mb-1">Signature</legend>
                    <div className="flex items-center gap-4">
                        <input ref={fileRef} type="file" accept="image/*" onChange={handleSignatureUpload} className='file-input ' />
                        {state.signature && <img src={state.signature} alt="signature preview" className="h-16 object-contain border rounded" />}
                    </div>
                </fieldset>
            </div>
        </div>
    )
}
export default InvoiceForm;