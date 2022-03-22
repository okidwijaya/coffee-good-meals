import React, {useEffect, useState} from "react";
import "./index.css";

import imageVegie from "../../assets/vegie.png";
import { useSelector } from "react-redux";
import LoadingComponent from '../../components/LoadingComponent';
import {deleteHistory} from '../../utils/https/transactions';
import {logoutAction} from '../../redux/actions/auth';
import {toast} from 'react-toastify';
import Swal from "sweetalert2";

function CardHistory({id, name, total}) {
  console.log('cek props', id)
  const [checkId, setCheckId] = useState({id: []});
  // const [showModal, setShowModal] = useState(false);
  // const handleClose = () => setShowModal(false);
  // const handleShow = () => setShowModal(true);
  const token = useSelector(state => state.auth.userData.token);
  // console.log('token', token)
  

   const deleteHandler = () => {
      Swal.fire({
        icon: "warning",
        title: "Delete This Item",
        showCancelButton: true,
        confirmButtonText: "Delete",
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          console.log('brp id', id);
          const body = {id: [id]}
          deleteHistory(body, token)
            .then((res) => {
              console.log(res);
              return toast.success("Delete Succesfully", res.data);
              // window.location.reload();
            })
            .then((res) =>
            setTimeout(() => {
              window.location.reload()
            }, 2000))  
            .catch((err) => console.log(err));
        }
      })
    }

  return (
    <>
      <div className="row col-12 w-100">
        <div className="col-md-4 card-history">
          <div className="row col-md-12 card-history-cek w-100">
            <div className="row w-100">
              <div className="col col-md-4">
                <div className="image-history-wrapper">
                  {/* <p>{id}</p> */}
                  <img
                    src={imageVegie}
                    alt="imageHistory"
                    className="image-vegie"
                  />
                </div>
              </div>
              <div className="col col-md-8">
                <p className="brand-history mt-2">{name}</p>
                <p className="priced-history">IDR {total}</p>
                <div className="row w-100">
                  <div className="col col-md-8 delivered-history">
                    Delivered
                  </div>
                  <div className="col col-md-4 checkbox-history">
                    <input type="checkbox" className="check-history-select" onClick={deleteHandler}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        <Modal show={showModal} onHide={handleClose} className="modal-deleteHistory">
          <Modal.Header closeButton>
            <Modal.Title className="mx-auto">DELETE THIS ITEM</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <button className="btn" onClick={deleteHandler}>Yes</button>
            </div>
            <div>
              <button className="btn" onClick={handleClose}>No</button>
            </div>
          </Modal.Body>
        </Modal>
      </div> */}
    </>
  );
}

export default CardHistory;
