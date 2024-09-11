import { Alert, Flex, Select } from 'antd';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider, useMatch, useNavigate } from 'react-router-dom';
import * as demos from './demos';

const App = () => {
  const navigate = useNavigate();
  const match = useMatch('/*');

  return (
    <Flex vertical>
      <Select
        value={match?.params['*'] || Object.keys(demos)[0]}
        options={Object.keys(demos).map((label) => ({ label, value: label }))}
        style={{ width: 200 }}
        onChange={(value) => navigate(value)}
      />
      <Outlet />
    </Flex>
  );
};

const NotFound = () => {
  return <Alert message="Demo Not Found" type="error" />;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: Object.entries(demos).map(([key, Demo]) => ({
      path: key,
      element: <Demo />,
    })),
  },
]);

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(<RouterProvider router={router} />);
