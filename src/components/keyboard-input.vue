<template>
  <div class="input-keyboard">

    <SimpleKeyboard
      :ref="keyboardClass"
      :keyboardClass="keyboardClass"
      @onChange="onChange"
      @onKeyPress="onKeyPress"
      :input="inputValue"
      :maxLength="maxlength"
    />
  </div>
</template>

<script>
import SimpleKeyboard from './simpleKeyboard.vue';

export default {
  name: 'keyboard-input',
  components: {
    SimpleKeyboard,
  },
  props: {
    keyboardClass: String,

    value: {
      default: '',
    },
    inputClass: String,
    type: {
      type: String,
      default: 'text',
    },
    showPassword: {
      type: Boolean,
      default: false,
    },
    rows: Number,
    showWordLimit: {
      default: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    maxlength: Number,
    clearable: {
      type: Boolean,
      default: true,
    },
    size: String,
    placeholder: String,
    appendPort: {
      type: Boolean,
      default: false,
    },
    autocomplete: {
      default: '',
    },
    suffixIcon: {
      default: '',
    },
  },
  data() {
    return {
      input: null,
      inputEle: null,
    };
  },
  computed: {
    inputValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('inputChange', value);
      },
    },
  },
  mounted(){
    this.focusInput()
  },
  methods: {
    inputChange() {
      this.$emit('inputChange');
    },
    inputFun() {
      this.$emit('input');
    },
    focusInput() {
      // console.log("focusInput");
      // 打开当前输入框的keyboard
      let currentKeyborad = this.$refs[this.keyboardClass];
      currentKeyborad.$el.style.visibility = 'visible';
      // this.$emit('focus');
    },
    onChange(input) {
      this.inputValue = input;
      this.$emit('inputChange', input)
      // console.log("change: " + input);
    },
    // 按的那个键
    onKeyPress(button) {
      console.log('onKeyPress: ', button);
    },
  },
};
</script>

<style lang="less" scoped>

</style>