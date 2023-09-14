import React, {useState, createContext, useEffect} from 'react';
import { request } from '@umijs/max';
import axios from 'axios';


export const StoreContext = createContext<any>(null);

const StoreProvider = ({ children }) => {
  const [events, setEvents] = useState<any[]>([]);
  const [imageArr, setImageArr] = useState<string>('');
  const [popup, setPopup] = useState<boolean>(false);

  useEffect(() => {
    request('/api/v1/queryEventList', {
      method: 'GET',
    })
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setEvents(data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      },
    )

    axios.get('http://image-server-prod.eba-jqccpzay.us-west-2.elasticbeanstalk.com/images') 
      .then((res) => {
        setImageArr(res.data);
      })
  },[])

  return (
    <StoreContext.Provider
      value={{
        events,
        popup,
        setPopup, 
        imageArr
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;