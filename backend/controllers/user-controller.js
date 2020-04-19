class UserController {
    constructor(){}
        getSignUp = async (req, res) => {
            console.log('getSignUp');
        }
        postSignUp = async (req, res) => {
            res.send('postSignUp')
            console.log(req.body);
        }
        getSignIn = async (req, res) => {
            res.send('getSignIn')
        }
        postSignIn = async (req, res) => {
            res.send('postSignIn')
        }
    }

module.exports = UserController;
