import { mount } from '@vue/test-utils';
import HelloWorld from '../../src/components/HelloWorld.vue';
import store from '../../src/store/index';

describe('Hello world file testing', () => {
  test('Name is displayed correctly with the store initial value', () => {
    const wrapper = mount(HelloWorld, {
      global: {
        plugins: [store],
      },
    });
    const titleContent = wrapper.find('[data-testid="main-name"]').text();
    expect(titleContent).toEqual('Oliver');
  });
});
