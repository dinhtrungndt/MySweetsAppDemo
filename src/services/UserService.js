/* eslint-disable prettier/prettier */
import AxiosInstance from '../helper/Axiosinstance';

export const login = async (email, password) => {
  try {
    const body = {
      email,
      password,
    };
    const res = await AxiosInstance().post('/user/login', body);
    return res;
  } catch (error) {
    console.log('login error', error);
    return error;
  }
};

// Lấy danh sách người dùng
export const GetListUser = async () => {
  try {
    const res = await AxiosInstance().get('/user/get-user');
    return res;
  } catch (error) {
    console.log('getListUser error', error);
    return error;
  }
};

// Lấy tin nhắn theo id người gửi và id người nhận
export const GetMessageSR = async (idSender, idReceiver) => {
  try {
    const res = await AxiosInstance().get(
      `/message/get-message/${idSender}/${idReceiver}`,
    );
    return res;
  } catch (error) {
    console.log('getMessage error', error);
    return error;
  }
};
