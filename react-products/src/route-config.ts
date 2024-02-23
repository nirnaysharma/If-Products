import RedirectToLandingPage from "./utils/RedirectToLandingPage";
import IndexCategories from "./categories/IndexCategories";
import LandingPage from "./products/LandingPage";

const routes = [
    {path: '/category', component: IndexCategories},
    {path: '/', component: LandingPage, exact: true},



    {path: '*', component: RedirectToLandingPage}
];

export default routes;