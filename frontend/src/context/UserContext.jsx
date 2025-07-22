/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

export const UserDataContext = createContext(null);

const UserContext = ({ children }) => {
    // Here you can manage user data and authentication logic
    const [user, setUser] = useState({
        email: '',
        fullname: {
            firstname: '',
            lastname: ''
        }
    });

    return (
        <UserDataContext.Provider value={{ user, setUser }}>
            {children}
        </UserDataContext.Provider>
    )
}

export default UserContext