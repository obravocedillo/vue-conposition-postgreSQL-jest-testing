import { mount } from '@vue/test-utils';
import Navigation from '../../src/components/Navbar.vue';
import store from '../../src/store/index';

describe('Navigation component testing', () => {
  test('Navigation items render correctyl', () => {
    const wrapper = mount(Navigation, {
      global: {
        plugins: [store],
      },
    });
    const navigationItems = wrapper.findAll('[data-testid="navigation-item"]');
    expect(navigationItems.length).toEqual(2);
  });
});
