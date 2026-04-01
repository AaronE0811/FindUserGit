import { callApi } from "../services/callApi";
import { useState } from "react";
export const userApi = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any>(null);
  const datos = async (search: string) => {
    setLoading(true);
    setError(null);
    setData(null);

    try {
      const response = await callApi({ search });
      if (response.message === "Not Found") {
        setLoading(false);
        setError("User not found");
        return;
      }

      console.log("datos del usuario: ", response);
      setData(response);
      setError(null);
      setLoading(false);
    } catch (error) {
      setError("An error occurred while fetching data");
    } finally {
      setLoading(false);
    }
  };
  return { loading, error, data, datos };
};

export default userApi;
