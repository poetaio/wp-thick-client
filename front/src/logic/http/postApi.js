import { $authHost, $host } from "."

export const getPost = async (postId) => {
  const { data } = await $host.get(`/api/post/${postId}`);
  return data;
}

export const getAllPosts = async () => {
  const { data } = await $host.get(`/api/post/all`);
  return data;
}

export const getAllPostsPaginated = async (page, limit) => {
  const { data } = await $host.get(`/api/post`, {
    params: { page, limit }
  });
  return data;
}

export const makePost = async (title, text) => {
  const { data } = await $authHost.post(`/api/post`, {
    title, text
  });
  return data;
}

export const deletePost = async (postId) => {
  await $authHost.delete(`/api/post/${postId}`);
  return true;
}
