import { JSDOM } from 'jsdom';
import jquery from 'jquery';
import TestUtils from 'react-dom/test-utils';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import chaiJquery from 'chai-jquery';
import { MemoryRouter } from 'react-router-dom';
import reducers from '../src/reducers';

// Setting up testing environment to run like a browser in the command line
global.window = new JSDOM('<!doctype html><html><body></body></html>').window;
global.document = global.window.document;
const $ = jquery(global.window);

// Build 'renderComponent' helper that should render a given react class
function renderComponent(ComponentClass, props, state) {
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <MemoryRouter>
        <ComponentClass { ...props } />
      </MemoryRouter>
    </Provider>
  );

  return $(ReactDOM.findDOMNode(componentInstance)); // produces HTML
}


// Build helper for simulating events
$.fn.simulate = function(eventName, value) {
  if (value) {
    this.val(value);
  }
  TestUtils.Simulate[eventName](this[0]);
}


// Set up chai-jquery
chaiJquery(chai, chai.util, $);

export { renderComponent, expect };
