import { Router, Request, Response } from 'express';

const router = Router();

router.get('/create', (req: Request, res: Response) => {
    res.send('create Page');
});


router.get('/page', (req: Request, res: Response) => {
    res.send('Home Page');
});

export default router;
