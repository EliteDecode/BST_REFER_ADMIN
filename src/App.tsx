import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

// routes
import { AuthLayout, DashboardLayout } from "./components/layout";
import {
  AddStudent,
  Dashboard,
  Login,
  Profile,
  Referrals,
  Settings,
  Students,
  UpdateProfile,
  Users,
  VerifyEmail,
  ViewReferral,
  ViewStudent,
  ViewUser,
  ViewWithdrawal,
  Wallet,
  Withdrawals,
} from "./routes";

//styling libraries
import "aos/dist/aos.css";
import { useSelector } from "react-redux";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";

export default function App() {
  const { token } = useSelector((state: any) => state.auth);
  return (
    <RouterProvider
      router={createBrowserRouter([
        //General Routes
        {
          path: "/",
          element: <Navigate to="/dashboard/home" />,
        },

        //Authentication Routes
        {
          path: "auth",
          element: token ? <Navigate to="/dashboard/home" /> : <AuthLayout />,
          children: [
            {
              path: "login",
              element: <Login />,
            },
          ],
        },

        //Dashboard Routes
        {
          path: "dashboard",
          element: !token ? <Navigate to="/auth/login" /> : <DashboardLayout />,
          children: [
            {
              path: "home",
              element: <Dashboard />,
            },
            {
              path: "referrals",
              element: <Referrals />,
            },
            {
              path: "view-referral/:referralId",
              element: <ViewReferral />,
            },

            {
              path: "users",
              element: <Users />,
            },
            {
              path: "view-user/:userId",
              element: <ViewUser />,
            },
            {
              path: "students",
              element: <Students />,
            },

            {
              path: "students/add-student",
              element: <AddStudent />,
            },

            {
              path: "students/view-student/:studentId",
              element: <ViewStudent />,
            },

            {
              path: "wallet",
              element: <Wallet />,
            },
            {
              path: "withdrawal/:status",
              element: <Withdrawals />,
            },
            {
              path: "view-withdrawal/:withdrawalId",
              element: <ViewWithdrawal />,
            },

            {
              path: "profile",
              element: <Profile />,
            },
            {
              path: "profile/update-profile",
              element: <UpdateProfile />,
            },
            {
              path: "settings",
              element: <Settings />,
            },
            {
              path: "settings/verify-email",
              element: <VerifyEmail />,
            },
          ],
        },

        {
          path: "*",
          element: <Navigate to="/dashboard/home" />,
        },
      ])}
    />
  );
}
