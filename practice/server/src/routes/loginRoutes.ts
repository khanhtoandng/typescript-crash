import { Router, Request, Response, NextFunction } from 'express';

interface ResquesWithBody extends Request {
  body: { [key: string]: string | undefined };
}

function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (req.session?.loggedin) {
    next();
    return;
  }

  res.status(403).send('Not Permitted');
}

const router = Router();

router.route('/login').post((req: ResquesWithBody, res: Response) => {
  const { email, password } = req.body;

  if (email && password && email === 'admin' && password === '123@') {
    req.session = { loggedin: true };
    res.redirect('/');
  } else {
    res.send('Invalid email or password');
  }
});

router.route('/').get((req: ResquesWithBody, res: Response) => {
  if (req.session?.loggedin) {
    res.send(`
            <div>
            <div> You are logged in</div>
            <a href="/logout">Logout</a>
            </div>
    `);
  } else {
    res.send(`
    <div>
    <div> You are not logged in</div>
    <a href="/login">Login</a>
    </div>
`);
  }
});

router.route('/logout').get((req: ResquesWithBody, res: Response) => {
  req.session = undefined;
  res.redirect('/');
});

router.route('/protected').get(requireAuth, (req: ResquesWithBody, res: Response) => {
  res.send('Protected route');
});

export { router };
