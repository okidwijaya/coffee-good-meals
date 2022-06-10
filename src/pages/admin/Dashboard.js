import React, {useEffect, useState} from 'react';
import './style.css';
import Navactive from '../../components/navigation/Nav';
import Stackchart from '../../components/chart/Stackchart';
import Goalschart from '../../components/chart/Goalschart';
import Staffchart from '../../components/chart/Staffchart';
import {useDispatch, useSelector} from 'react-redux';
import {getStatistic} from '../../utils/https/transactions';
import {toast} from 'react-toastify';
import LoadingComponent from '../../components/LoadingComponent';
import {logoutAction} from '../../redux/actions/auth';

const Dashboard = () => {
  const user = useSelector((state) => state.auth.userData);
  const dispatch = useDispatch();
  const [stats, setStats] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const token = user.token;
    setIsFetching(true);
    getStatistic(token)
      .then((res) => {
        console.log(res);
        setStats(res.data.result.result);
        setIsFetching(false);
      })
      .catch((err) => {
        console.log(err);
        if (
          err.response.data.err_code &&
          (err.response.data.err_code === 'TOKEN_EXPIRED' ||
            err.response.data.err_code === 'INVALID_TOKEN')
        ) {
          dispatch(logoutAction());
          toast.warning('Token Expired');
          setIsFetching(false);
        } else {
          toast.warning('Something went wrong');
          setIsFetching(false);
        }
      });
  }, [dispatch, user]);
  return (
    <>
      <Navactive />
      {stats && !isFetching ? (
        <>
          <p>See How your store progress so far</p>
          <div className='container mx-auto w-100 my-5'>
            <div className='form-check form-check-inline'>
              <input
                className='form-check-input'
                type='radio'
                name='flexRadioDefault'
                id='flexRadioDefault1'
              />
              <label className='form-check-label'>Daily</label>
            </div>
            <div className='form-check form-check-inline'>
              <input
                className='form-check-input'
                type='radio'
                name='flexRadioDefault'
                id='flexRadioDefault2'
              />
              <label className='form-check-label'>Weekly</label>
            </div>
            <div className='form-check form-check-inline'>
              <input
                className='form-check-input'
                type='radio'
                name='flexRadioDefault'
                id='flexRadioDefault2'
              />
              <label className='form-check-label'>Monthly</label>
            </div>
          </div>
          <div className='row dashboard-content'>
            <section className='col col-md-8'>
              {stats ? <Stackchart rawdata={stats} /> : <LoadingComponent />}
              <button className='btn btn-downlaod-report'>
                Download Report
              </button>
            </section>
            <aside className='col col-md-4 mx-auto'>
              <p className='title-dashboard'>Best Staff of the Month</p>
              <div className='col-5 mx-auto'>
                <Staffchart />
              </div>
              <p className='title-dashboard-desc'>
                Achieved 3.5M of total 5M 478 Customer
              </p>
              <div className='col mx-auto'>
                <p className='title-dashboard'>Goals</p>
                <p className='title-dashboard-desc'>
                  Your goals is still on 76%. Keep up the good work!
                </p>
                <div className='col-7 mx-auto'>
                  <Goalschart />
                </div>
              </div>
              <button className='btn btn-downlaod-report'>Share Report</button>
            </aside>
          </div>
        </>
      ) : (
        <LoadingComponent />
      )}
    </>
  );
};

export default Dashboard;
