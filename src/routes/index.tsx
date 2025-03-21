import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { AddUser, Archive, BookArchiveTable, BookArchiving, CompletedBookDateils, CompletedBooks, DatailsBookArchive, DatailsSendBook, DetailsMassge, EditUserData, Home, Incoming, Login, Outgoing, Reports, SendBooks, Settings, SingleArchive, Tracking, TrackingMassgeDatails, Users } from "./Lazyroutes";
import DashboardLayout from "../layouts/DashboardLayout";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<DashboardLayout />}>
            <Route index element={<Home />} />
            <Route path="messages">
                <Route path="incoming" element={<Incoming />} />
                <Route path="incoming/:id" element={<DetailsMassge />} />
                <Route path="outgoing" element={<Outgoing />} />
            </Route>
            <Route path="archive" element={<Archive />} />
            <Route path="archive/book-archiving" element={<BookArchiving />} />
            <Route path="archive/single-archive/:id" element={<SingleArchive />} />
            <Route path="archive/book-archive-table/:id" element={<BookArchiveTable />} />
            <Route path="archive/details-book-archive/:id" element={<DatailsBookArchive />} />
            <Route path="sent-books" element={<SendBooks />} />
            <Route path="sent-books/:id" element={<DatailsSendBook />} />
            <Route path="completed-books" element={<CompletedBooks />} />
            <Route path="completed-books/:id" element={<CompletedBookDateils />} />
            <Route path="reports" element={<Reports />} />
            <Route path="tracking" element={<Tracking />} />
            <Route path="tracking/:id" element={<TrackingMassgeDatails />} />
            <Route path="users" element={<Users />} />
            <Route path="users/add-user" element={<AddUser />} />
            <Route path="users/edit-user" element={<EditUserData />} />
            <Route path="settings" element={<Settings />} />
            <Route path="login" element={<Login />} />
        </Route>
    )
);

export default router;
