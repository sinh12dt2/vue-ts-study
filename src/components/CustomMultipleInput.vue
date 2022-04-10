<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import { UserEntity } from "@/entities/user.entity";
const props = defineProps<{
  username: string;
  email: string;
  mobile: number;
  married: boolean;
  clear(): void;
  user1: UserEntity;
  updateUser<T extends keyof UserEntity>(name: T, value: UserEntity[T]): void;
}>();
console.log('props123', props);
const emit = defineEmits<{
  (event: "update:married", checked: boolean): void;
  (event: "update:username", checked: string): void;
  (event: "update:email", checked: string): void;
  (event: "update:mobile", checked: number): void;
  (event: "update:user1", user: UserEntity): void;
}>();

const updateEmail = (event: Event) => {
  emit(`update:email`, (event.target as HTMLInputElement).value);
};

const updateMobile = (event: Event) => {
  emit("update:mobile", Number((event.target as HTMLInputElement).value));
};

const updateMarried = (event: Event) => {
  emit("update:married", (event.target as HTMLInputElement).checked);
};

</script>

<template>
  <div class="flex flex-col w-1/3 mx-auto bg-orange-50 p-4 rounded-lg">
    <input
      type="text"
      :value="user1.username"
      class="border shadow border-blue-200 rounded-md p-2 mb-3"
      placeholder="username"
      @input="updateUser('username', ($event.target as HTMLInputElement).value)"
    />
    <input
      type="email"
      :value="email"
      @input="updateEmail($event)"
      class="border shadow border-blue-200 rounded-md p-2 mb-3"
      placeholder="email"
    />
    <input
      type="number"
      :value="mobile"
      @input="updateMobile($event)"
      class="border shadow border-blue-200 rounded-md p-2 mb-3"
      placeholder="mobile"
    />
    <div class="text-left">
      <span class="mr-3">Married</span>
      <input
        type="checkbox"
        id="vehicle1"
        name="vehicle1"
        :checked="married"
        @change="updateMarried($event)"
      />
    </div>
    <button class="btn-blue" type="button" @click="clear()">Clear</button>
    <div>{{ JSON.stringify(user1) }}</div>
  </div>
</template>
