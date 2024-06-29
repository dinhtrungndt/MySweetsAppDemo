/* eslint-disable prettier/prettier */
// Trong component của người nhận
import {useEffect, useState} from 'react';
import {View} from 'react-native';
import io from 'socket.io-client';

const socket = io('http://192.168.0.100:9999');

const ReceiverScreen = () => {
  const [receiverMessages, setReceiverMessages] = useState([]);

  useEffect(() => {
    socket.on('new_message', data => {
      // Thêm tin nhắn mới vào danh sách tin nhắn của người nhận
      setReceiverMessages(prevMessages => [...prevMessages, data]);
    });

    // Nếu bạn cần làm một số công việc khác khi mount component, hãy thêm vào đây

    // Hãy nhớ clean up sự kiện khi component unmount
    return () => {
      socket.off('new_message');
    };
  }, []); // [] đảm bảo sự kiện chỉ được đăng ký một lần khi component mount

  // Render tin nhắn của người nhận ở đây

  return (
    <View>
      {receiverMessages.map(message => (
        <View key={message._id}>{message.content}</View>
      ))}
    </View>
  );
};

export default ReceiverScreen;
