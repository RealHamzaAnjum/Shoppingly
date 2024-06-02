import React, { useEffect, useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import './Order.css';

const Order = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('http://localhost:4000/orders');
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  const generatePdf = async (order) => {
    const input = document.getElementById(`order-${order._id}`);
    const canvas = await html2canvas(input);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF();

    pdf.setFontSize(18);
    pdf.text('Order Details', 20, 20);
    pdf.addImage(imgData, 'JPEG', 0, 30);
    pdf.setFontSize(12);
    pdf.text(`Generated on: ${new Date().toLocaleString()}`, 20, pdf.internal.pageSize.height - 10);

    pdf.save(`order_${order._id}.pdf`);
  };

  return (
    <div className="list-product">
      <h1>All Orders</h1>
      <div className="listproduct-all">
        <hr />
        {orders.map((order, index) => (
          <React.Fragment key={index}>
            <div id={`order-${order._id}`} className="listproduct-format listproduct-main pdf-content">
              <div className="pdf-header">
                <h1>Order Details</h1>
              </div>
              <div className="pdf-order-details">
                <p><strong>Name:</strong> {order.name}</p>
                <p><strong>Email:</strong> {order.email}</p>
                <p><strong>Address:</strong> {order.address}</p>
                <p><strong>City:</strong> {order.city}</p>
                <p><strong>Postal Code:</strong> {order.postalCode}</p>
                <p><strong>Country:</strong> {order.country}</p>
              </div>
              <div className="pdf-footer">
                <p>Thank you for your order!</p>
              </div>
              <button className="btn btn-primary" onClick={() => generatePdf(order)}>Download PDF</button>
            </div>
            <hr />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Order;
