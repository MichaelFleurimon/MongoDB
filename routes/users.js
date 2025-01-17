import express from `express`

const router = express.Router();

router.get(`/`,(req,res)=>{
    res.send(`Hi, I'm the user route`);
});

export default router;