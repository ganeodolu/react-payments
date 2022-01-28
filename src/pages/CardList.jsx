import React from 'react';
import { useNavigate } from 'react-router-dom';

const CardList = () => {
  const history = useNavigate();

  return (
    <>
      <div className="app flex-column-center">
        <div className="flex-center">
          <h2 className="page-title mb-10">보유 카드</h2>
        </div>
        <div className="card-box">
          <div className="small-card">
            <div className="card-top">
              <span className="card-text">클린카드</span>
            </div>
            <div className="card-middle">
              <div className="small-card__chip"></div>
            </div>
            <div className="card-bottom">
              <div className="card-bottom__number">
                <span className="card-text">1111 - 2222 - oooo - oooo</span>
              </div>
              <div className="card-bottom__info">
                <span className="card-text">리액투</span>
                <span className="card-text">12 / 23</span>
              </div>
            </div>
          </div>
        </div>
        <span className="card-nickname">법인카드</span>
        <div className="card-box">
          <div className="empty-card" onClick={() => history('/test')}>
          {/* <div className="empty-card" onClick={() => history('/add')}> */}
            +
          </div>
        </div>
      </div>
    </>
  );
};

export default CardList;
