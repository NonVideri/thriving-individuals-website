<script lang="ts">
  type ParagraphType = 'small' | 'normal' | 'large'
  export let type: ParagraphType = 'normal'

  const sizes = {
    small: 'text-sm',
    normal: 'text-md',
    large: 'text-lg'
  }

  const size = sizes[type]
</script>

<p class="mb-5 {size}"><slot /></p>