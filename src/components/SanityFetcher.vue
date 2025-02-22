<!-- 
 
To use this component in other components:

    <SanityFetcher query="*[_type == 'post']">
      <template v-slot="{ data, loading, error }">
        <div v-if="loading">Loading...</div>
        <div v-else-if="error">Error: {{ error.message }}</div>
        <ul v-else>
          <li v-for="post in data" :key="post._id">{{ post.title }}</li>
        </ul>
      </template>
    </SanityFetcher>

-->

<template>
  <div>
    <slot :data="data" :loading="loading" :error="error"></slot>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue'
import { createClient } from '@sanity/client'

type SanityError = Error | null
const client = createClient({
  projectId: 'cxhqzl0j',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2025-02-22',
})

export default {
  name: 'SanityFetcher',
  props: {
    query: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const data = ref(null)
    const loading = ref(true)
    const error = ref<SanityError>(null)

    const fetchData = async () => {
      try {
        data.value = await client.fetch(props.query)
      } catch (err) {
        error.value = err instanceof Error ? err : new Error('An unknown error occurred')
      } finally {
        loading.value = false
      }
    }

    onMounted(fetchData)

    return { data, loading, error }
  },
}
</script>
