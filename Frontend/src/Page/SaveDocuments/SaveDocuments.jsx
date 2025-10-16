import useAxiosPublic from '../../Hook/useAxiosPublic';
import useSavePdf from '../../Hook/useSavePdf';
import Swal from "sweetalert2";
function SaveDocuments() {
    const [savePdf, refetch] = useSavePdf();
    const axiosPublic = useAxiosPublic();

    if (!savePdf.length) return <p className="text-center mt-4">No invoices found</p>;

    // delete 
    const handleDelete = (inv) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This invoice will be permanently deleted!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/savePdf/${inv._id}`)
                    .then(() => {
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: "The invoice has been deleted successfully.",
                            icon: "success",
                            timer: 1500,
                            showConfirmButton: false,
                            position: "top-end",
                        });
                    })
                    .catch((error) => {
                        console.error("Delete error:", error);
                        Swal.fire({
                            title: "Error!",
                            text: "Failed to delete invoice.",
                            icon: "error",
                        });
                    });
            }
        });
    };


    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 py-10">
            <div className="space-y-6 w-4xl px-2 ">
                {savePdf.map((inv) => (
                    <div key={inv._id} className="border rounded-lg shadow p-4 bg-white">

                        <div className="flex justify-between items-center bg-indigo-600 text-white p-3 rounded-t-lg">
                            <div>
                                <h3 className="text-lg font-bold">{inv.title}</h3>
                                <p className="text-sm">#{inv.invoiceNumber}</p>
                            </div>
                            <div className="text-right text-sm">
                                <p>Date: {inv.date}</p>
                                <p>Due: {inv.dueDate}</p>
                                <button onClick={(() => { handleDelete(inv) })} className="mt-2 px-2 py-1 bg-red-600 rounded text-white text-xs hover:bg-red-500">
                                    Delete
                                </button>
                            </div>
                        </div>

                        {/* from / to */}
                        <div className="flex justify-between text-sm mt-4 px-2">
                            <div>
                                <p className="font-semibold mb-1">From</p>
                                <p>{inv.from?.name}</p>
                                <p>{inv.from?.address}</p>
                                <p>{inv.from?.email}</p>
                                <p>{inv.from?.phone}</p>
                            </div>
                            <div className="text-right">
                                <p className="font-semibold mb-1">To</p>
                                <p>{inv.to?.name}</p>
                                <p>{inv.to?.address}</p>
                                <p>{inv.to?.email}</p>
                                <p>{inv.to?.phone}</p>
                            </div>
                        </div>

                        {/* items table */}
                        <table className="w-full mt-4 border border-gray-300 text-sm">
                            <thead className="bg-gray-100 border-b border-gray-300">
                                <tr>
                                    <th className="text-left p-2 font-semibold">Description</th>
                                    <th className="text-left p-2 font-semibold">Qty</th>
                                    <th className="text-left p-2 font-semibold">Unit</th>
                                    <th className="text-right p-2 font-semibold">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {inv.items?.map((item, i) => (
                                    <tr key={i} className="border-t border-gray-200">
                                        <td className="p-2">{item.name}</td>
                                        <td className="p-2">{item.qty}</td>
                                        <td className="p-2">Tk.{item.unitPrice.toFixed(2)}</td>
                                        <td className="p-2 text-right">Tk.{(item.qty * item.unitPrice).toFixed(2)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* total */}
                        <div className="flex justify-end mt-4">
                            <div className="w-64 border border-gray-300 rounded-md p-3 bg-gray-50">
                                <div className="flex justify-between text-sm mb-1">
                                    <span>Price:</span>
                                    <span>Tk.{inv.derived.subTotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span>Tax ({inv.taxPercent || 0}%):</span>
                                    <span>Tk.{inv.derived.taxAmount.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between font-semibold text-lg border-t mt-2 pt-2">
                                    <span>Total Price:</span>
                                    <span>Tk.{inv.derived.total.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>

                        {/* notes */}
                        {inv.notes && <p className="mt-4 text-sm">{inv.notes}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SaveDocuments;
