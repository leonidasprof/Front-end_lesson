import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import SurprisePage from "./pages/SurprisePage"; // Importando a SurprisePage
import TodoList from "./TodoList"; // Importando o TodoList.jsx

function AppRoutes() {
  return (
    <Routes>
      {/* Rota principal (localhost) - exibe apenas o "Bem-vindo!" e os links */}
      <Route path="/" element={<></>} />

      {/* Rota para a HomePage */}
      <Route path="/home" element={<HomePage />} />

      {/* Rota para a AboutPage */}
      <Route path="/about" element={<AboutPage />} />

      {/* Rota para a ServicesPage com o TodoList */}
      <Route
        path="/services"
        element={
          <ServicesPage>
            <TodoList /> {/* TodoList é renderizado dentro da ServicesPage */}
          </ServicesPage>
        }
      />

      {/* Rota para a ContactPage */}
      <Route path="/contact" element={<ContactPage />} />

      {/* Rota para a SurprisePage */}
      <Route path="/surprise" element={<SurprisePage />} />
    </Routes>
  );
}

export default AppRoutes;