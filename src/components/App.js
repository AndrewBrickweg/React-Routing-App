import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ExpenseDashboardPage from "./Dashboard";
import ErrorPage from "./Error-Page";
import AddExpensePage from "./AddExpense";
import EditExpensePage from "./EditExpensePage";
import HelpPage from "./HelpPage";
import HeaderPage from "./HeaderPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ExpenseDashboardPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "create",
      element: <AddExpensePage />,
    },
    {
      path: "edit",
      element: <EditExpensePage />,
    },
    {
      path: "help",
      element: <HelpPage />,
    },
  ]);

  return (
    <>
      <HeaderPage />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
