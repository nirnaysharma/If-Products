import RedirectToLandingPage from "./utils/RedirectToLandingPage";
import LandingPage from "./products/LandingPage";

const routes = [
    {path: '/', component: LandingPage, exact: true},

    {path: '*', component: RedirectToLandingPage}
];

export default routes;