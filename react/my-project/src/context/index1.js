import React, { useState, useEffect, createContext } from 'react';
export const userContext = createContext();
const UserContextProvider = (props) => {
    const [user, setUser] = useState({
        'name': 'harry potter',
        'age': '42'
    });
    return (
        <userContext.Provider value={{ 
            user: user,
            setUser: setUser
        }}>
        	{props.children}
        </userContext.Provider>
    );
}
export default UserContextProvider;


/*
# Parent Componet
<PageContextProvider>
    <Header />
</PageContextProvider>

---------------------------------
# Child Componet label
import React, { useContext } from 'react';
import { PageContext } from './PageContextProvider';

const { user } = useContext(PageContext);
setUser({name:'Sraban'});

Ref: https://iqcode.com/code/javascript/react-context-api
*/