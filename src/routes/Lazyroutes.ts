import { lazy } from "react";

const DashboardLayout = lazy(() => import("../layouts/DashboardLayout"));
const Home = lazy(() => import("../pages/Home/Home"));
const Messages = lazy(() => import("../pages/Messages/DetailsMessages"));
const DetailsMassge = lazy(() => import("../pages/Messages/DetailsMessages"));
const Incoming = lazy(() => import("../pages/Messages/Incoming"));
const Outgoing = lazy(() => import("../pages/Messages/Outgoing"));
const Archive = lazy(() => import("../pages/Archive/Archive"));
const BookArchiving = lazy(() => import("../pages/Archive/BookArchiving"));
const SingleArchive = lazy(() => import("../pages/Archive/SingleArchive"));
const BookArchiveTable = lazy(
  () => import("../pages/Archive/BookArchiveTable")
);
const DatailsBookArchive = lazy(
  () => import("../pages/Archive/DatailsBookArchive")
);
const SendBooks = lazy(() => import("../pages/SendBooks/SendBooks"));
const DatailsSendBook = lazy(() => import("../pages/SendBooks/DatailsSendBooks"));
const CompletedBooks = lazy(() => import("../pages/CompletedBooks/CompletedBooks"));
const CompletedBookDateils = lazy(() => import("../pages/CompletedBooks/CompletedBookDateils"));
const Reports = lazy(() => import("../pages/Reports/Reports"));
const Tracking = lazy(() => import("../pages/Tracking/Tracking"));
const TrackingMassgeDatails = lazy(() => import("../pages/Tracking/TrackingMassgeDatails"));
const Users = lazy(() => import("../pages/Users/Users"));
const AddUser = lazy(() => import("../pages/Users/AddUser"));
const EditUserData = lazy(() => import("../pages/Users/EditUserData"));
const Settings = lazy(() => import("../pages/Settings/Settings"));
const Login = lazy(() => import("../pages/Login/Login"));


export {
  Home,
  Messages,
  Archive,
  Reports,
  Tracking,
  Users,
  Settings,
  Incoming,
  Outgoing,
  Login,
  DetailsMassge,
  BookArchiving,
  SingleArchive,
  BookArchiveTable,
  DatailsBookArchive,
  SendBooks,
  CompletedBooks,
  DatailsSendBook,
  CompletedBookDateils,
  TrackingMassgeDatails,
  AddUser,
  EditUserData,
  DashboardLayout
};
