import React, { useEffect, useState } from "react";
import CardHistory from "../../components/historyCard";
import Navactive from "../../components/navigation/Nav";
import LoadingComponent from "../../components/LoadingComponent";
import { toast } from "react-toastify";
import "./index.css";

import { getHistory } from "../../utils/https/transactions";
import { logoutAction } from "../../redux/actions/auth";
import { logout } from "../../utils/https/auth";
import { useSelector } from "react-redux";

function History(props) {
  const [loading, setLoading] = useState(true);
  const [history, setHistory] = useState({});

  const token = useSelector((state) => state.auth.userData.token);
  // console.log(token);

  useEffect(() => {
    getHistory(token)
      .then((res) => {
        // console.log(res)
        setLoading(false);
        setHistory({ ...res.data.result.data });
        console.log("cekcek", history);
      })
      .catch((err) => {
        console.log(err);
        if (err.response.data.err_code) {
          if (
            err.response.data.err_code === "TOKEN_EXPIRED" ||
            err.response.data.err_code === "INVALID_TOKEN"
          ) {
            this.props.dispatch(logoutAction());
            toast.warning("Token Expired", {
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 3000,
            });
          }
        }
      });
  }, []);

  const a = history.result;
  console.log("awwww", a);

  return (
    <>
      <Navactive />
      {loading === false ? (
          <main className="history-page">
            <div className="row col-12">
              <div className="col col-md-12 title-history">
                <h1 className="title-history-detail">
                  Let's see what you have bought!
                </h1>
                <p className="select-history-item">Select item to delete</p>
                <p className="selectall-item-history">Select All</p>
              </div>
            </div>
              {Array.isArray(a) &&
                a.length > 0 &&
                a.map((product, idx) => (
                  <CardHistory
                  id={product.id}
                  name={product.name}
                  total={product.total}
                  key={idx}
                  />
                  ))}  
          </main>
      ) : (
        <LoadingComponent />
      )}
    </>
  );
}

export default History;
