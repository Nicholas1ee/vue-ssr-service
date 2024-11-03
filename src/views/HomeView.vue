<template>
  <div class="mx-auto w-[800px]">
      <main class="flex justify-end">
        <aside class="flex mr-24 w-40 shrink-0 flex-col gap-8">
          <div class="flex justify-center items-center mb-8">
            <img src="../assets/me.jpg" class="w-16 rounded-full border-2 border-gray-600" />
            <span class="text-3xl text-2xl text-xl"></span>
            <h1 class="grow text-center font-bold text-white ml-4 cursor-pointer" :class="nameFontSize" @click="handleTest">李楠</h1>
          </div>
          <div class="flex justify-between text-white text-opacity-80">
            <span class="flex items-center gap-2">
              <Icon icon="octicon:location-16" />
              <span>滴滴</span>
            </span>
            <span class="flex items-center gap-2">
              <Icon icon="ps:work-case" />
              <span>前端开发</span>
            </span>
          </div>
          <div class="text-xs leading-5 text-white text-opacity-80">
            Vue · React · Tailwind CSS · JavaScript · Webpack · Golang · TypeScript · VS Code
          </div>
        </aside>
        <article class="flex flex-col gap-4 text-white text-opacity-80 w-[500px]">
          <p>你好，欢迎查看我的个人简介</p>
          <p>目前就职于滴滴出行增长技术部</p>
          <p>一个兴趣使然的技术爱好者</p>
          <p>理想是制作有意思的产品</p>
          <p>游戏玩的还不错的竞技游戏玩家</p>
          <div class="mt-8">
            <div class="mb-5">Find me on</div>
            <div class="flex gap-2 wrap text-white text-opacity-80">
              <a href="" class="flex items-center gap-2">
                <Icon icon="iconamoon:email-fill" />
                <span>Emaill</span>
              </a>
              <a href="" class="flex items-center gap-2">
                <Icon icon="bxl:github" />
                <span>GitHub</span>
              </a>
              <a href="" class="flex items-center gap-2">
                <Icon icon="bxl:instagram" />
                <span>Instagram</span>
              </a>
              <a href="" class="flex items-center gap-2">
                <Icon icon="codicon:twitter" />
                <span>Twitter</span>
              </a>
              <a href="" class="flex items-center gap-2">
                <Icon icon="bxl:tiktok" />
                <span>Tiktok</span>
              </a>
            </div>
          </div>
        </article>
      </main>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Icon } from '@iconify/vue2';
import { useCommonStore } from '@/stores/index';

export default Vue.extend({
  name: 'HomeView',
  components: {
    Icon,
  },
  data() {
    return {
      fontSize: 3
    }
  },
  mounted() {
    const cmomonStore = useCommonStore()

    console.log(cmomonStore.renderType, 'renderType');
  },
  computed: {
    nameFontSize() {
      return `text-${this.fontSize === 1 ? '' : this.fontSize}xl`
    },
  },
  methods: {
    handleTest() {
      if (this.fontSize === 1) {
        this.fontSize = 3
      } else {
        this.fontSize --
      }
    },
  },
});
</script>
