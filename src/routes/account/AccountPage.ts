import { Router, Request, Response } from 'express';

const router = Router();

router.get('/page', (req: Request, res: Response) => {
    console.log('HomePage');
    console.log(req.headers.authorization);

    const toDTO = toHomePageDTO((dtoBuilder) => {
        dtoBuilder.id = 'id';
        return dtoBuilder;
    });

    res.json(toDTO);
});

const toHomePageDTO = (additionalProcessing?: (dtoBuilder: DTOBuilder) => DTOBuilder): AccountPageDTO => {
    const dtoBuilder = new DTOBuilder();
    if (additionalProcessing) {
        additionalProcessing(dtoBuilder);
    }
    return toDTO(dtoBuilder);
};

const toDTO = (dtoBuilder: DTOBuilder): AccountPageDTO => {
    return new AccountPageDTO(dtoBuilder.id);
};

class DTOBuilder {
    id: string = '';
}

class AccountPageDTO {
    constructor(public id: string) {}
}

export default router;
