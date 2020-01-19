import { shallowMount } from '@vue/test-utils';
import DeleteButton from '@/components/atoms/DeleteButton.vue';

describe('DeleteButton', () => {
  it('@click=onClickDeleteButton', () => {
    const mock = jest.fn();
    const wrapper = shallowMount(DeleteButton);
    wrapper.setMethods({ onClickDeleteButton: mock });
    wrapper.find('.delete-button').trigger('click');
    expect(mock).toHaveBeenCalled();
  });
});
