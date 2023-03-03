import express, { Request, Response } from 'express';
import { BankAccount } from './open';

const app = express();
const port = 3000;

app.use(express.json());

// create a new bank account
app.post('/accounts', (req: Request, res: Response) => {
  const { name, gender, dob, email, mobile, address, initialBalance, adharNo, panNo } = req.body;

  const account = new BankAccount();
  account.openAccount(name, gender, dob, email, mobile, address, initialBalance, adharNo, panNo);

  res.status(201).json({ message: 'Account created', accountId: account.id });
});

// perform a deposit on a bank account
app.post('/accounts/:id/deposit', (req: Request, res: Response) => {
  const accountId = req.params.id;
  const { amount } = req.body;

  const account = BankAccount.getAccountById(accountId);
  if (!account) {
    return res.status(404).json({ message: 'Account not found' });
  }

  account.deposit(amount);
  res.status(200).json({ message: 'Deposit successful', balance: account.getBalance() });
});

// perform a withdrawal on a bank account
app.post('/accounts/:id/withdraw', (req: Request, res: Response) => {
  const accountId = req.params.id;
  const { amount } = req.body;

  const account = BankAccount.getAccountById(accountId);
  if (!account) {
    return res.status(404).json({ message: 'Account not found' });
  }

  try {
    account.withdraw(amount);
    res.status(200).json({ message: 'Withdrawal successful', balance: account.getBalance() });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// get the balance of a bank account
app.get('/accounts/:id/balance', (req: Request, res: Response) => {
  const accountId = req.params.id;

  const account = BankAccount.getAccountById(accountId);
  if (!account) {
    return res.status(404).json({ message: 'Account not found' });
  }

  res.status(200).json({ balance: account.getBalance() });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
