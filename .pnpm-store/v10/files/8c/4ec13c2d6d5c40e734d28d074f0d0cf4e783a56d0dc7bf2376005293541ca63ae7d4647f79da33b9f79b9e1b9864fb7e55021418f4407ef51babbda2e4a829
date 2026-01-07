import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
export function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    var location = useLocation();
    var navigate = useNavigate();
    var params = useParams();
    var match = {
      params: params
    };
    var history = {
      back: function back() {
        return navigate(-1);
      },
      goBack: function goBack() {
        return navigate(-1);
      },
      location: location,
      push: function push(url, state) {
        return navigate(url, {
          state: state
        });
      },
      replace: function replace(url, state) {
        return navigate(url, {
          replace: true,
          state: state
        });
      }
    };
    return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
      history: history,
      location: location,
      match: match,
      params: params,
      navigate: navigate
    }));
  }
  return ComponentWithRouterProp;
}