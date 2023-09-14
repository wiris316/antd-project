import { Layout, Card, Col, Row, Button, Modal} from 'antd';
import React, { useContext, useState } from 'react';
import { StoreContext } from '../../utils/Store';
import PopupModal from './PopupModal';
import './Dashboard.less';


/** 
  * Dashboard component that renders all the event cards and displays everything in home page.
**/


const Dashboard = () => {
  
  const { events, popup, setPopup, imageArr } = useContext(StoreContext)
  const [clickedCard, setClickedCard] = useState('')


  // If a card is clicked, popup is set to true to trigger opening of the PopupModal
  // The index of element is saved as clickedCard to be passed down as props to PopupModal
  const handleClick = (ele:any) => {
    setPopup(true)
    const index = events.findIndex((el) => el.title === ele);
    setClickedCard(index)
  }

  // Mapping over each event and return a Card component with its corresponding data.
  const eachEvent = events.map((ele: any, i: number) => {
    // In the case that the image URL is not valid, assign image src to a random image.
    const handleImageError = (e:any) => {
      let randomIndex = Math.floor(Math.random() * 20)
      e.target.src = imageArr[i + randomIndex];
    };
    
    return (
      <Card
        className='event-card'
        hoverable={true}
        key={i}
        title={ele.title}
        onClick={()=>handleClick(ele.title)}
        cover={
          <div style={{ overflow:"hidden", display:"flex",alignItems:"center" }} >
          <img
            alt="example"
            style={{ height: "30vh", margin:"auto"}}
            src={imageArr[i]}
            onError={handleImageError}
          />
        </div>
      }>
      <p>DATE: {ele.date}</p>
      <p>LOCATION: {ele.location}</p>
    </Card>
    )
  }
  )
  
  return (
    <Layout>
      <h1>ALL EVENTS HERE</h1>
      <Row
        style={{ display: "flex", justifyContent:"center" }}>
        {eachEvent}
        {popup && <PopupModal clickedCard={clickedCard} />}
      </Row>
    </Layout> 
  );
};

export default Dashboard;
