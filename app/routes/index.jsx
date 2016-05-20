import React from 'react';
import {Route, IndexRoute} from 'react-router';
import {App, Home, About, Profile} from '../containers';

export default(
  <Route path="/" component={App}>
    {/*新增加了profile路由：后面是参数params*/}
    <Route path="profile/:username" component={Profile} />
    <IndexRoute component={Home} />
  </Route>
)
