/* eslint-disable prettier/prettier */

import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {styles} from '../style/chat';
import {UserContext} from '../../../../context/users/UserContext';
import io from 'socket.io-client';
import {GetMessageSR} from '../../../../services/UserService';

const socket = io('http://192.168.2.209:9999');

const ChatScreenIn = ({route, navigation}) => {
  const {receiver} = route.params;
  const {user} = useContext(UserContext);
  const [messageInput, setMessageInput] = useState('');
  const [messages, setMessages] = useState([]);

  console.log('>>>>>> ChatScreenIn receiver', receiver);
  console.log('>>>>>> ChatScreenIn user', user.user.id);

  socket.on('new_message', data => {
    setMessages([...messages, data]);
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GetMessageSR(user.user.id, receiver._id);
        setMessages(response);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchData();
  }, [user.user.id, receiver._id]);

  const sendMessage = () => {
    const newMessage = {
      idSender: user.user.id,
      idReceiver: receiver._id,
      content: messageInput,
      time: new Date().toISOString(),
    };

    socket.emit('new_message', newMessage);
  };

  return (
    <View style={styles.T}>
      {/* header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.back_user}
          onPress={() => navigation.goBack()}>
          <Image
            style={styles.back}
            source={require('../../../../assets/back_50px.png')}
          />
          <TouchableOpacity style={styles.account}>
            <Image source={{uri: receiver.avatar}} style={styles.avatar} />
            <Text style={styles.name_user}>{receiver.name}</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <View style={styles.call_video}>
          <TouchableOpacity>
            <Image
              style={styles.back}
              source={require('../../../../assets/call_50px.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{marginLeft: 15}}>
            <Image
              style={styles.back}
              source={require('../../../../assets/call_video.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* line */}
      <Text style={styles.line} />
      {/* chat */}
      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={styles.chat}>
            {item.idSender === user.user.id ? (
              <View style={styles.sentMessage}>
                <Text style={styles.sentContent}>{item.content}</Text>
              </View>
            ) : (
              <View style={styles.receivedMessage}>
                <Image
                  source={{uri: receiver.avatar}}
                  style={styles.avatarChat}
                />
                <View style={styles.receivedContent}>
                  <Text style={styles.senderName}>{receiver.name}</Text>
                  <Text style={styles.receivedText}>{item.content}</Text>
                </View>
              </View>
            )}
          </View>
        )}
      />

      {/* Input */}
      <View style={styles.input}>
        <TextInput
          style={styles.input_text}
          placeholder="Bạn muốn nói gì?"
          placeholderTextColor="#000"
          value={messageInput}
          onChangeText={text => setMessageInput(text)}
        />
        <TouchableOpacity
          style={styles.send}
          onPress={() => {
            sendMessage(messageInput);
            setMessageInput('');
          }}>
          <Image
            style={styles.back}
            source={require('../../../../assets/email_send_50px.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatScreenIn;
