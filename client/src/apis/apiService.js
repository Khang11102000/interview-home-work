import axios from "axios";

const BASE_URL = "http://localhost:5000/";

export const baseRequest = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
});
export const getAllPosts = async () => {
    try {
        return await baseRequest.get("/api/post/getAll");
    } catch (error) {
        throw error;
    }
};
export const getPostById = async (data) => {
    try {
        return await baseRequest.get(`/api/post/getById${data}`);
    } catch (error) {
        throw error;
    }
};
export const getPostByTitle = async (data) => {
    try {
        return await baseRequest.get(`/api/post/getByTitle${data}`);
    } catch (error) {
        throw error;
    }
};
export const getCommentsByPost = async (data) => {
    try {
        return await baseRequest.get(`/api/comment/getByPost${data}`);
    } catch (error) {
        throw error;
    }
};
export const getAllCommentsByPost = async (data) => {
    try {
        return await baseRequest.get(`/api/comment/getAllByPost${data}`);
    } catch (error) {
        throw error;
    }
};
export const getUserById = async (data) => {
    try {
        return await baseRequest.get(`/api/user/getById${data}`);
    } catch (error) {
        throw error;
    }
};
export const getAllUsers = async () => {
    try {
        return await baseRequest.get("/api/user/getAll");
    } catch (error) {
        throw error;
    }
};
