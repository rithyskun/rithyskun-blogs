<script setup lang="ts">
import MdEditor from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'

export interface IContent {
  id: number
  title: string
  description: string
  isActive: boolean
}

const contents = ref([
  {
    id: 1,
    title: 'Interview with News company',
    description:
      'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    isActive: true,
  },
  {
    id: 2,
    title: 'Interviw with UK ISP company',
    description:
      'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    isActive: true,
  },
  {
    id: 3,
    title: 'Interview with Bank',
    description:
      'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    isActive: true,
  },
  {
    id: 4,
    title: 'Interview with ISP',
    description:
      'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    isActive: true,
  },
  {
    id: 5,
    title: 'Interview with IT consultant company',
    description:
      'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    isActive: true,
  },
  {
    id: 6,
    title: 'Interview with leading cambodian IT companies',
    description:
      'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    isActive: true,
  },
])

// const { data: contents } = await useFetch('/api/blog/blog')

function handleContent(content: IContent) {
  console.error(content)
}

function handleShowCreateModal() {
  show.value = true
}

const show = ref<boolean>(false)
const blog = ref({
  title: '',
  coverImageUrl: '',
  description: '',
  tags: [],
  blogBody: '',
})

async function handleCreateBlog() {
  const bodyData = {
    title: blog.value.title,
    coverImageUrl: '',
    tags: blog.value.tags,
    blogBody: blog.value.blogBody,
  }
  const result = await useFetch('/api/blog/blog', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: bodyData,
  })
  show.value = false
}
</script>

<template>
  <div>
    <button
      class="py-2.5 dark:text-white dark:bg-gray-800 rounded-xl font-bold px-3 bg-gray-200 hover:text-blue-500"
      @click="handleShowCreateModal"
    >
      Create
    </button>
    <SharedModal v-show="show" @closeModal="show = false">
      <template #header>
        <div class="text-xl dark:text-white uppercase font-bold">
          New POST
        </div>
      </template>
      <template #body>
        <ClientOnly>
          <form class="flex flex-col gap-5" @submit="handleCreateBlog">
            <!-- <input type="file"  placeholder="A a cover image"> -->
            <input
              v-model="blog.title"
              type="text"
              placeholder="New blog title here..."
            >
            <input
              v-model="blog.description"
              type="text"
              placeholder="Description"
            >
            <input v-model="blog.tags" type="text" placeholder="Tags">
            <MdEditor v-model="blog.blogBody" language="en-US" />
          </form>
        </ClientOnly>
      </template>

      <template #footer>
        <button class="form-input" @click="handleCreateBlog">
          Submit
        </button>
      </template>
    </SharedModal>
  </div>
  <div
    class="md:p-5 mt-5 grid grid-cols-1 md:grid-cols-2 gap-5 bg-white dark:bg-black dark:border-gray-700 rounded"
  >
    <NuxtLink
      v-for="(content, index) in contents"
      :key="index"
      class="block max-w-sm p-5 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      @click="handleContent(content)"
    >
      <h5
        class="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        {{ content.title }}
      </h5>
      <p class="font-normal text-gray-700 dark:text-gray-400">
        {{ content.description }}
      </p>
    </NuxtLink>
  </div>
</template>
