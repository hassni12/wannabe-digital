import Link from "next/link";
import React from "react";

const ClientCard = () => {
  return (
    <div>
      <div className="clientReviewCard">
        <div className="camas_client me-2" >
          <img src="./images/camas.png"   alt="" />
        </div>
        <div className="client_para_container">
          <p className="client_paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
            quae accus loremLorem ipsum dolor sit amet, consectetur adipisicing
            elit. Nesciunt quae accus lorem
          </p>
          <Link href={""} className="text-end d-block text-decoration-none">Read More</Link>
        </div>

      </div>
    <div className="d-flex  avatar-container align-items-center">
        
    <img src="./images/avatar.png" alt="Avatar" className="img-fluid  avatar"/>
    <div  className='text-container'  >
    <p>hassnain</p>
    <small  className='text-muted' >Product developer company</small>
    </div>

  

    </div>
      {/* <img src="img_avatar.png" alt="Avatar" className="avatar"/> */}

    </div>
  );
};
export default ClientCard;
