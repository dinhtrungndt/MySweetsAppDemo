/* eslint-disable prettier/prettier */
import AxiosInstance from '../helper/Axiosinstance';

// lấy danh bài viết
export const getPosts = async () => {
  const response = await AxiosInstance().get('/posts/get-posts');
  // console.log(response);
  return response;
};

// like bài viết
export const likePost = async (idUser, idPosts) => {
  const response = await AxiosInstance().post('/reaction/like', {
    idUser,
    idPosts,
  });
  console.log('???????????????? 14', response);
  return response;
};
