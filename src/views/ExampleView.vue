<script setup lang="ts">
import MyModal from '@/components/Modal.vue';
import CustomMultipleInput from '@/components/CustomMultipleInput.vue';
import { ref, reactive } from 'vue';
import { UserEntity } from '@/entities/user.entity';
const modal = ref<InstanceType<typeof MyModal> | null>(null);
const initUser: UserEntity = { username: '', email: '', mobile: 0, married: true };
const initUser1: UserEntity = { username: '', email: '', mobile: 0, married: true };
const user = reactive<UserEntity>(initUser);
const user1 = ref<UserEntity>(initUser1);

const openModal = () => {
  modal.value?.isContentShown ? modal.value?.close() : modal.value?.open()
}
const clear = () => {
  Object.assign(user, initUser1);
}
const updateUser = <T extends keyof UserEntity>(name: T, value: UserEntity[T]) => {
  user1.value[name] = value;
}

</script>

<template>
  <div class="relative rounded-xl overflow-auto">
    <div class="sm:px-8 flex sm:justify-center">
      <div class="bg-white px-6 py-4 shadow">
      <nav class="flex justify-center space-x-4">
        <a href="#/dashboard" class="rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900 font-bold">Home</a>
        <a href="#/team" class="rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900 font-bold">Team</a>
        <a href="#/projects" class="rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900 font-bold">Projects</a>
        <a href="#/reports" class="rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900 font-bold">Reports</a>
        </nav>
      </div>
    </div>
    </div>
  <div class="mx-auto w-1/3">
    <button class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="button" @click="openModal()">Click me</button>
  </div>
  <MyModal ref="modal" />
  <CustomMultipleInput 
  :user1="user1"
  :updateUser="updateUser"
  v-model:username="user.username" v-model:email="user.email" v-model:mobile="user.mobile" v-model:married="user.married" :clear="clear" />
  <div>{{ modal?.isContentShown }}</div>
</template>
