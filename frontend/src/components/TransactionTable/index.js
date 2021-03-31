import React from 'react';
import { Table } from 'react-bootstrap';

import './styles.scss';

const TransactionTable = (props) => {
  const { transactions } = props;

  const parseDate = (sDate) => {
    let date = new Date(sDate);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let strTime = hours + ':' + minutes + ' ' + ampm;
    return (
      date.getMonth() +
      1 +
      '/' +
      date.getDate() +
      '/' +
      date.getFullYear() +
      '  ' +
      strTime
    );
  };

  return (
    <div className="transaction-table">
      {transactions.length === 0 ? (
        <p style={{fontSize: '1.0rem', fontWeight: '400', marginTop: '2rem'}}>No transactions are done in this month</p>
      ) : (
        <Table
          hover
          responsive
          className="table table-dark table-borderless table-sm"
          style={{ marginTop: '2rem' }}
        >
          <thead>
            <tr>
              <th>User</th>
              <th>Vendor</th>
              <th>Category</th>
              <th>Date</th>
              <th>Outstanding Amount(₹)</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => {
              return (
                <tr>
                  <td>{transaction.userAssociated}</td>
                  <td>{transaction.vendor}</td>
                  <td>{transaction.category}</td>
                  <td className="text-muted">
                    {parseDate(transaction.transactionDateTime)}
                  </td>
                  <td>
                    <span
                      className={`fas fa-arrow-${
                        transaction.credDeb === true ? 'down' : 'up'
                      }`}
                    ></span>{' '}
                    {transaction.amount}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default TransactionTable;
