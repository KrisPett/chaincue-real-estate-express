import { Router, Request, Response } from 'express';

const router = Router();

router.get('/page', (req: Request, res: Response) => {
    res.send('houses Page');
});

export default router;
