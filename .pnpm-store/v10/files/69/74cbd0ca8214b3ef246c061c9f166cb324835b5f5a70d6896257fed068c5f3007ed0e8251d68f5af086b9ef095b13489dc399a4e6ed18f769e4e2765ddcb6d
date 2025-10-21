/* global test, jest, expect */

import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import * as color from '../../helpers/color';
// import canvas from 'canvas'

import Sketch from './Sketch';
import SketchFields from './SketchFields';
import SketchPresetColors from './SketchPresetColors';
import { Swatch } from '../common';
test('Sketch renders correctly', function () {
  var tree = renderer.create( /*#__PURE__*/React.createElement(Sketch, color.red)).toJSON();
  expect(tree).toMatchSnapshot();
});

// test('Sketch renders on server correctly', () => {
//   const tree = renderer.create(
//     <Sketch renderers={{ canvas }} { ...color.red } />
//   ).toJSON()
//   expect(tree).toMatchSnapshot()
// })

test('Sketch onChange events correctly', function () {
  var changeSpy = jest.fn(function (data) {
    expect(color.simpleCheckForValidColor(data)).toBeTruthy();
  });
  var tree = mount( /*#__PURE__*/React.createElement(Sketch, {
    onChange: changeSpy
  }));
  expect(changeSpy).toHaveBeenCalledTimes(0);
  var swatches = tree.find(Swatch);
  swatches.at(0).childAt(0).simulate('click');
  expect(changeSpy).toHaveBeenCalled();
});
test('Sketch with onSwatchHover events correctly', function () {
  var hoverSpy = jest.fn(function (data) {
    expect(color.simpleCheckForValidColor(data)).toBeTruthy();
  });
  var tree = mount( /*#__PURE__*/React.createElement(Sketch, {
    onSwatchHover: hoverSpy
  }));
  expect(hoverSpy).toHaveBeenCalledTimes(0);
  var swatches = tree.find(Swatch);
  swatches.at(0).childAt(0).simulate('mouseOver');
  expect(hoverSpy).toHaveBeenCalled();
});
test('Sketch renders custom styles correctly', function () {
  var tree = renderer.create( /*#__PURE__*/React.createElement(Sketch, {
    styles: {
      default: {
        picker: {
          boxShadow: 'none'
        }
      }
    }
  })).toJSON();
  expect(tree.props.style.boxShadow).toBe('none');
});
test('SketchFields renders correctly', function () {
  var tree = renderer.create( /*#__PURE__*/React.createElement(SketchFields, color.red)).toJSON();
  expect(tree).toMatchSnapshot();
});
test('SketchPresetColors renders correctly', function () {
  var tree = renderer.create( /*#__PURE__*/React.createElement(SketchPresetColors, {
    colors: ['#fff', '#999', '#000']
  })).toJSON();
  expect(tree).toMatchSnapshot();
});
test('SketchPresetColors with custom titles renders correctly', function () {
  var colors = [{
    color: '#fff',
    title: 'white'
  }, {
    color: '#999',
    title: 'gray'
  }, {
    color: '#000'
  }, '#f00'];
  var tree = renderer.create( /*#__PURE__*/React.createElement(SketchPresetColors, {
    colors: colors
  })).toJSON();
  expect(tree).toMatchSnapshot();
});