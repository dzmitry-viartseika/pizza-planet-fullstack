import {mount} from '@vue/test-utils';
import BannerTemplate from '@/components/BannerTemplate.vue';

describe('BannerTemplate.vue', () => {
  it('check render components', () => {
    const wrapper = mount(BannerTemplate);
    const mainTitle = wrapper.find('h1');
    const secondTitle = wrapper.find('h2');
    const orderButton = wrapper.find('button');
    expect(mainTitle.is('h1')).toBe(true);
    expect(secondTitle.is('h2')).toBe(true);
    expect(orderButton.is('button')).toBe(true);
  });
});
