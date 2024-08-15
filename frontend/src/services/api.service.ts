import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

const apiService = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchBudgetData = async () => {
  try {
    const response = await apiService.get("/budget/");
    return response.data;
  } catch (error) {
    console.error("Error fetching budget data:", error);
    throw error;
  }
};

export default apiService;
