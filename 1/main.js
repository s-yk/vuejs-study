var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!',
        list: ['abc', '123', 'あいう'],
        count: 11,
        show: true,
        model: {
            prop1: "プロパティ1",
            prop2: {
                child: 222
            }
        }
    },
    methods: {
        handleClick: function(event) {
            alert(event.target)
        }
    }
})
