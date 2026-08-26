import api from "./axios";

export const sendMessage = async (data) => {
    const payload = typeof data === "string" ? { message: data, prompt: data } : data;
    const response = await api.post("/ai/message", payload);
    return response.data;
};
