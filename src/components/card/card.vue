<template>
  <el-card>
    <p class="card-title">
      {{ title }}
    </p>
    <div
      v-if="$slots.number"
      class="card-number"
    >
      <slot name="number" />
    </div>
    <slot />
    <div
      v-if="$slots.footer"
      class="card-footer"
    >
      <slot
        name="footer"
      />
    </div>
  </el-card>
</template>

<script lang="ts">
export default {
  props: {
    title: {
      required: true,
      type: String
    }
  },
  setup() {
  }
}
</script>

<style scoped lang="scss">
.card-title {
  color: rgba(0,0,0,.45);
  font-size: 14px;
  line-height: 22px;
  height: 22px;
  margin-top: 0;
}
.card-number {
  color: rgba(0,0,0,.85);
  font-size: 30px;
  line-height: 38px;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
}
.card-footer {
  &:before {
    content: '';
    background: #f0f0f0;
    height: 1px;
    width: 100%;
    display: block;
    margin: 8px 0;
  }
}
</style>
