require('whatwg-fetch');

const Enzyme = require('enzyme');

const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });

Object.defineProperty(global, 'IS_REACT_ACT_ENVIRONMENT', {
  value: true,
});
