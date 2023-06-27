import React, { createContext, useState, ReactNode } from "react"

interface ContextProps {
    sidebarOpen: boolean,
    setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>,
}



const defaultContext = {
    sidebarOpen: false,
    setSidebarOpen: () => { }
}

export const AppContext = createContext<ContextProps>(defaultContext)


const Context = ({ children }: { children: ReactNode }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    return (
        <AppContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
            {children}
        </AppContext.Provider>
    )
}
export default Context