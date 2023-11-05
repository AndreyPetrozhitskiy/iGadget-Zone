import React from "react"
import '../../style/notfound.scss'
import error from '../../image/404.png'
const NotFaundPage = () => {
  return (
    <div className="notFound">
        <div className="notFound-block">
            <img src={error} />
            <p>Страница не найдена</p>
        </div>
      
    </div>
  )
};

export default NotFaundPage;
