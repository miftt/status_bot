import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const WebSocketClient = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const socket = io('http://localhost:3000/api/bot');

    socket.on('connect', () => {
      console.log('WebSocket connected');
    });

    socket.on('data', (newData) => {
      setData(newData);
    });

    socket.on('disconnect', () => {
      console.log('WebSocket disconnected');
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return data;
};

export default WebSocketClient;
