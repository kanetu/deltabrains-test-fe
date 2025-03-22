import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Event from "@/features/Event";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import "./styles/globals.css";
import CreateEvent from "./features/Event/CreateEvent";

const queryClient = new QueryClient();

const App: React.FC = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="grid-container h-max bg-cover bg-center bg-no-repeat  w-full">
                <BrowserRouter>
                    <Header />
                    <main className="main flex min-h-[calc(100vh-130px)]">
                        <Routes>
                            <Route path="event">
                                <Route index element={<Event />} />
                                <Route
                                    path="create"
                                    element={<CreateEvent />}
                                />
                            </Route>
                        </Routes>
                    </main>
                    <Footer />
                </BrowserRouter>
            </div>
        </QueryClientProvider>
    );
};

export default App;
