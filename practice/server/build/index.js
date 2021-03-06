"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const loginRoutes_1 = require("./routes/loginRoutes");
const morgan_1 = __importDefault(require("morgan"));
const cookie_session_1 = __importDefault(require("cookie-session"));
const AppRouter_1 = require("./AppRouter");
require("./controllers/LoginController");
const app = (0, express_1.default)();
app.use((0, morgan_1.default)('tiny'));
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_session_1.default)({ keys: ['laskdjf'] }));
app.use(loginRoutes_1.router);
app.use(AppRouter_1.AppRouter.getInstance());
app.listen(3000, () => {
    console.log('Server is running ...');
});
