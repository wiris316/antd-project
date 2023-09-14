import { Layout, Card, Button, Modal} from 'antd';
import React, { useContext, useState, useEffect} from 'react';
import { StoreContext } from '@/utils/Store';

/** 
  * Modal that pops up everytime a card is clicked.
  * Displays all the properties mentioned in the event data.
**/

const PopupModal = (Props) => {
  const {clickedCard} = Props
  const { popup, setPopup, events } = useContext(StoreContext)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [location, setLocation] = useState('')

  useEffect(() => {
    //Accessing the data properties of the clicked card by its index and updating state
      const cardTitle = events[clickedCard].title; 
      const cardDate = events[clickedCard].date; 
      const cardLocation = events[clickedCard].location; 
      const cardDescription = events[clickedCard].description; 

      setTitle(cardTitle)
      setDate(cardDate)
      setLocation(cardLocation)
      setDescription(cardDescription)
  }, [popup])


  const handleOk = () => {
    setPopup(false);
  };

  const handleCancel = () => {
    setPopup(false)
  };

  return (
    <>
      <Modal title="EVENT INFO" open={popup} onOk={handleOk} onCancel={handleCancel}>
        <p>TITLE: {title}</p>
        <p>DATE: {date}</p>
        <p>LOCATION: {location}</p>
        <p>DESCRIPTION: {description}</p>
      </Modal>
    </>
  );
}

export default PopupModal;