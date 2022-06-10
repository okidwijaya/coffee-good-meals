import React, {useState, useEffect} from 'react';
import '../style.css';
import Navactive from '../../../components/navigation/Nav';
import {getCategory} from '../../../utils/https/category';
import {toast} from 'react-toastify';
import {addPostPromo} from '../../../utils/https/promo';
import {useSelector} from 'react-redux';
// import axios from "axios";
import defaultImg from '../../../assets/default-img.png';
import {logout} from '../../../utils/https/auth';
import {logoutAction} from '../../../redux/actions/auth';
import SelectRound from '../../../components/SelectRound';

const Addpromo = (props) => {
  const token = useSelector((state) => state.auth.userData.token);
  console.log('my token', token);
  const [categories, setCategory] = useState([]);
  const [image, setImage] = useState(null);
  const [imgPrev, setImagePrev] = useState(null);

  useEffect(() => {
    const fetchBusinesses = () => {
      getCategory()
        .then((response) => {
          console.log(response.data);
          setCategory(response.data.result.data);
          console.log('category : ', categories[0].category);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchBusinesses();
  }, []);

  const [data, setData] = useState({
    name: '',
    id_category: '',
    description: '',
    code: '',
    discount: '',
    discount_start: '',
    discount_end: '',
    image: '',
    R: true,
    X: true,
    XL: true,
    dine_in: true,
    home_delivery: true,
    take_away: true,
    categories: null,
    selectedCategory: null,
    canSubmit: false,
  });

  const handleImage = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setImage(file);
    setImagePrev(URL.createObjectURL(file));
  };
  console.log('image file upl : ', image);

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('fomradta token : ', token);
    let body = new FormData();
    body.append('name', data.name);
    body.append('id_category', data.id_category);
    body.append('description', data.description);
    body.append('code', data.code);
    body.append('discount', data.discount);
    body.append('discount_start', data.discount_start);
    body.append('discount_end', data.discount_end);
    body.append('R', data.R);
    body.append('X', data.X);
    body.append('XL', data.XL);
    body.append('dine_in', data.dine_in);
    body.append('home_delivery', data.home_delivery);
    body.append('take_away', data.take_away);
    if (image) body.append('image', image);

    console.log('body data : ', body);
    console.log(body.discount);
    addPostPromo(body, token)
      .then((response) => {
        console.log('resposnse pos req', body);
        toast.success('Promo Added.', {
          position: 'top-right',
          autoClose: 5000,
        });

        console.log(response);
      })
      .catch((err) => {
        console.log(err, err.message);
        if (
          err.response.data.err_code === 'TOKEN_EXPIRED' ||
          err.response.data.err_code === 'INVALID_TOKEN'
        ) {
          props.dispatch(logoutAction());
          toast.warning('Token Expired');
        }
      });
  };

  return (
    <>
      <Navactive />

      <div className='Add-product-wrapper'>
        <div aria-label='breadcrumb'>
          <ol className='breadcrumb'>
            <li className='breadcrumb-item'>
              <a className='breadcrumb-page' href='/'>
                Favorite & Promo
              </a>
            </li>
            <li className='breadcrumb-item'>
              <a className='active-page' href='/'>
                Add new promo
              </a>
            </li>
          </ol>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='row add-product-content'>
            <aside className='col-11 col-sm-11 col-md-10 col-lg-5'>
              <div
              // value={image.file}
              // name="image"
              >
                {image &&
                <img src={imgPrev} className='add-image' alt='add pic' /> !==
                  null ? (
                  <img src={imgPrev} className='add-image' alt='add pic' />
                ) : (
                  <img src={defaultImg} className='add-image' alt='add pic' />
                )}
              </div>
              <div className='input-file-btn btn-add-byGallery btn-width-container btn-yellow-color font-brown-color'>
                <input
                  type='file'
                  id='file'
                  onChange={(e) => handleImage(e)}
                  {...data}
                />
                <label htmlFor='file'> Choose From Gallery</label>
              </div>
              <div className='btn btn-block btn-take-picture'>
                Take a picture
              </div>

              <div>
                <label className='add-product-title'>Enter the Discount:</label>
                <select
                  name='discount'
                  onChange={handleChange}
                  className='start-hour-btn'>
                  <option value='none' selected disabled>
                    Select an Option
                  </option>
                  <option value='10'>10%</option>
                  <option value='20'>20%</option>
                  <option value='30'>30%</option>
                  <option value='50'>50%</option>
                </select>
              </div>

              <div className='form-wrapper'>
                <label className='add-product-title'>Expired Date:</label>
                <input
                  type='date'
                  className='form-control start-hour-btn'
                  id='formGroupExampleInput'
                  placeholder='Select Start Date'
                  name='discount_start'
                  onChange={handleChange}
                />
                <input
                  type='date'
                  className='form-control start-hour-btn'
                  id='formGroupExampleInput'
                  placeholder='Select End Date'
                  name='discount_end'
                  onChange={handleChange}
                />
              </div>
              <div>
                <div className='form-group'>
                  <label className='add-product-title'>
                    Input Coupon Code:
                  </label>
                  <input
                    type='text'
                    className='form-control start-hour-btn'
                    id='formGroupExampleInput'
                    placeholder='Type promo name min. 50 characters'
                    name='code'
                    onChange={handleChange}
                  />
                </div>
              </div>
            </aside>

            <div className='col-11 col-sm-11 col-md-10 col-lg-6 mx-auto'>
              <div className='form-group'>
                <label className='add-product-title'>Name :</label>
                <input
                  type='text'
                  className='form-control add-product-input'
                  id='formGroupExampleInput'
                  placeholder='Type promo name min. 50 characters'
                  // value={data.name}
                  name='name'
                  onChange={handleChange}
                />
              </div>
              <div className='form-group'>
                <label className='add-product-title'>Category :</label>

                <select
                  value={categories.id}
                  name='id_category'
                  onChange={handleChange}
                  className='start-hour-btn-ctg'>
                  <option value='none' selected disabled hidden>
                    Select an Option
                  </option>
                  {categories.length > 0 &&
                    categories.map((category, idx) => (
                      <option value={category.id} key={idx}>
                        {category.category}
                      </option>
                    ))}
                </select>
              </div>
              <div className='form-group'>
                <label className='add-product-title'>Description :</label>
                <input
                  type='text'
                  className='form-control add-product-input'
                  id='formGroupExampleInput2'
                  placeholder='Describe your promo min. 150 characters'
                  value={data.description}
                  name='description'
                  onChange={handleChange}
                />
              </div>
              <div className='form-group'>
                <p className='add-product-title'>Input product size :</p>
                <p className='form-desc'>
                  Click size you want to use for this product
                </p>
                <div>
                  <SelectRound
                    value='R'
                    name='R'
                    isSelected={data.R}
                    onChange={(val) => {
                      setData({...data, R: !data.R});
                    }}
                  />
                  <SelectRound
                    value='X'
                    name='X'
                    isSelected={data.X}
                    onChange={(val) => {
                      setData({...data, X: !data.X});
                    }}
                  />
                  <SelectRound
                    value='XL'
                    name='XL'
                    isSelected={data.XL}
                    onChange={(val) => {
                      setData({...data, XL: !data.XL});
                    }}
                  />
                </div>
              </div>
              <div className='form-group'>
                <p className='add-product-title'>Input delivery methods :</p>
                <p className='form-desc'>
                  Click methods you want to use for this product
                </p>
                <div className='row w-100 h-25 mx-0'>
                  <button
                    type='button'
                    className={`col-11 col-md col-lg mx-1 btn-add-byGallery border-0 btn-width-form-input-add cursor-pointer ${
                      data.home_delivery && ' btn-yellow-color'
                    }`}
                    onClick={() => {
                      setData({...data, home_delivery: !data.home_delivery});
                    }}>
                    Home Delivery
                  </button>
                  <button
                    type='button'
                    className={`col-11 col-md col-lg mx-1 btn-add-byGallery border-0 btn-width-form-input-add cursor-pointer ${
                      data.dine_in && ' btn-yellow-color'
                    }`}
                    onClick={() => {
                      setData({
                        ...data,
                        dine_in: !data.dine_in,
                      });
                    }}>
                    Dine In
                  </button>
                  <button
                    type='button'
                    className={`col-11 col-md col-lg mx-1 btn-add-byGallery border-0 btn-width-form-input-add cursor-pointer ${
                      data.take_away && ' btn-yellow-color'
                    }`}
                    onClick={() => {
                      setData({
                        ...data,
                        take_away: !data.take_away,
                      });
                    }}>
                    Take away
                  </button>
                </div>
              </div>
              <div className='form-group margin-additional'>
                <button
                  type='submit'
                  className='col col-md col-lg btn btn-block btn-add-byGallery btn-brown-color font-white-color'>
                  Save Promo
                </button>
                <button className='col col-md col-lg btn btn-block btn-take-away'>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Addpromo;
