import React from 'react';
import ConnectedSearchPanel, {SearchPanel} from '../../../../src/client/components/searchPanel/searchPanel';

describe('Search panel Component tests', function () {
  const initialState = {};
  const mockStore = configureStore();
  let store,container;

  beforeEach(function(){
    store = mockStore(initialState);
    container = mount(<ConnectedSearchPanel store={store}  />);
  });

  it('renders without problems', function () {
    expect(container.length).toEqual(1);
    expect(container).toMatchSnapshot();
  });


  it('Searches for Tweet on click of search button', function(){
    var actions = store.getActions();
    expect(container.find('.search-btn').length).toEqual(1);
    var button = container.find('button');
    button.simulate('click');

    const input = button.at(0);
    const evt = new Event('mouse');
    evt.initEvent('click', true, true, (new Object()),
      0, 0, 0, 0,
      0, 'e'.charCodeAt(0));
    expect(actions[0].type).toBe("SEARCH_TWEET_INPROGRESS");
  });
});