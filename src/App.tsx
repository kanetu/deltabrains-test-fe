import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import "./styles/globals.css";
import { Toaster } from "./components/ui/Toaster";

const queryClient = new QueryClient();

const Event = lazy(() => import("@/features/Event"));
const ListEvent = lazy(() => import("@/features/Event/ListEvent"));
const ViewEvent = lazy(() => import("@/features/Event/ViewEvent"));
const EventForm = lazy(() => import("@/features/Event/EventForm"));
const App: React.FC = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="grid-container h-max bg-cover bg-center bg-no-repeat  w-full">
                <BrowserRouter>
                    <Header />
                    <main className="main flex min-h-[calc(100vh-130px)]">
                        <Routes>
                            <Route
                                path="/"
                                element={<Navigate to="/event" replace />}
                            />
                            <Route
                                path="event"
                                element={
                                    <Suspense fallback="loading">
                                        <Event />
                                    </Suspense>
                                }
                            >
                                <Route
                                    index
                                    element={
                                        <Suspense fallback="loading">
                                            <ListEvent />
                                        </Suspense>
                                    }
                                />
                                <Route path=":id">
                                    <Route
                                        index
                                        element={
                                            <Suspense fallback="loading">
                                                <ViewEvent />
                                            </Suspense>
                                        }
                                    />
                                    <Route
                                        path="edit"
                                        element={
                                            <Suspense fallback="loading">
                                                <EventForm />
                                            </Suspense>
                                        }
                                    />
                                </Route>
                                <Route
                                    path="add"
                                    element={
                                        <Suspense fallback="loading">
                                            <EventForm />
                                        </Suspense>
                                    }
                                />
                            </Route>
                        </Routes>
                    </main>
                    <Toaster />
                    <Footer />
                </BrowserRouter>
            </div>
        </QueryClientProvider>
    );
};

export default App;
