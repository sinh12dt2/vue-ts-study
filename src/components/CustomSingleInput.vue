<template>
  <div class="flex flex-col w-1/3 mx-auto">
    <input
      type="text"
      :value="age"
      class="border shadow border-blue-200 rounded-md p-2 mb-3"
      placeholder="age"
      @input="$emit('update:age', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    age: String,
  },
  // or we can call a function on input and update it in setup function
  //   setup(props, context) {
  //     const updateEmail = (event) => {
  //       context.emit("update:email", event.target.value);
  //     };
  //  return { updateEmail }
  //   },
};
</script>
