import Vue from "vue";
console.log('retfyguhij');
let app = new Vue({
    el: '#home',
    data: {
        names: ['Wisdom', "Ekpot", "Ubongabasi"]
    },
    methods: {
        logSomeThing() {
            return 'Hello Wisdom Ekpot'
        }
    },
    mounted() {
        console.log(this.names);
    },
    created() {
        this.logSomeThing()
    }

})
