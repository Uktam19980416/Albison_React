import './input.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/home/navbar/Navbar'
import Main from './components/Main'
import Footer from './components/home/footer/Footer'
import Main404 from './components/404/Main404'
import Articles from './components/articles/Articles'
import About from './components/about/About'
import Feedback from './components/feedback/Feedback'
import Gallery from './components/gallery/Gallery'
import Delivery from './components/delivery/Delivery'
import Contact from './components/contact/Contact'
import Category from './components/category/Category'
import { AuthProvider } from './contexts/AuthContext'
import RequireAuth from './contexts/RequireAuth'
// import ProductsSale from './components/home/xitSale/ProductsSale'
// import ProductsSale2 from './components/home/xitSale2/ProductsSale2'
import Filter from './components/home/xitSale/Filter'
import Filter2 from './components/home/xitSale2/Filter2'

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />}>
          {/* <Route path="/products" element={<Products />}> */}
          <Route path=":category" element={<Filter />} />
          <Route path=":category" element={<Filter2 />} />
          {/* <Route path=":category" element={<Ads stat="onSale" />} /> */}
          {/* </Route> */}
        </Route>
        {/* <Route path="/articles" element={<Articles />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/category" element={<Category />} />
        <Route path="*" element={<Navigate to="404.html" />} />
        <Route path="/404.html" element={<Main404 />} />
        <Route
          path="/articles"
          element={
            <RequireAuth>
              <Articles />
            </RequireAuth>
          }
        ></Route>
      </Routes>
      <Footer />
      {/* <Greet name="Uktamjon" count={10} isLoggedIn={false} />
      <PersonList names={personList} isLoggedIn={true} /> */}
    </AuthProvider>
  )
}

export default App
