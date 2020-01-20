import { shallowMount } from '@vue/test-utils';
import DeleteButton from '@/components/atoms/DeleteButton.vue';

describe('DeleteButton', () => {
  describe('methods', () => {
    // メソッドの実行
    it('onClickDeleteButton', () => {
      const wrapper = shallowMount(DeleteButton);
      (wrapper.vm as any).onClickDeleteButton();
      expect(wrapper.emitted('clickDeleteButton')).toBeTruthy();
    });
  });

  describe('template', () => {
    // クリック時にメソッドが呼ばれているか
    it('@click=onClickDeleteButton', () => {
      const mock = jest.fn();
      const wrapper = shallowMount(DeleteButton);
      wrapper.setMethods({ onClickDeleteButton: mock });
      wrapper.find('.delete-button').trigger('click');
      expect(mock).toHaveBeenCalled();
    });
  });
});
