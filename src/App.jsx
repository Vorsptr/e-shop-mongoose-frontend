import BaseHeader from "./components/baseHeader/BaseHeader";
import HomePage from "./pages/Home/HomePage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<BaseHeader />}>
      <Route path="/" element={<HomePage />}></Route>
    </Route>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
