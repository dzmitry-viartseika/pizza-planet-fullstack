import {mount} from '@vue/test-utils';
import HeaderTemplate from '../../src/components/HeaderTemplate.vue';
const wrapper = mount(HeaderTemplate);

describe('HeaderTemplate.vue', () => {
  it('check render of component', () => {
    const msg = 'PIZZA PLANET';
    expect(wrapper.text(msg)).toMatch('PIZZA PLANET');
  });
  it('check lenght of menu items', () => {
    const items = wrapper.findAll('.header-row__nav-item');
    expect(items.length).toBe(2);
  });
});


// describe('Content.vue', () => {
//   test('render component Visibility', () => {
//     const wrapper = shallowMount(Visibility);
//     expect(wrapper.text()).toContain('Air Visibility'); (проверяет содержание данного текста в компоненте)
//   });
// });
