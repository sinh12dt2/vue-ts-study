import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  test('is delicious', () => {
    const msg = "new message";
    const bcs = "sdgsdgsdgsdg";
    const wrapper = shallowMount(HelloWorld, {
      props: { msg, bcs },
    });
    expect(wrapper.text()).toMatch(msg);
  });
  it("adds 1 + 2 to equal 3", () => {
    expect<string>(sum(1, 2)).toBe('3');
  });
  test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });
  // it("renders props.msg when passed", () => {
    // const msg = "new message";
    // const bcs = "sdgsdgsdgsdg";
    // const wrapper = shallowMount(HelloWorld, {
    //   props: { msg, bcs },
    // });
    // expect(wrapper.text()).toMatch(msg);
  // });
});

const sum = (a: number, b: number): string => {
  return (a + b).toString();
}

// describe("HelloWorld.vue", () => {
//   it("adds 1 + 2 to equal 3", () => {
//     expect<string>(sum(1, 2)).toBe('3');
//   });
// });
