'use strict';

{

    let likeComponent = Vue.extend({
        data: function() {
            return {
                count: 0
            }
        },
        template: '<button @click="countUp">like{{count}}</button>',
        methods: {
            countUp: function() {
                this.count++;
            }
        }
    });


    let app = new Vue ({
        el: '#app',
        components: {
            'like-component' : likeComponent
        }
    });

}