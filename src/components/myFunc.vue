<template>

    <div class="form-body">
      <KeyboardInput
            keyboardClass="login-username"   

            :value="content"
            :maxlength="10"
            clearable
            @inputChange="formItemChange"
            placeholder="用户名"
          ></KeyboardInput>
    </div>

</template>

<script>
  import  KeyboardInput  from '../components/keyboard-input.vue';
  import { keyboardInputMixin } from '../util/mixins';
  import { judgeCloseKeyboard } from '../util/keyboard-core';

  export default {
  components: { KeyboardInput },
  mixins: [keyboardInputMixin], 
  data() {
    return {
      judgeCloseKeyboard,
      content: "",
    };
  },

  methods: {
    formItemChange(e){
      this.$emit('myChangeWord', e);
    }
  },
  };
</script>

<style lang="less" scoped>

</style>