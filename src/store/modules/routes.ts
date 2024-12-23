import { defineStore } from "pinia";
import { getUserRoutes } from "@/api/routes";

const useRoutesStore = defineStore('routes', {
    state: () => ({
        routes: []
    }),
    getters: {
        getRoutes: state => state.routes
    },
    actions: {
        setRoutes(userId: Auth.UserId) {
            getUserRoutes({userId}).then(res => {
                console.log(res)
            })
        }
    }
})

export default useRoutesStore