<template>
  <div
    class="md-sidebar md-sidebar--primary"
    :class="{ 'md-sidebar--open': sidebarOpen }"
    data-md-component="navigation"
  >
    <div data-algolia-lvl="1" class="algolia-lvl1">{{ algoliaLvl1 }}</div>
    <div class="md-sidebar__scrollwrap" ref="scrollwrap">
      <div class="md-sidebar__inner">
        <nav class="md-nav md-nav--primary" data-md-level="0">
          <label class="md-nav__title md-nav__title--site mobile-only" for="drawer">
            <span class="md-nav__button md-logo">
              <img src="/logo-min.png" width="48" height="48" />
            </span>
            <span>Kuzzle Documentation</span>
          </label>
          <TabsMobile :kuzzleMajor="kuzzleMajor" @closeSidebar="$emit('closeSidebar')" />
          <SDKSelector
            class="md-sidebar--selector"
            v-if="sdkOrApiPage"
            :items="sdkList"
            :kuzzleMajor="kuzzleMajor"
          />
          <!-- Render item list -->
          <ul class="md-nav__list" data-md-scrollfix>
            <div
              v-for="item__1 in getPageChildren(root).filter(
                p => p.frontmatter.type === 'branch'
              )"
              class="md-nav__item-container"
            >
              <li
                class="md-nav__separator"
                :data-algolia-lvl="$page.path.startsWith(item__1.path) ? '2' : ''"
              >{{ item__1.frontmatter.title }}</li>

              <div v-for="item__2 in getPageChildren(item__1)">
                <li class="md-nav__item md-nav-title">
                  <div
                    class="md-nav__link"
                    :class="{
                      'md-nav__link--active': $page.path === item__2.path,
                      'md-nav__item--code': item__2.frontmatter.code == true
                    }"
                  >
                    <div
                      v-if="getPageChildren(item__2).length"
                      @click="handleSubmenuClick(item__1, item__2)"
                    >
                      <i
                        v-if="
                          openedSubmenu ===
                            getId([item__1.title, item__2.title])
                        "
                        class="fa fa-caret-down"
                        aria-hidden="true"
                      ></i>
                      <i v-else class="fa fa-caret-right" aria-hidden="true"></i>
                      <span
                        :data-algolia-lvl="$page.path.startsWith(item__2.path) ? '3' : ''"
                      >{{ item__2.title }}</span>
                    </div>
                    <router-link v-else :to="item__2.path" @click.native="closeSidebar">
                      <a
                        class="no_arrow"
                        :data-algolia-lvl="$page.path.startsWith(item__2.path) ? '3' : ''"
                      >{{ item__2.title }}</a>
                    </router-link>
                  </div>
                </li>
                <ul
                  class="md-nav__list sub-menu"
                  :class="subMenuClass(item__1, item__2)"
                  :id="getId([item__1.title, item__2.title])"
                >
                  <div
                    v-for="item__3 of getPageChildren(item__2)"
                    class="md-nav__item"
                    :id="getId([item__1.title, item__2.title, item__3.title])"
                  >
                    <li v-if="$page.path === item__3.path">
                      <router-link
                        class="md-nav__link--active"
                        :class="{
                          'md-nav__item--code': item__3.frontmatter.code
                        }"
                        :to="{ path: item__3.path }"
                        :title="item__3.title"
                        @click.native="$emit('closeSidebar')"
                      >
                        <a class="no_arrow" data-algolia-lvl="4">{{ item__3.title }}</a>
                      </router-link>
                    </li>
                    <li v-else>
                      <router-link
                        :to="{ path: item__3.path }"
                        :title="item__3.title"
                        class="md-nav__link"
                        @click.native="$emit('closeSidebar')"
                        :class="{
                          'md-nav__item--code': item__3.frontmatter.code
                        }"
                      >
                        <a class="no_arrow">{{ item__3.title }}</a>
                      </router-link>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import TabsMobile from './TabsMobile.vue';
import {
  getPageChildren,
  findRootNode,
  setItemLocalStorage,
  getItemLocalStorage,
  getNodeByPath,
} from '../util.js';
import sdks from '../sdk.json';
import plugins from '../plugins.json';
import howtos from '../howto.json';

