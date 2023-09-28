import React, { createContext, ReactNode, useContext, useState } from "react";

interface UserData {
  id: number;
  name: string;
  mobileNo: string;
}

interface UserContextType {
  userData: UserData[];
  updateUserData: (id: number, name: string, mobileNo: string) => void;
  deleteUser: (id: number) => void;
  addUser: (name: string, mobileNo: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserContext must be used within a UserContextProvider");
  }
  return context;
};

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [userData, setUserData] = useState<UserData[]>([]);

  const updateUserData = (id: number, name: string, mobileNo: string) => {
    const updatedData = userData.map((user) =>
      user.id === id ? { ...user, name, mobileNo } : user
    );
    setUserData(updatedData);
  };

  const addUser = (name: string, mobileNo: string) => {
    const newUserId = userData.length + 1;
    setUserData([...userData, { id: newUserId, name, mobileNo }]);
  };

  const deleteUser = (id: number) => {
    const updatedData = userData.filter((user) => user.id !== id);
    setUserData(updatedData);
  };

  return (
    <UserContext.Provider value={{ userData, updateUserData, deleteUser, addUser }}>
      {children}
    </UserContext.Provider>
  );
};
