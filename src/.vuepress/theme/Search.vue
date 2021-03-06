<template>
  <div class="md-search" data-md-component="search" role="dialog">
    <label class="md-search__overlay" for="search"></label>
    <div class="md-search__inner" role="search">
      <form class="md-search__form" name="search" @submit.prevent="goToHighlightedResult">
        <input
          id="algolia-search-input"
          type="text"
          class="md-search__input"
          name="query"
          placeholder="Search (s)"
          autocapitalize="off"
          autocorrect="off"
          autocomplete="off"
          spellcheck="false"
          data-md-component="query"
          data-md-state="active"
          ref="searchInput"
          v-model="query"
          @focus="$emit('search::on')"
          @keyup.down="
            highlightedResult = Math.min(
              highlightedResult + 1,
              results.length - 1
            )
          "
          @keyup.up="highlightedResult = Math.max(highlightedResult - 1, 0)"
          @keyup.esc="reset"
        />
        <label class="md-icon md-search__icon" for="search"></label>
        <button
          type="reset"
          class="md-icon md-search__icon search-reset-button"
          data-md-component="reset"
          tabindex="-1"
          @click="query = ''"
        >
          
          <!-- close -->
        </button>
      </form>
      <div class="md-search__output">
        <div class="md-search__scrollwrap" data-md-scrollfix>
          <div class="md-search-result" data-md-component="result">
            <div class="md-search-result__meta">
              <img
                v-if="results === null || results.length === 0"
                src="https://res.cloudinary.com/hilnmyskv/image/upload/search-by-algolia.svg"
                alt="Search by Algolia"
                class="algolia-logo"
              />
            </div>
            <ol class="md-search-result__list">
              <li
                v-for="(result, idx) in results"
                :key="`${result.path}-${idx}-${result.breadcrumbs.join('.')}`"
                class="md-search-result__item"
              >
                <a
                  class="md-search-result__link"
                  :href="getResultUrl(result)"
                  :title="result.title"
                  :data-rt="idx === highlightedResult ? 'active' : ''"
                >
                  <article class="md-search-result__article" @click="reset">
                    <h1 class="md-search-result__title">
                      {{ result.title }}
                      <span
                        v-for="tag in result.breadcrumbs"
                        :key="tag"
                        class="tag"
                      >{{ tag }}</span>
                    </h1>
                    <p
                      class="md-search-result__teaser"
                      v-html="result._highlightResult.content.value"
                    ></p>
                  </article>
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import algoliasearch from 'algoliasearch';

let algolia;

export default {
  props: {
    appId: {
      type: String,
      required: true
    },
    apiKey: {
      type: String,
      required: true
    },
    indexName: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      query: '',
      results: [],
      highlightedResult: 0
    };
  },
  computed: {
    currentTags() {
      return this.$route.path
        .substring(1)
        .split('/')
        .slice(0, 4)
        .map(tag => {
          if (tag === 'sdk-reference') {
            return 'sdk';
          }
          if (/^[0-9]+$/.test(tag)) {
            return tag + '.x';
          }
          return tag;
        });
    }
  },
  methods: {
    initializeAlgolia() {
      const client = algoliasearch(this.appId, this.apiKey);
      algolia = client.initIndex(this.indexName);
    },
    initializeHotkey() {
      // TODO MacOS version
      window.addEventListener('keyup', event => {
        if (event.key === 's' && this.$refs.searchInput) {
          this.$refs.searchInput.focus();
        }
      });
    },
    performSearch(query) {
      if (!query || query.length < 3) {
        this.results = [];
        return;
      }

      algolia.search(
        {
          query,
          attributesToRetrieve: ['breadcrumbs', 'title', 'path', 'basePath']
        },
        (err, content) => {
          if (err) {
            console.error(err);
            this.results = [
              {
                objectID: 'v-error',
                path: `https://github.com/kuzzleio/documentation/issues/new?assignees=&labels=bug&template=bug_report.md&title=%5B${err.name}%5D`,
                basePath: '',
                title: 'Search Error',
                _highlightResult: {
                  content: {
                    value:
                      'Something went wrong while performing the search. Select this result to report this problem.<br/>'
                  }
                }
              }
            ];
            return;
          }
          this.results = content.hits.sort(this.sortByTags);
        }
      );
    },
    sortByTags(a, b) {
      const scoreA = this.getTagsScore(a.tags),
        scoreB = this.getTagsScore(b.tags);

      return Math.sign(scoreB - scoreA);
    },
    getTagsScore(tags) {
      if (!tags) {
        return 0;
      }
      let score = 0;
      for (const tag of Object.values(tags)) {
        if (this.currentTags.includes(tag)) {
          ++score;
        }
      }
      return score;
    },
    reset() {
      this.query = '';
      this.$emit('search::off');
      this.$refs.searchInput.blur();
    },
    goToHighlightedResult(event) {
      event.preventDefault();
      if (!this.results || !this.results[this.highlightedResult]) {
        return;
      }
      window.location.href = this.getResultUrl(
        this.results[this.highlightedResult]
      );
      this.reset();
    },
    getResultUrl(result) {
      return `${result.basePath}${result.path}`.replace('//', '/');
    }
  },
  mounted() {
    this.initializeAlgolia();
    this.initializeHotkey();
  },
  watch: {
    query() {
      this.performSearch(this.query.trim().toLowerCase());
    }
  }
};
</script>

<style lang="scss"></style>
