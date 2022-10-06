
import { Route, Routes } from "react-router-dom";
import theme from "./constants/theme";
import AddRecipePage from "./pages/AddRecipePage/AddRecipePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RecipeDetailPage from "./pages/RecipeDetailPage/RecipeDetailPage";
import RecipesListPage from "./pages/RecipesListPage/RecipesListPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import { ThemeProvider } from '@mui/material/styles';
import Header from "./components/Header/Header";

const App= ()=> {
  return (
      
    <ThemeProvider theme={theme}>
      
      
      <Header></Header> 
      <Routes>
    <Route path='/' element={<RecipesListPage/>}></Route>
    <Route path='/inscricao' element={<SignUpPage />}></Route>
    <Route path='/login' element={<LoginPage />}></Route>
    <Route path='/AdicionarReceitas' element={<AddRecipePage/>}></Route>
    <Route path='/detalhes' element={<RecipeDetailPage />}></Route>
    {/* <Route path='/Erro' element={<TripListDetailPage />}></Route> */}
    </Routes>
    
    
    
    </ThemeProvider>
  );
}

export default App;
