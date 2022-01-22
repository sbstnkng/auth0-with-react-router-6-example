import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getInvoice, deleteInvoice } from '../data';

const Invoice: React.FC = () => {
  const params = useParams();
  const navigate = useNavigate();
  const invoice = getInvoice(parseInt(params.invoiceId as string, 10));

  return (
    <main style={{ padding: '1rem' }}>
      <h2>Total Due: {invoice!.amount}</h2>
      <p>
        {invoice!.name}: {invoice!.number}
      </p>
      <p>Due Date: {invoice!.due}</p>
      <p>
        <button
          onClick={() => {
            deleteInvoice(invoice!.number);
            navigate('/invoices');
          }}
        >
          Delete
        </button>
      </p>
    </main>
  );
};

export default Invoice;
