import { mount } from '@vue/test-utils';
import ServersList from '../../src/components/ServersList.vue';
import store from '../../src/store/index';

describe('ServersList component testing', () => {
  test('Servers list render correctyl with 0 elements', () => {
    const wrapper = mount(ServersList, {
      global: {
        plugins: [store],
      },
    });
    const navigationItems = wrapper.findAll('[data-testid="single-server"]');
    expect(navigationItems.length).toEqual(0);
  });
});
