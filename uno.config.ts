// uno.config.ts

// 预设rem转px
import presetRemToPx from '@unocss/preset-rem-to-px'
// transformerDirectives 可以使用 @apply @screen theme函数
import transformerDirective from '@unocss/transformer-directives'
import { defineConfig, presetAttributify, presetIcons, presetUno, transformerVariantGroup } from 'unocss'

export default defineConfig({
  presets: [
    presetAttributify(),
    presetUno(),
    // 现在mt-1会转换为 margin-top: 1px
    presetRemToPx({
      baseFontSize: 4,
    }),
    // 自动引入图标配置
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
  ],
  transformers: [
    transformerDirective(),
    transformerVariantGroup(),
  ],
  // 自定义配置
  rules: [
    // 自定义配置
    // 以下官网规则可自定义转换
    // [/^m-(\d+)$/, ([, d]) => ({ margin: `${d / 4}rem` })],
    // [/^p-(\d+)$/, match => ({ padding: `${match[1] / 4}rem` })],
  ],
  // 自定义属性 一个属性可以对应多个unocss类值
  shortcuts: {
    // 垂直水平居中
    'flex-center': 'flex justify-center items-center',
    // 放在最后
    'flex-col-end': 'flex justify-end items-center',
    // 垂直居中
    'flex-middle': 'flex items-center',
    // 分开两边
    'flex-between': 'flex justify-between items-center',
    // 竖直居中
    'flex-col-center': 'flex flex-col justify-center',
  },
})
