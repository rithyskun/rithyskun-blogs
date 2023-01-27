<script setup lang="ts">
import MdEditor from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'

export interface IContent {
  id: number
  title: string
  description: string
  isActive: boolean
}

// const contents = ref([
//   {
//     id: 1,
//     title: '1 content',
//     description:
//       'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
//     isActive: true
//   },
//   {
//     id: 2,
//     title: '2 content',
//     description:
//       'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
//     isActive: true
//   },
//   {
//     id: 3,
//     title: '3 content',
//     description:
//       'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
//     isActive: true
//   },
//   {
//     id: 4,
//     title: '4 content',
//     description:
//       'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
//     isActive: true
//   },
//   {
//     id: 5,
//     title: '5 content',
//     description:
//       'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
//     isActive: true
//   },
//   {
//     id: 6,
//     title: '6 content',
//     description:
//       'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
//     isActive: true
//   }
// ])

const { data: contents } = await useFetch('/api/blog/blog')

const handleContent = (content: IContent) => {
  console.log(content)
}

const handleShowCreateModal = () => {
  show.value = true
}

const show = ref<boolean>(false)
const blog = ref({
  title: "",
  coverImageUrl: "",
  description: "",
  tags: [],
  blogBody: ""
})

const handleCreateBlog = async () => {

  let bodyData = {
    title: blog.value.title,
    coverImageUrl: "",
    tags: blog.value.tags,
    blogBody: blog.value.blogBody
  }
  const result = await useFetch('/api/blog/blog', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: bodyData
  })
  show.value = false
  
}

</script>

<template>
  <div>
    <button @click="handleShowCreateModal" class="py-2.5 dark:text-white dark:bg-gray-800 rounded-xl font-bold px-3 bg-gray-200 hover:text-blue-500">
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
        <form @submit="handleCreateBlog" class="flex flex-col gap-5">
          <!-- <input type="file"  placeholder="A a cover image"> -->
          <input type="text" v-model="blog.title" placeholder="New blog title here...">
          <input type="text" v-model="blog.description" placeholder="Description">
          <input type="text" v-model="blog.tags" placeholder="Tags">
          <md-editor v-model="blog.blogBody" language="en-US" />
          
        </form>
      </ClientOnly>
      </template>

      <template #footer>
        <button @click="handleCreateBlog" class="form-input">
          Submit
        </button>
      </template>
    </SharedModal>
  </div>
  <div
    class="md:p-5 grid grid-cols-1 md:grid-cols-2 gap-5 bg-white dark:bg-black dark:border-gray-700 rounded"
  >
    <NuxtLink
      v-for="(content, index) in contents"
      :key="index"
      @click="handleContent(content)"
      class="block max-w-sm p-5 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <h5
        class="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        {{ content.title }}
        <span class="py-0.5 px-1 font-sans text-xs flex">
          {{  content.tags }}
        </span>
      </h5>
      <p class="font-normal text-gray-700 dark:text-gray-400">
        {{ content.description }}
      </p>
    </NuxtLink>
  </div>
</template>
