import React, { useState } from "react";
import RunsheetDetails from "../runsheet/RunsheetDetails";
import data from "./../data/fakedata";
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';
const Scan = () => {
  const [sheetNo, setSheetNo] = useState("");
  const [runSheet, setRunSheet] = useState({});
  const [err, setErr] = useState("");
  const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1    
    },
    heading: {
      backgroundColor: 'gray',
      padding: '10px'
    },
  
  });

 const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.heading}>Runsheet Details</Text>
        
        </View>
        
      </Page>
    </Document>
  );
  const handleScan = (e) => {
    e.preventDefault();
    const matched = data.find((item) => item.number === sheetNo);
    if (
      matched
        ? setRunSheet(matched) && setErr("")
        : "No Result Found! Enter correct Run Sheed Number"
    )
      console.log(matched);
  };
  return (
    <div>
      <h2 className="bg-green-500 text-white p-2 rounded my-3 text-2xl text-bold">
        Record inward center
      </h2>
      <p>Scan/Enter Run Sheet Number eg: RS-00000002</p>
      <form action="">
        <input
          onChange={(e) => setSheetNo(e.target.value)}
          type="text"
          className="border-2 border-gray-400 rounded w-80 px-1 py-2 my-2"
          placeholder="RS-00000002"
        />{" "}
        <br />
        <button
          onClick={handleScan}
          className="w-80 text-white rounded bg-blue-500 p-2 "
          type="submit"
        >
          Scan
        </button>
      </form>
      {err && <h1>{err}</h1>}
      {runSheet?.number ? (
       <RunsheetDetails document={<MyDocument />} runSheet={runSheet} />
      ) : (
        ""
      )}
    
    </div>
  );
};

export default Scan;
