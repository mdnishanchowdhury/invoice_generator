import { View, Text, Image as PDFImage } from "@react-pdf/renderer";

const Template3PDF = ({ state, derived }) => (
    <View
        style={{
            padding: 20,
            fontSize: 10,
            fontFamily: "Helvetica",
            backgroundColor: "#fff",
            lineHeight: 1.5,
        }}
    >
        {/* header */}
        <View
            style={{
                backgroundColor: "#334155",
                borderTopLeftRadius: 6,
                borderTopRightRadius: 6,
                paddingVertical: 12,
                paddingHorizontal: 14,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <View>
                <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>
                    {state.title || "Invoice"}
                </Text>
                <Text style={{ color: "white", marginTop: 2 }}>
                    #{state.invoiceNumber}
                </Text>
            </View>
            <View style={{ textAlign: "right" }}>
                <Text style={{ color: "white" }}>Date: {state.date || "-"}</Text>
                <Text style={{ color: "white" }}>Due: {state.dueDate || "-"}</Text>
            </View>
        </View>

        <View
            style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 14,
                marginBottom: 10,
                paddingLeft:10,
                paddingRight:10,
            }}
        >
            {/* from */}
            <View style={{ width: "45%" }}>
                <Text style={{ fontWeight: "bold", marginBottom: 4 }}>From</Text>
                <Text>{state.from?.name}</Text>
                <Text>{state.from?.address}</Text>
                <Text>{state.from?.email}</Text>
                <Text>{state.from?.phone}</Text>
            </View>

            {/* to */}
            <View style={{ width: "45%", textAlign: "right" }}>
                <Text style={{ fontWeight: "bold", marginBottom: 4 }}>To</Text>
                <Text>{state.to?.name}</Text>
                <Text>{state.to?.address}</Text>
                <Text>{state.to?.email}</Text>
                <Text>{state.to?.phone}</Text>
            </View>
        </View>

        {/* items table */}
        <View
            style={{
                borderWidth: 1,
                borderColor: "#e5e7eb",
                borderRadius: 4,
                marginBottom: 14,
            }}
        >
            <View
                style={{
                    flexDirection: "row",
                    backgroundColor: "#f3f4f6",
                    borderBottomWidth: 1,
                    borderBottomColor: "#e5e7eb",
                    paddingVertical: 6,
                    paddingHorizontal: 8,
                }}
            >
                <Text style={{ flex: 2, fontWeight: "bold" }}>Description</Text>
                <Text style={{ flex: 1, fontWeight: "bold" }}>Qty</Text>
                <Text style={{ flex: 1, fontWeight: "bold" }}>Unit</Text>
                <Text style={{ flex: 1, fontWeight: "bold", textAlign: "right" }}>
                    Amount
                </Text>
            </View>

            {state.items?.map((item, i) => (
                <View
                    key={i}
                    style={{
                        flexDirection: "row",
                        paddingVertical: 6,
                        paddingHorizontal: 8,
                        borderBottomWidth: i === state.items.length - 1 ? 0 : 1,
                        borderBottomColor: "#f3f4f6",
                    }}
                >
                    <Text style={{ flex: 2 }}>{item.name}</Text>
                    <Text style={{ flex: 1 }}>{item.qty}</Text>
                    <Text style={{ flex: 1 }}>Tk.{item.unitPrice.toFixed(2)}</Text>
                    <Text style={{ flex: 1, textAlign: "right" }}>
                        Tk.{(item.qty * item.unitPrice).toFixed(2)}
                    </Text>
                </View>
            ))}
        </View>

        {/* total section */}
        <View
            style={{
                alignSelf: "flex-end",
                width: 180,
                borderWidth: 1,
                borderColor: "#e5e7eb",
                borderRadius: 6,
                padding: 8,
                backgroundColor: "#f9fafb",
                marginTop: 4,
            }}
        >
            <Text>Price: Tk.{derived.subTotal.toFixed(2)}</Text>
            <Text>Tax ({state.taxPercent}%): Tk.{derived.taxAmount.toFixed(2)}</Text>
            <View
                style={{
                    borderTopWidth: 1,
                    borderTopColor: "#d1d5db",
                    marginTop: 4,
                    paddingTop: 4,
                }}
            >
                <Text style={{ fontWeight: "bold", fontSize: 12 }}>
                    Total Price: Tk.{derived.total.toFixed(2)}
                </Text>
            </View>
        </View>

        {/* signature image */}
        <View style={{ marginTop: 24 }}>
            <Text>Thank you for your business</Text>
            {
                state.signature && (
                    <View
                        style={{
                            width: 120,
                            height: 50,
                            marginTop: 8,
                            overflow: "hidden",
                        }}
                    >
                        <PDFImage
                            src={state.signature}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                padding: 5,
                            }}
                        />
                    </View>
                )
            }
        </View>
    </View>
);

export default Template3PDF;
