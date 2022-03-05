import React from 'react';
import {FaDownload, FaSearch} from 'react-icons/fa'
import {BsFunnelFill} from 'react-icons/bs'
import ReactHtmlTableToExcel from "react-html-table-to-excel";
import { PDFDownloadLink } from '@react-pdf/renderer';
const RunsheetDetails = (props) => {
    const {runSheet, document} = props
    let totalValue = runSheet?.orders
    ?.map((item) => item.value)
    .reduce((a, b) => a + b, 0);
    return (
        <div className="mb-5">
        <h2 className="bg-gray-500 text-white p-2 rounded my-3 text-xl text-bold">
          Run Sheet details
        </h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-1">
          <div>
            <p>
              <span className="font-bold">Run Sheet Number : </span>
              {runSheet?.number}
            </p>
            <p>
              <span className="font-bold">Driver Name : </span>
              {runSheet?.driver}
            </p>
            <p>
              <span className="font-bold">Number of Orders : </span>
              {runSheet?.orders?.length}
            </p>
            <p>
              <span className="font-bold">Total Amount : </span>
              {totalValue}
            </p>
            <p>
              <span className="font-bold">Undelivered Order Amount : </span>
              {totalValue}
            </p>
          </div>
          <div>
            <p>
              <span className="font-bold">Run Sheet Date : </span>
              {runSheet?.date}
            </p>
            <p>
              <span className="font-bold">Location : </span>
              {runSheet?.location}
            </p>
            <p>
              <span className="font-bold">Sheet Status : </span>
              {runSheet?.status}
            </p>
            <p>
              <span className="font-bold">Out Of Delivery orders : </span>
              {runSheet?.orders?.length}
            </p>
          </div>
          <div>
            <p>
              <span className="font-bold">Collected Amount : </span>
              {0}
            </p>
            <p>
              <span className="font-bold">Due Amount : </span>
              {0}
            </p>
            <p>
              <span className="font-bold">Devilered Orders : </span>
              {0}
            </p>
            <p>
              <span className="font-bold">Undelivered Orders : </span>
              {0}
            </p>
          </div>
        </div>
        <h2 className="bg-gray-500 text-white p-2 rounded my-3 text-xl text-bold">
          Order Lists
        </h2>
        <p>Scan Undelivered orders</p>
        <form action="">
          <input
            onChange={(e) => setSheetNo(e.target.value)}
            type="text"
            className="border-2 border-gray-400 rounded w-80 px-1 py-2 my-2"
            placeholder="RS-00000002"
          />{" "}
          <br />
          <button className="w-80 text-white rounded bg-green-500 p-2 ">
            Scan
          </button>
        </form>
        <div className="flex justify-between my-3">
            <div className="flex gap-2    ">
                <span className="flex rounded cursor-pointer gap-2 items-center p-2 bg-gray-400 text-white"> <FaDownload />    <ReactHtmlTableToExcel
                  id="test-table-xls-button"
                  className="download-table-xls-button"
                  table="table-to-xls"
                  filename="OrdersData"
                  sheet="tablexls"
                  buttonText="Download as XLS"/> </span>
                <span className="flex rounded cursor-pointer gap-2 items-center p-2 bg-gray-400 text-white"> <FaDownload />  <PDFDownloadLink document={document} fileName="somename.pdf">
      {({ blob, url, loading, error }) =>
        loading ? 'Loading document...' : 'Download now!'
      }
    </PDFDownloadLink></span>
            </div>
            <div className="flex border p-2  items-center gap-1">
                <input placeholder="Search..." className="outline-none" type="text" /> <FaSearch />
            </div>
            </div>
         
            <div>
            <table id="table-to-xls" className="table-auto min-w-full border-collapse border border-slate-400">
               
                    <tr className="bg-slate-200">
                        <th className="p-1 items-center border border-slate-300">Customer Name <BsFunnelFill className="inline" /> </th>
                        <th className="p-1 items-center border border-slate-300">Order Number <BsFunnelFill className="inline" /> </th>
                        <th className="p-1 items-center border border-slate-300">Customer Address <BsFunnelFill className="inline" /> </th>
                        <th className="p-1 items-center border border-slate-300">Contact No <BsFunnelFill className="inline" /> </th>
                        <th className="p-1 items-center border border-slate-300">Attempts <BsFunnelFill className="inline" /> </th>
                        <th className="p-1 items-center border border-slate-300">Quantity <BsFunnelFill className="inline" /> </th>
                        <th className="p-1 items-center border border-slate-300">Order Value <BsFunnelFill className="inline" /> </th>
                        <th className="p-1 items-center border border-slate-300">Collected Amount <BsFunnelFill className="inline" /> </th>
                        <th className="p-1 items-center border border-slate-300">Due Amount <BsFunnelFill className="inline" /> </th>
                        <th className="p-1 items-center border border-slate-300">Status <BsFunnelFill className="inline" /> </th>
                  
                    </tr>
                
                
                    {
                        runSheet?.orders.map(order => {
                            return <tr className="border-collapse border border-slate-400" key={order.orderNo}>
                                <td className="border-collapse p-1 border border-slate-400">{order?.customerName}</td>
                                <td className="border-collapse p-1 border border-slate-400">{order?.orderNo}</td>
                                <td className="border-collapse p-1 border border-slate-400">{order?.address}</td>
                                <td className="border-collapse p-1 border border-slate-400">{order?.contact}</td>
                                <td className="border-collapse p-1 border border-slate-400">{0}</td>
                                <td className="border-collapse p-1 border border-slate-400">{order?.quantity}</td>
                                <td className="border-collapse p-1 border border-slate-400">{order?.value}</td>
                                <td className="border-collapse p-1 border border-slate-400">{order?.collected}</td>
                                <td className="border-collapse p-1 border border-slate-400">{order?.value - order?.collected}</td>
                                <td className="border-collapse p-1 border border-slate-400">{order?.status}</td>
                               
                            </tr>
                        })
                    }
               
            </table>
        </div>
        
      </div>
    );
};

export default RunsheetDetails;