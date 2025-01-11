<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '~/lib'
import { Primitive, type PrimitiveProps } from 'radix-vue'
import { type ButtonVariants, buttonVariants } from '.'

interface Props extends PrimitiveProps {
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  class?: HTMLAttributes['class']
  appearance?: Appearance
  loading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button'
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="cn(buttonVariants({ variant, size }), props.class)"
    :style="props.appearance?.style?.button"
    :disabled="loading"
  >
    <slot name="icon" />
    <slot />
  </Primitive>
</template>
