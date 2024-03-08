<template>
    <div class="container">
        <h1>Kadaster</h1>

        <div id="kadaster_container">

            <div id="input_container" class="container">
                <div class="input_group">
                    <p>Postcode</p>
                    <input v-model="postcode" placeholder="0000XX">
                </div>

                <div class="input_group">
                    <p>Huisnummer</p>
                    <input v-model="huisnummer" placeholder="0">
                </div>

                <div class="input_group">
                    <p>Huisnummer toevoeging</p>
                    <input v-model="toevoeging" placeholder="A">
                </div>

                <div class="input_group">
                    <button @click="fetchData">Click Me!</button>
                </div>

            </div>

            <div id="result_container" class="container">
                <div class="result_group">
                    <p>Plaats</p>
                    <input v-model="plaats" />
                </div>

                <div class="result_group">
                    <p>Straat</p>
                    <input v-model="straatnaam" />
                </div>

                <div class="result_group">
                    <p>Result</p>
                    <input />
                </div>

                <div class="result_group">
                    <p>Result</p>
                    <input />
                </div>

            </div>

        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            postcode: '5962AG',
            huisnummer: '10',
            toevoeging: '',
            standardUrl: 'http://192.168.56.56/api/testThree',
            requestUrl: '',
            result: null,
            plaats: '',
            straatnaam: ''
        }
    },
    methods: {
        async fetchData() {

            this.requestUrl = this.standardUrl + '?postcode=' + this.postcode + '&huisnummer=' + this.huisnummer;
            console.log(this.requestUrl);
            this.result = await axios.get(this.requestUrl);
            console.log(JSON.parse(JSON.stringify(this.result.data._embedded.adressen[0])));
            this.straatnaam = JSON.parse(JSON.stringify(this.result.data._embedded.adressen[0]['openbareRuimteNaam']))
            // console.log(this.result);
        }
    }
}
</script>

<style scoped>
.container {
    border: solid 3px black;
    width: 540px;
    margin: 10px;
    padding: 10px;
}

#kadaster_container {
    display: flex;
}

.input_container {
    border: 3px solid black;
}

.input_group {
    margin: 5px 0 10px 10px;
}

.result_group {
    margin: 5px 0 10px 10px;
}

.input_group>p {
    /* font-size: 16px;
    font-weight: bolder;
    padding-bottom: 3px; */
}

p {
    font-size: 16px;
    font-weight: bolder;
    padding-bottom: 3px;
}

input {
    border: solid 3px black;
    padding: 3px 5px;
    font-size: 14px;
    font-weight: bolder;
}

.input_group>input {

}
</style>