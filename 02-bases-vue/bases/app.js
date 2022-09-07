
const app = Vue.createApp({
    // template: `
    // <h1>Hola Mundo</h1>
    // <p>{{Desde app.js}}</p>
    // `

    data(){
        return{
            quote: "I'm Batman",
            author: 'Bruce Wayne'
        }
    },
    methods: {
        changeQuote(){
            console.log('hola mundo')
            this.author = 'Victor Ruiz'
            this.capitalize()
        },
        capitalize(){
            this.quote = this.quote.toUpperCase()
        }
    }


})
app.mount('#myApp')