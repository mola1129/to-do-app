import { shallowMount } from '@vue/test-utils';
import GitHubButton from '@//components/atoms/GitHubButton.vue';

describe('GitHubButton', () => {
  it('props', () => {
    const propsData = { href: 'https://github.com/mola1129/to-do-app' };
    const wrapper = shallowMount(GitHubButton, { propsData });
    expect(wrapper.props()).toEqual(propsData);
  });
});
