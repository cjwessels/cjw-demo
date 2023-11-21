import { Routes, Route } from 'react-router-dom';

import Login from './scenes/global/Login';
import Layout from './scenes/global/Layout';
import Missing from './scenes/global/Missing';
import Unauthorized from './scenes/global/Unauthorized';
import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        {/* -- UNPROTECTED PATHS -- */}
        <Route path='login' element={<Login />} />
        <Route path='unauthorized' element={<Unauthorized />} />
        {/* -- PROTECTED PATHS - FUTURE CHANGE TO ROLES --*/}

        {/* <Route element={<RequireAuth />}> */}
        {/* <Route path='/' element={<Dashboard />} />

        <Route path='/deals' element={<Deals />} />
        <Route path='/deals/new_deal' element={<DealsForm formType='new' />} />
        <Route
          path='/deals/edit_deal/:id'
          element={<DealsForm formType='edit' />}
        />
        <Route
          path='/deals/view_deal/:id'
          element={<DealsForm formType='view' />}
        />
        <Route path='/commissions' element={<Commissions />} />
        <Route path='/commissions/list/:id' element={<RepsCommissionsList />} />
        <Route
          path='/commissions/review/:id'
          element={<CommissionsReviewForm />}
        />
        <Route path='/commissions/review-pdf' element={<CommsData />} />

        <Route path='/sales-team' element={<SalesTeam />} />
        <Route
          path='/sales-team/new_rep'
          element={<SalesRepForm formType='new' />}
        />
        <Route
          path='/sales-team/edit_rep/:id'
          element={<SalesRepForm formType='edit' />}
        />
        <Route path='/users' element={<Users />} />
        <Route
          path='/users/new_user'
          element={<NewUserForm formType='new' />}
        />
        <Route
          path='/users/edit_user/:id'
          element={<UserForm formType='edit' />}
        /> */}
        {/* -- CATCH NON-ROUTED PATHS */}
        <Route path='*' element={<Missing />} />
        {/* </Route> */}
      </Route>
    </Routes>
  );
}

export default App;
