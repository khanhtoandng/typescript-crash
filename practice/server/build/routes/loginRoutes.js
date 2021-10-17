"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
function requireAuth(req, res, next) {
    var _a;
    if ((_a = req.session) === null || _a === void 0 ? void 0 : _a.loggedin) {
        next();
        return;
    }
    res.status(403).send('Not Permitted');
}
const router = (0, express_1.Router)();
exports.router = router;
router.route('/login').post((req, res) => {
    const { email, password } = req.body;
    if (email && password && email === 'admin' && password === '123@') {
        req.session = { loggedin: true };
        res.redirect('/');
    }
    else {
        res.send('Invalid email or password');
    }
});
router.route('/').get((req, res) => {
    var _a;
    if ((_a = req.session) === null || _a === void 0 ? void 0 : _a.loggedin) {
        res.send(`
            <div>
            <div> You are logged in</div>
            <a href="/logout">Logout</a>
            </div>
    `);
    }
    else {
        res.send(`
    <div>
    <div> You are not logged in</div>
    <a href="/login">Login</a>
    </div>
`);
    }
});
router.route('/logout').get((req, res) => {
    req.session = undefined;
    res.redirect('/');
});
router.route('/protected').get(requireAuth, (req, res) => {
    res.send('Protected route');
});
