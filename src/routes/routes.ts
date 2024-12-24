import { Express } from 'express';
import accountPage from './account/accountPage';
import homePage from './home/HomePage';
import housePage from './house/HousePage';
import housesPage from './houses/HousesPage';

const registerRoutes = (app: Express) => {
    app.use('/account', accountPage);
    app.use('/home', homePage);
    app.use('/house', housePage);
    app.use('/houses', housesPage);
};

export default registerRoutes;