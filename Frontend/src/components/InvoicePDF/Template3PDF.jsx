import { View, Text, Image as PDFImage } from "@react-pdf/renderer";

const Template3PDF = ({ state, derived }) => (
    <View
        style={{
            backgroundColor: "#ffffff",
            padding: 24,
            fontSize: 10,
            fontFamily: "Helvetica",
            lineHeight: 1.4,
        }}
    >
        {/* header */}
        <View
            style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: 12,
                borderBottomWidth: 1,
                borderBottomColor: "#e5e7eb",
                paddingBottom: 8,
            }}
        >
            <View>
                <Text style={{ fontSize: 18, fontWeight: "bold", color: "#111827" }}>
                    {state.title || "Invoice"}
                </Text>
                <Text style={{ fontSize: 9, color: "#6b7280", marginTop: 2 }}>
                    Invoice #{state.invoiceNumber}
                </Text>
            </View>
            <View style={{ textAlign: "right" }}>
                <Text style={{ fontSize: 9, color: "#374151" }}>
                    Date: {state.date || "-"}
                </Text>
                <Text style={{ fontSize: 9, color: "#374151" }}>
                    Due: {state.dueDate || "-"}
                </Text>
            </View>
        </View>

        {/* from / to */}
        <View
            style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 14,
            }}
        >
            <View style={{ width: "45%" }}>
                <Text style={{ fontWeight: "bold", color: "#111827", marginBottom: 4 }}>
                    From
                </Text>
                <Text>{state.from?.name}</Text>
                <Text>{state.from?.address}</Text>
                <Text>{state.from?.email}</Text>
                <Text>{state.from?.phone}</Text>
            </View>

            <View style={{ width: "45%", textAlign: "right" }}>
                <Text style={{ fontWeight: "bold", color: "#111827", marginBottom: 4 }}>
                    To
                </Text>
                <Text>{state.to?.name}</Text>
                <Text>{state.to?.address}</Text>
                <Text>{state.to?.email}</Text>
                <Text>{state.to?.phone}</Text>
            </View>
        </View>

        {/* items */}
        <View
            style={{
                borderWidth: 1,
                borderColor: "#e5e7eb",
                borderRadius: 6,
                overflow: "hidden",
            }}
        >
            {/* table header */}
            <View
                style={{
                    flexDirection: "row",
                    backgroundColor: "#f9fafb",
                    borderBottomWidth: 1,
                    borderBottomColor: "#e5e7eb",
                    paddingVertical: 6,
                    paddingHorizontal: 8,
                }}
            >
                <Text style={{ flex: 2, fontWeight: "bold" }}>Description</Text>
                <Text style={{ flex: 1, textAlign: "right", fontWeight: "bold" }}>
                    Qty
                </Text>
                <Text style={{ flex: 1, textAlign: "right", fontWeight: "bold" }}>
                    Unit
                </Text>
                <Text style={{ flex: 1, textAlign: "right", fontWeight: "bold" }}>
                    Total
                </Text>
            </View>

            {/* table */}
            {state.items?.map((item, index) => (
                <View
                    key={index}
                    style={{
                        flexDirection: "row",
                        borderBottomWidth:
                            index === state.items.length - 1 ? 0 : 1,
                        borderBottomColor: "#e5e7eb",
                        paddingVertical: 6,
                        paddingHorizontal: 8,
                    }}
                >
                    <Text style={{ flex: 2 }}>{item.name}</Text>
                    <Text style={{ flex: 1, textAlign: "right" }}>{item.qty}</Text>
                    <Text style={{ flex: 1, textAlign: "right" }}>
                        Tk.{item.unitPrice.toFixed(2)}
                    </Text>
                    <Text style={{ flex: 1, textAlign: "right", fontWeight: "bold" }}>
                        Tk.{(item.qty * item.unitPrice).toFixed(2)}
                    </Text>
                </View>
            ))}
        </View>

        {/* total*/}
        <View
            style={{
                alignSelf: "flex-end",
                width: 180,
                backgroundColor: "#f9fafb",
                borderWidth: 1,
                borderColor: "#e5e7eb",
                borderRadius: 6,
                padding: 8,
                marginTop: 10,
            }}
        >
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginBottom: 2,
                }}
            >
                <Text>Subtotal</Text>
                <Text>Tk.{derived.subTotal.toFixed(2)}</Text>
            </View>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginBottom: 2,
                }}
            >
                <Text>Tax ({state.taxPercent}%)</Text>
                <Text>Tk.{derived.taxAmount.toFixed(2)}</Text>
            </View>
            <View
                style={{
                    borderTopWidth: 1,
                    borderTopColor: "#d1d5db",
                    marginTop: 4,
                    paddingTop: 4,
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <Text style={{ fontWeight: "bold", fontSize: 12 }}>Total</Text>
                <Text style={{ fontWeight: "bold", fontSize: 12 }}>
                    Tk.{derived.total.toFixed(2)}
                </Text>
            </View>
        </View>

        {/* signature  */}
        <View style={{ marginTop: 24 }}>
            <Text
                style={{
                    fontStyle: "italic",
                    fontSize: 10,
                    color: "#374151",
                    marginBottom: 8,
                }}
            >
                Thank you for your business
            </Text>

            {state.signature && (
                <View
                    style={{
                        width: 100,
                        height: 40,
                        overflow: "hidden",
                    }}
                >
                    <PDFImage
                        src={state.signature}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                        }}
                    />
                </View>
            )}
        </View>
    </View>
);

export default Template3PDF;
