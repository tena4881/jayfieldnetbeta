import Index1 from "./pages/Index1/Index1";
import Index2 from "./pages/Index2/Index2";
import Index3 from "./pages/Index3/Index3";
import Index4 from "./pages/Index4/Index4";
import Index5 from "./pages/Index5/Index5";
import Index6 from "./pages/Index6/Index6";
import Index7 from "./pages/Index7/Index7";
import Index8 from "./pages/Index8/Index8";
import Index9 from "./pages/Index9/Index9";
import Profile from "./pages/Profile/index";
import SocailMedia from "./pages/SocailMedia/SMPage";

//Auth Pages
import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/Login";
import PasswordForget from "./pages/Auth/PasswordForget";
import AddToWallet from "./WalletConnect/addJFCToWallet";

const routes = [
  { path: "/password-forget", component: PasswordForget },
  { path: "/profile", component: Profile },
  { path: "/sign-up", component: Signup },
  { path: "/login", component: Profile },
  { path: "/connect", component: SocailMedia },
  { path: "/addToWallet", component: AddToWallet },
  { path: "/home-nine", component: Index9 },
  { path: "/home-eight", component: Index8 },
  { path: "/home-seven", component: Index7 },
  { path: "/home-six", component: Index6 },
  { path: "/home-five", component: Index5 },
  { path: "/home-four", component: Index4 },
  { path: "/home-three", component: Index3 },
  { path: "/home-two", component: Index2 },
  { path: "/home-one", component: Index1 },
  { path: "/", component: Index8 },
  
];

export default routes;
