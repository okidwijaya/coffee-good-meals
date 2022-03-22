import React, { useEffect, useState } from "react";
import { deleteHistory, getHistory } from "../../utils/https/transactions";
import { logoutAction } from "../../redux/actions/auth";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import CardHistory from "../../components/historyCard";
import Navactive from "../../components/navigation/Nav";
import LoadingComponent from "../../components/LoadingComponent";
import "./index.css";
import Swal from "sweetalert2";

const formatPrice = (value) => {
  let price = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  })
    .format(value)
    .replace(/(\.|,)00$/g, "");
  return price;
};

function History(props) {
  const [loading, setLoading] = useState(true);
  const [history, setHistory] = useState({});
  const [isDelete, setIsDelete] = useState(false);
  const [idCheck, setIdCheck] = useState("");

  const token = useSelector((state) => state.auth.userData.token);
  // console.log(token);

  useEffect(() => {
    setLoading(true);
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
            toast.warning("Token Expired");
          }
        }
      });
  }, [token]);

  const handleChange = (e) => {
    const checked = e.target.checked;
    console.log(checked)
    if (checked === true) {
      setIsDelete(true);
    } else {
      setIsDelete(false);
    }
  };

  const deleteHandler = (e) => {
    // console.log("check", e.target.value);
    // {
    //   e.target.checked === true
    //     ? console.log("Halooo")
    //     : console.log("no data");

    Swal.fire({
      icon: "warning",
      title: "Delete This Item",
      showCancelButton: true,
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        const body = { id: [idCheck] };
        deleteHistory(body, token)
          .then((res) => {
            console.log(res);
            return toast.success("Delete Succesfully", res.data);
          })
          .then((res) =>
            setTimeout(() => {
              window.location.reload();
            }, 2000)
          )
          .catch((err) => console.log(err));
      }
    });
  };
  
  const a = history.result;
  // console.log('awwww', a);
  
  // console.log("id", idCheck);
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
              <p className="select-history-item mb-5">Select item to delete</p>
              {isDelete && <p className="selectall-item-history" onClick={deleteHandler}>Delete</p>}
            </div>
          </div>
          {Array.isArray(a) &&
            a.length > 0 &&
            a.map((product, idx) => (
              // <CardHistory
              //   id={product.id}
              //   name={product.name}
              //   total={formatPrice(product.total)}
              //   key={idx}
              // />
              <div className="row col-12 w-100" key={idx}>
                <div className="col-md-4 card-history">
                  <div className="row col-md-12 card-history-cek w-100">
                    <div className="row w-100">
                      <div className="col col-md-4">
                        <div className="image-history-wrapper">
                          <img
                            src={`${process.env.REACT_APP_HOST}/products/${product.image}`}
                            alt="imageHistory"
                            className="image-vegie"
                            onError={({ currentTarget }) => {
                              currentTarget.onerror = null;
                              currentTarget.src = require("../../assets/vegie.png");
                            }}
                          />
                        </div>
                      </div>
                      <div className="col col-md-8">
                        <p className="brand-history mt-2">{product.name}</p>
                        <p className="priced-history">
                          {formatPrice(product.total)}
                        </p>
                        <div className="row w-100">
                          <div className="col col-md-8 delivered-history">
                            Delivered
                          </div>
                          <div className="col col-md-4 checkbox-history">
                            <input
                              type="checkbox"
                              onChange={(e) => {
                                if (e.target.checked === true) {
                                  setIdCheck(product.id);
                                }
                                handleChange(e);
                              }}
                              className="check-history-select"
                              // onClick={deleteHandler}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </main>
      ) : (
        <LoadingComponent />
      )}
    </>
  );
}

export default History;
