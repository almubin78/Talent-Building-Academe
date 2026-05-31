import { StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#f5f2ea",
    padding: 25,
  },

  passportBox: {
    border: "2px solid #999",
    borderRadius: 15,
    padding: 20,
    height: "100%",
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  title: {
    color: "#006d7a",
    fontSize: 18,
    fontWeight: "bold",
  },

  country: {
    color: "#006d7a",
    fontSize: 28,
    fontWeight: "bold",
  },

  documentBox: {
    alignItems: "flex-end",
  },

  documentTitle: {
    color: "#006d7a",
    fontSize: 12,
    fontWeight: "bold",
  },

  documentNumber: {
    fontSize: 20,
    marginTop: 5,
    letterSpacing: 2,
  },

  body: {
    flexDirection: "row",
    marginTop: 30,
  },

  photoBox: {
    width: 180,
    height: 220,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#ddd",
    marginRight: 20,
  },

  photo: {
    width: "100%",
    height: "100%",
  },

  info: {
    flex: 1,
  },

  row: {
    flexDirection: "row",
    marginBottom: 10,
  },

  field: {
    flex: 1,
    marginRight: 10,
  },

  label: {
    color: "#006d7a",
    fontSize: 11,
    fontWeight: "bold",
  },

  value: {
    fontSize: 18,
    textTransform: "uppercase",
  },

  bigValue: {
    fontSize: 24,
    textTransform: "uppercase",
  },

  signature: {
    fontSize: 24,
    marginTop: 10,
  },

  mrzContainer: {
    marginTop: 60,
  },

  mrz: {
    fontFamily: "Courier",
    fontSize: 18,
    letterSpacing: 2,
  },
});

export default styles;