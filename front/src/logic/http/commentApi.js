import { $authHost } from "."

export const createComment = async (postId, comment) => {
  await $authHost.post(`/api/post/${postId}/comment`);
  return true;
};
