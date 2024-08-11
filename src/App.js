import './App.css';
// import { Personal } from './components/resume/presonal';
// import { Education } from './components/resume/education';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SignIn } from './Components/signin/signin';
import { SignUp } from './Components/signup/signup';


function App() {
  return (
<>
<BrowserRouter>
<Routes>
  <Route path="/signin" element={<SignIn />} />
  <Route path="/signup" element={<SignUp />} />
</Routes>

</BrowserRouter>
{/* <SignIn/>
<SignUp/>
    {/* < UseStateFunction/> */}
    {/* <Personal/> */}
    {/* <Education/> */} 
</>
  );
}

export default App;