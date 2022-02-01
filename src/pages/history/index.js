import React from 'react';
import CardHistory from '../../components/historyCard';
import Navactive from '../../components/navigation/Nav';
import "./index.css"


function History() {
  return (
    <>
    <Navactive />
    <main className="history-page">
        <div className="row col-12">
            <div className="col col-md-12 title-history">
                <h1 className="title-history-detail">Let's see what you have bought!</h1>
                <p className="select-history-item">Select item to delete</p>
                <p className="selectall-item-history">Select All</p>
            </div>
        </div>
        <CardHistory />
    </main>
    </>
  );
}

export default History;
