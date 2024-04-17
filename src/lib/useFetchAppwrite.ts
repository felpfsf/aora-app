import { useEffect, useState } from "react";
import { Alert } from "react-native";

export const useFetchAppwrite = (fn: Promise<any>) => {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fn;

      setData(response);
    } catch (error) {
      const err = error as Error;
      Alert.alert("Error", err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => fetchData();

  return {
    data,
    isLoading,
    refetch,
  };
};
