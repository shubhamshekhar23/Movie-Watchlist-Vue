import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "search-filter",
  components: {},
  props: [],
  data() {
    return {
      items: ["All", "Movies", "Tv-Series"],
      mediaSearchInput: "",
      mediaType: "All",
    };
  },
  computed: {
    ...mapGetters("global", ["global", "mediaList"]),
    isMediaListEmpty() {
      return this.mediaList && this.mediaList.length == 0;
    },
  },
  mounted() {
    const INITIAL_SEARCH_TEXT = "2023";
    this.allMediaSearchAction(INITIAL_SEARCH_TEXT);
  },
  methods: {
    ...mapActions("filterSearch", ["allMediaSearchAction", "sortByYearAction"]),
    searchMedia() {
      this.allMediaSearchAction(this.mediaSearchInput);
    },
    sortByYear() {
      if (!this.isMediaListEmpty) {
        this.sortByYearAction(this.mediaList);
      }
    },
  },
};
