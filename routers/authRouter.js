const router=require('express').Router();
const authController=require('../controllers/authController');

router.post('/login',authController.loginController);
router.post('/signup',authController.signupController);
router.get('/refresh',authController.refreshAccessTokenController);
router.post('/logout',authController.logOutController);
module.exports=router;