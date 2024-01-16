import { Route, Routes } from "react-router-dom"
import MainLayout from "../layouts/MainLayot"
import HomePage from "../Pages/Homepage/HomePage"

const Router = () => {
  return(
    <Routes>
      <Route path="/" element={<MainLayout />} >
        <Route index element={<HomePage/>} />
      </Route>
    </Routes>
  )
}
export default Router