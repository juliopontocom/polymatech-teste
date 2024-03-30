import axios from "axios";

const API_URL = "http://localhost:8080/login";

interface LoginResponse {
  accessToken: string;
}

interface LoginParams {
  email: string;
  password: string;
}

const login = async ({
  email,
  password,
}: LoginParams): Promise<LoginResponse | null> => {
  try {
    const response = await axios.post<LoginResponse>(API_URL, {
      email,
      password,
    });

    const { accessToken } = response.data;

    if (accessToken) {
      localStorage.setItem("accessToken", JSON.stringify(response.data));
      return response.data;
    }

    return null;
  } catch (error) {
    console.error("Login error:", error);
    return null;
  }
};

const AuthService = {
  login,
};

export default AuthService;
