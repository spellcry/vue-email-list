const app = new Vue({
    el: '#app',
    data: {
        name: 'Email List',
        emails: [],
        numMaxEmails: 10,
        readyToPrint: false,
    },
    computed: {
        isFull() {
            return this.emails.length === this.numMaxEmails;
        }
    },
    methods: {
        getEmail() {
            for ( let i = 0; i < this.numMaxEmails; i++ ) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {
                    this.emails.push(res.data.response);
                    if ( i === this.numMaxEmails - 1 )
                        this.readyToPrint = true;
                });        
            }
        },
    },
    mounted() {
        this.getEmail();
    }
})