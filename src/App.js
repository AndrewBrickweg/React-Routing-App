import { BrowserRouter, Route } from "react-router-dom";

const ExpenseDashboardPage = () => (
  <div>This is from my dashboard component</div>
);

const AddExpensePage = () => <div>This is from my add expense component</div>;

const EditExpensePage = () => <div>This is from my edit expense component</div>;

const HelpPage = () => <div>This is from my help component</div>;

const App = () => (
  <BrowserRouter>
    <div>
      <Route path="/" component={ExpenseDashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
    </div>
  </BrowserRouter>
);

export default App;
