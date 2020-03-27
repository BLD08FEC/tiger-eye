/*eslint-disable*/
import Styles from './Styles';
import React from 'react';
import { configure, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const mockStore = configureStore([thunk]);
const mockInitalState = {}
const mockInitialState = {
    productDataReducer: {
        productStyles: {},
        selectedStyleName: '',
        selectedStyle_id: 0,
    }
  };
  
  const createTestProps = props => ({
    ...props,
  });
  
  describe('Styles', () => {
    let props;
    let wrapper;
    let store;
  
    beforeEach(() => {
      props = createTestProps({});
      store = mockStore(mockInitialState);
  
      wrapper = mount(
        <Provider store={store}>
          <Styles {...props} />
        </Provider>,
      );
    });
  
    it('renders properly', () => {
      expect(wrapper.length).toBe(1);
    });
  });
  
  