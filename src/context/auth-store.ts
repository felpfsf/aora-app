import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface UserDataDto {
  $collectionId: string;
  $createdAt: string;
  $databaseId: string;
  $id: string;
  $permissions: string[];
  $updatedAt: string;
  accountId: string;
  avatar: string;
  email: string;
  username: string;
}

type StateProps = {
  user: UserDataDto | null;
  setUser: (user: UserDataDto) => void;
  removeUser: () => void;
};

export const useAuthStore = create(
  persist<StateProps>(
    (set) => ({
      user: null,
      setUser: (user: UserDataDto) => set(() => ({ user })),
      removeUser: () => set(() => ({ user: null })),
    }),
    {
      name: "aora-app:auth",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
