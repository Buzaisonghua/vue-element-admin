import { defineStore } from 'pinia'

export const useTagsStore = defineStore('tags', {
  state: (): {
    visitedViews: TagsType.Tags[]
  } => ({
    visitedViews: [],
  }),
  getters: {
    getVisitedViews: (state) => state.visitedViews,
  },
  actions: {
    addVisitedViews(route: TagsType.Tags) {
      if (this.visitedViews.some((val) => val.name === route.name)) return
      this.visitedViews.push(route)
    },
  },
})

export default useTagsStore
