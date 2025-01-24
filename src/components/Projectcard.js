import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-bootstrap-icons'

const Projectcard = ({title, description,imgUrl,website}) => {
  return (
    <Col sm={6} md={4}>
        <div className="proj-imgbx">
            <img src={imgUrl} />
           <div className="proj-txtx">
           <h4>{title}</h4>
            <span>{description}</span> <br></br>
            <a href={website}>visit website</a>
           </div>
         

        </div>
    </Col>
  )
}

export default Projectcard
