import axios from "axios"

export const sarchBooks = async (input: string) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL_BOOKS}`, {
            params: {
                query: input
            }
        });
        return response.data.data;
    } catch (error) {
        return null;
        
    }
}