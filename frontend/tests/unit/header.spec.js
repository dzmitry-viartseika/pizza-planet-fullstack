import { shallowMount } from '@vue/test-utils';
import HeaderTemplate from '../../src/components/HeaderTemplate.vue';

describe('HeaderTemplate.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(HeaderTemplate, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});


// describe('Content.vue', () => {
//   test('render component Visibility', () => {
//     const wrapper = shallowMount(Visibility);
//     expect(wrapper.text()).toContain('Air Visibility'); (проверяет содержание данного текста в компоненте)
//   });
// });
