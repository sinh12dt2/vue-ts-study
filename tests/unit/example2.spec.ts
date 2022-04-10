import { mount } from '@vue/test-utils'
import ParentComponent from '@/components/ParentComponent.vue';
import ChildComponent from '@/components/ChildComponent.vue';
declare let pi_1 : any ;
console.log("Value of pi is :", pi_1)
describe('ParentComponent', () => {
  it("displays 'Emitted!' when custom event is emitted", async () => {
    const wrapper = mount(ParentComponent);
    const child = wrapper.findComponent(ChildComponent);
    const button = child.find('button');
    await button.trigger('click');
    // wrapper.findComponent(ChildComponent).vm.$emit('custom');
    expect(wrapper.html()).toContain('Emitted!')
  })
})
