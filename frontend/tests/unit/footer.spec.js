import {mount} from '@vue/test-utils';
import FooterTemplate from '@/components/FooterTemplate.vue';

describe('FooterTemplate.vue', () => {
  it('check render of footer component', () => {
    const wrapper = mount(FooterTemplate);
    const copyrightText = wrapper.find('.footer__copyright');
    expect(copyrightText.is('div')).toBe(true);
    expect(copyrightText.text('2020')).toBe('2020');
  });
});
