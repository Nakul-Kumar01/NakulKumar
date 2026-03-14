import React ,{useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/Home'
import { BrowserRouter,Routes, Route } from 'react-router'
import HeaderBar from './components/HeaderBar'
import Work from './components/Work'
import Education from './components/Education'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ContactMe from './components/ContactMe'
import stores from './store'
import { Provider } from 'react-redux'
import Builder from './components/builder'
import axiosClient from './utils/axiosClient'


function Main(){

   useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in milliseconds
          once: true, // Whether animation should happen only once
        });

        const ping = async () => {
          try{
            const res = await axiosClient.get("/health");
          }
          catch(err){
            console.log(err);
          }
        }
        ping();
      }, []);


  return(
    <>  
    <BrowserRouter>
       <Provider store={stores}>
         <Routes>
        <Route element={<HeaderBar></HeaderBar>}>
          <Route index path='/'  element={<Home ></Home>}></Route>
          <Route path='/work' element={<Work ></Work>}></Route>
          <Route path='/education' element={<Education ></Education>}></Route>
          <Route path='/contact' element={<ContactMe ></ContactMe>}></Route>
        </Route>
        <Route path='/builder' element={<Builder ></Builder>}></Route>
       </Routes>
       </Provider>
    </BrowserRouter>  
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main></Main>)