export default {
  components: {
    TabsMobile,
  },
  props: {
    sidebarOpen: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      openedSubmenu: '',
      kuzzleMajor: '2',
    };
  },
  computed: {
    algoliaLvl1() {
      // if it's a SDK-reference page...
      if (this.$page.fullPath.match(/\/sdk\/[a-z\-]+\/\d+\//)) {
        const splitPath = this.$page.fullPath.split('/');
        // ... find out which one based on the URL path
        const currentSdk = this.sdkList.find(
          (el) => el.version === splitPath[3] && el.language === splitPath[2]
        );
        if (currentSdk) {
          // ... and return its name from the list
          return currentSdk.name;
        } else {
          return 'Unknown SDK';
        }
      }
      // if it's a how-to page...
      if (this.$page.fullPath.match(/\/how-to\/\d+\//)) {
        const currentHowto = this.flattenedHowtoList.find((el) => {
          return this.$page.fullPath.startsWith(el.link);
        });
        if (currentHowto) {
          return currentHowto.name;
        } else {
          return 'Unknown How-to';
        }
      }
      // if it's an official plugin page...
      if (this.$page.fullPath.match(/\/official-plugins\/[a-z\-]+\/\d+\//)) {
        const currentPlugin = this.pluginList.find((el) =>
          this.$page.fullPath.startsWith(el.url)
        );
        if (currentPlugin) {
          return currentPlugin.name;
        } else {
          return 'Unknown Plugin';
        }
      }
      // Otherwise we're in the core documentation
      return `Core ${this.kuzzleMajor}.x`;
    },
    sdkOrApiPage() {
      return this.$route.path.match(/(^\/sdk\/|\/core\/1\/api\/)/);
    },
    root() {
      return findRootNode(this.$page, this.$site.pages);
    },
    sdkList() {
      return sdks[this.kuzzleMajor] || [];
    },
    pluginList() {
      return plugins[this.kuzzleMajor] || [];
    },
    howtoList() {
      return howtos[this.kuzzleMajor] || [];
    },
    flattenedHowtoList() {
      let flattenedHowtoList = [];
      Object.keys(this.howtoList).forEach((category) => {
        flattenedHowtoList = flattenedHowtoList.concat(
          this.howtoList[category]
        );
      });
      return flattenedHowtoList;
    },
  },
  methods: {
    setOpenedSubmenu(item__1, item__2) {
      setItemLocalStorage('item__1', item__1);
      setItemLocalStorage('item__2', item__2);
      this.openedSubmenu = this.getId([item__1.title, item__2.title]);
    },
    unsetOpenedSubmenu() {
      localStorage.setItem('item__1', null);
      localStorage.setItem('item__2', null);
      this.openedSubmenu = '';
    },
    closeSubmenu() {
      if (this.openedSubmenu === '') {
        return;
      }
      const openedSubmenuId = this.sanitize(this.openedSubmenu);
      if (!document.getElementById(openedSubmenuId)) {
        return;
      }
      document.getElementById(openedSubmenuId).style.height = '0px';
    },
    redirect(item__2) {
      this.closeSidebar();
      this.unsetOpenedSubmenu();
      this.$router.push(item__2.path);
    },
    openSubmenu(item__1, item__2) {
      const childs = this.getPageChildren(item__2);
      if (!childs) {
        return;
      }
      const item2Id = this.getId([item__1.title, item__2.title]);
      const item3Id = this.getId([
        item__1.title,
        item__2.title,
        childs[0].title,
      ]);
      if (!document.getElementById(item3Id)) {
        return;
      }
      const childSize = document.getElementById(item3Id).offsetHeight;
      const menuHeight = `${childs.length * childSize}px`;
      document.getElementById(item2Id).style.height = menuHeight;
    },
    closeSidebar(item) {
      this.$emit('closeSidebar');
    },
    subMenuClass(item__1, item__2) {
      return this.openedSubmenu === this.getId([item__1.title, item__2.title])
        ? 'displaySubmenu'
        : '';
    },
    getId(itemsTitle) {
      return itemsTitle.reduce(
        (id, item) => id + '_' + this.sanitize(item),
        ''
      );
    },
    sanitize(str) {
      return str.replace(/ /g, '_');
    },
    handleSubmenuClick(item__1, item__2) {
      const childs = this.getPageChildren(item__2);
      const clickedSubmenuId = this.getId([item__1.title, item__2.title]);

      if (!childs.length) {
        this.redirect(item__2);
      } else if (this.openedSubmenu === clickedSubmenuId) {
        this.closeSubmenu();
        this.unsetOpenedSubmenu();
      } else if (document.getElementById(clickedSubmenuId)) {
        this.closeSubmenu();
        this.openSubmenu(item__1, item__2);
        this.setOpenedSubmenu(item__1, item__2);
      }
    },

    getPageChildren(page) {
      return getPageChildren(page, this.$site.pages);
    },
    /**
     * @param {Element} target
     */
    isInViewport(target) {
      const rect = target.getBoundingClientRect();

      return (
        rect.bottom > 0 &&
        rect.right > 0 &&
        rect.left <
          (window.innerWidth || document.documentElement.clientWidth) &&
        rect.top < (window.innerHeight || document.documentElement.clientHeight)
      );
    },
    openCurrentSubmenu() {
      let path = this.$route.path;
      const splitted = path.split('/');
      const item__2Path = path.replace(`${splitted[splitted.length - 2]}/`, '');
      const item__1Path = item__2Path.replace(
        `${splitted[splitted.length - 3]}/`,
        ''
      );
      const item__1 = getNodeByPath(item__1Path, this.$site.pages);
      const item__2 = getNodeByPath(item__2Path, this.$site.pages);
      if (!item__1 || !item__2) {
        return;
      }
      this.closeSubmenu();
      this.openSubmenu(item__1, item__2);
      this.setOpenedSubmenu(item__1, item__2);
    },
    scrollToActiveItem() {
      document.onreadystatechange = () => {
        if (document.readyState === 'complete') {
          const activeLink = this.$el.querySelector('.md-nav__link--active');
          if (activeLink && !this.isInViewport(activeLink)) {
            const activeDiv = activeLink.parentElement.parentElement;
            const scroll =
              activeDiv.offsetTop + activeDiv.offsetParent.offsetTop - 50;
            this.$refs.scrollwrap.scrollTop = scroll;
          }
        }
      };
    },
  },
  mounted() {
    this.openCurrentSubmenu();
    this.scrollToActiveItem();
    this.kuzzleMajor = getItemLocalStorage('kuzzleMajor') || '2';
  },
};
</script>

<style lang="scss">
.algolia-lvl1 {
  display: none;
}
</style>
