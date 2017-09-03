// Modules
import Switch from '../Switch';


/* eslint-disable no-undef */
describe('Switch', () => {
  context('with default props', () => {
    forEach({isOn: [true, false]}, () => {
      itRenders(() => <Switch isOn={isOn} />);
    });
  });
});
