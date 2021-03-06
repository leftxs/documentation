<template>
  <div class="md-layout">
    <div class="overlayLoading" v-if="isLoading" />
    <div
      class="overlay"
      :class="{ hidden: !sidebarOpen }"
      @click="closeSidebar"
    ></div>
    <Header
      ref="header"
      @openSidebar="openSidebar"
      @kuzzle-major-changed="changeKuzzleMajor"
    />

    <div ref="container" class="md-container">
      <!-- Main container -->
      <main class="md-main">
        <div class="md-main__inner md-grid" data-md-component="container">
          <!-- Main navigation -->
          <Sidebar
            ref="sidebar"
            :sidebarOpen="sidebarOpen"
            @closeSidebar="closeSidebar"
            :kuzzleMajor="kuzzleMajor"
          />
          <!-- Table of contents -->
          <div
            ref="toc"
            class="md-sidebar md-sidebar--secondary"
            data-md-component="toc"
          >
            <div class="md-sidebar__scrollwrap">
              <div class="md-sidebar__inner">
                <div v-if="sdkOrApiPage" class="selector-container">
                  <SDKSelector :items="sdkList" :kuzzleMajor="kuzzleMajor" />
                </div>
                <TOC />
              </div>
            </div>
          </div>
          <!-- Content -->

          <div class="md-content">
            <div>
              <WarningBanner v-if="isDeprecatedBannerShowed">
                This SDK has been deprecated because of stability issues. It is not
                advised to use it in a production environment.
              </WarningBanner>
            </div>
            <article class="md-content__inner md-typeset">
              <Content />
            </article>
          </div>
        </div>
      </main>

      <Footer ref="footer" />
    </div>
  </div>
</template>

<script>
import Clipboard from 'clipboard';
import Header from './Header.vue';
import WarningBanner from '../components/WarningBanner.vue';
import Sidebar from './Sidebar.vue';
import TOC from './TOC.vue';
import Footer from './Footer.vue';
import sdks from '../sdk.json';

const {
  getFirstValidChild,
  setItemLocalStorage,
  getItemLocalStorage
} = require('../util.js');

export default {
  components: {
    Header,
    Sidebar,
    TOC,
    WarningBanner,
    Footer
  },
  data() {
    return {
      sidebarOpen: false,
      kuzzleMajor: '2',
      isLoading: true
    };
  },
  computed: {
    sdkOrApiPage() {
      const sdkOrApiRegExp = new RegExp(/(^\/sdk\/|\/api\/)/);
      return (
        this.$route.path.match(sdkOrApiRegExp) ||
        this.$site.base.match(sdkOrApiRegExp)
      );
    },
    sdkList() {
      return sdks[this.kuzzleMajor] || [];
    },
    isDeprecatedBannerShowed() {
      if (this.sdkOrApiPage) {
        const splitedPath = this.$site.base.split('/');
        const sdk = this.sdkList.find(
          el => el.language === splitedPath[2] && el.version === splitedPath[3]
        );

        if (sdk) {
          return sdk.deprecated || false;
        }
      }

      return false;
    },
  },
  methods: {
    changeKuzzleMajor(kuzzleMajor) {
      this.kuzzleMajor = kuzzleMajor;
      setItemLocalStorage('kuzzleMajor', this.kuzzleMajor);
      // We can't use the Vue router to push the "/" route because depending on
      // the sub-application (kuzzle, sdj-js, etc), the root path will change
      // ("/core/2", "/sdk/js/7", etc)
      document.location = '/';
    },
    openSidebar() {
      this.sidebarOpen = true;
    },
    closeSidebar() {
      this.sidebarOpen = false;
    },
    onCodeCopied(action) {
      const message = action.trigger.parentElement.querySelector(
        '.md-clipboard__message'
      );
      if (!(message instanceof HTMLElement)) throw new ReferenceError();

      /* Clear selection and reset debounce logic */
      action.clearSelection();
      if (message.dataset.mdTimer)
        clearTimeout(parseInt(message.dataset.mdTimer, 10));

      /* Set message indicating success and show it */
      message.classList.add('md-clipboard__message--active');

      /* Hide message after two seconds */
      message.dataset.mdTimer = setTimeout(() => {
        message.classList.remove('md-clipboard__message--active');
        message.dataset.mdTimer = '';
      }, 2000).toString();

      this.$ga('send', 'event', 'snippet', 'copied', 'label', 1, {
        path: this.$route.path
      });
    },
    computeContentHeight() {
      this.setContainerPadding();
      setTimeout(() => {
        this.computeSidebarHeight();
      }, 200);
    },
    setContainerPadding() {
      const padding = this.$refs.header.$el.querySelector('header')
        .offsetHeight;

      if (padding === null || typeof padding === 'undefined') {
        return;
      }

      this.$refs.container.style = `padding-top: ${padding}px;`;
    },
    computeSidebarHeight() {
      const sidebarTop = window
        .getComputedStyle(this.$refs.sidebar.$el)
        .top.replace('px', '');

      /**
       * * This helps to understand if we're on a mobile screen or not.
       *
       * On big screens, the Sidebar's top is the same as the container's
       * padding-top, while on smaller screens it's 0. On small screens the
       * height of the sidebar is 100% (this is set in the stylesheets) so
       * we don't want to change it.
       */
      if (parseInt(sidebarTop) <= 0) {
        this.$refs.sidebar.$el.style = `height: inherit`;
        return;
      }

      const topBoundary = this.$refs.header.$el.querySelector('header')
        .offsetHeight;

      if (topBoundary === null || typeof topBoundary === 'undefined') {
        return;
      }

      const visible = window.innerHeight - topBoundary;
      let sidebarHeight = visible - this.$refs.footer.$el.offsetHeight;

      if (this.$refs.container.offsetHeight > visible) {
        sidebarHeight = Math.min(
          visible,
          this.$refs.container.offsetHeight -
            this.$refs.footer.$el.offsetHeight -
            window.pageYOffset -
            topBoundary
        );
      }

      this.$refs.sidebar.$el.style = `height: ${sidebarHeight}px`;
      this.$refs.toc.style = `height: ${sidebarHeight}px`;
    }
  },
  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState === 'complete') {
        this.isLoading = false;
      }
    };

    this.$router.afterEach(this.computeContentHeight);
    window.addEventListener('resize', this.computeContentHeight.bind(this));
    window.addEventListener('scroll', this.computeSidebarHeight.bind(this));

    // TODO condition isSupported()
    const copy = new Clipboard('.md-clipboard', {
      target: trigger => {
        return trigger.parentElement.nextElementSibling;
      }
    });

    copy.on('success', this.onCodeCopied);

    if (this.$page.frontmatter.type !== 'page') {
      this.$router.replace(getFirstValidChild(this.$page, this.$site.pages));
    }

    this.computeContentHeight();

    this.kuzzleMajor = getItemLocalStorage('kuzzleMajor') || '2';
  }
};
</script>

<style src="prismjs/themes/prism-tomorrow.css"></style>
<style src="./styles/main.scss" lang="scss"></style>

<style lang="scss">
.md-layout {
  height: 100%;
}
</style>
