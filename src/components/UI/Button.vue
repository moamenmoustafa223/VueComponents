<template>
  <b-button
    class="mx-2 px-3 py-2  rounded-3 text-center custom-button"
    :class="customVariant"
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
    <i v-if="icon" :class="`m-0 me-2 ${icon}`"></i>
    <slot></slot>
  </b-button>
</template>

<script>
import { computed } from 'vue';
import { BButton, BSpinner} from 'bootstrap-vue-3';

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
    },
     icon: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const customVariant = computed(() => {
      const variantMap = {
        default: 'btn-default',
        defaultOutline: 'btn-defaultOutline',
        sec: 'btn-sec',
        secOutline: 'btn-secOutline',
        danger: 'btn-danger',
        dangerOutline: 'btn-dangerOutline'
      };
      return variantMap[props.variant] || 'btn-default';
    });

    return {
      customVariant
    };
  }
};
</script>

<style scoped>
.custom-button:hover {
  opacity: 0.8;
}
.btn-default {
  background-color: #164E6E;
  color: white;
  border: solid 2px #164E6E !important;
}
.btn-default:hover {
  background-color: #164E6E;
  color: white;
}
.btn-defaultOutline {
  border: solid 2px #164E6E !important;
  background-color: #fff;
  color: #164E6E ;
}
.btn-defaultOutline:hover {
  color: #fff;
  background-color: #164E6E;
}

.btn-sec {
  background-color: #25C0C5;
  color: white;
  border: solid 2px #25C0C5 !important;

}
.btn-sec:hover {
  background-color: #25C0C5;
  color: white;
}
.btn-secOutline {
  border: solid 2px #25C0C5 !important;
  background-color: #fff;
  color: #25C0C5 ;
}
.btn-secOutline:hover {
  color: #fff;
  background-color: #25C0C5;
}

.btn-danger {
  background-color: #E91D26;
  color: white;
}
.btn-dangerOutline {
  border: solid 2px #E91D26 !important;
    background-color: #fff;
    color: #E91D26;
}
.btn-dangerOutline:hover {
  color: #fff;
    background-color: #E91D26;
}


/* Add other custom styles here */
</style>
