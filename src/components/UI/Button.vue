<template>
    <b-button class="mx-2"
      :variant="bootstrapVariant"
      :size="size"
      :block="fullWidth"
      :disabled="isLoading || disabled"
      v-bind="$attrs"
    >
      <b-spinner
        v-if="isLoading"
        small
        type="border"
        class="me-2"
      ></b-spinner>
     
      <slot></slot>
    </b-button>
  </template>
  
  <script>
  import { computed } from 'vue';
  import { BButton, BSpinner } from 'bootstrap-vue-3';
  
  export default {
    name: 'Button',
    components: {
      BButton,
      BSpinner
    },
    props: {
      type: {
        type: String,
        default: 'button'
      },
      variant: {
        type: String,
        default: 'default'
      },
      size: {
        type: String,
        default: 'md'
      },
      fullWidth: {
        type: Boolean,
        default: false
      },
      isLoading: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    setup(props) {
      const bootstrapVariant = computed(() => {
        const variantMap = {
          default: 'primary',
          danger: 'danger',
          cancel: 'secondary',
          outline: 'outline-primary'
        };
        return variantMap[props.variant] || 'primary';
      });
  
      return {
        bootstrapVariant
      };
    }
  };

  </script>
  
  <style scoped>
  /* Add any additional scoped styles here */
  </style>
  