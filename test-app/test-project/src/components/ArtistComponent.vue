<template>
    <div class="container">
        <h1>Artists</h1>

        <div id="artist_container">

            <div id="input_container" class="container">

                <div class="input_group">
                    <p>ID</p>
                    <input v-model="id" placeholder="0">
                </div>

                <div class="input_group">
                    <button v-if="id != ''" @click="tryFetchData">Click Me!</button>
                </div>

            </div>

            <div id="result_container" class="container">
                <div class="result_group">
                    <p>Name</p>
                    <input v-model="name" placeholder="Name">
                </div>

                <div class="result_group">
                    <p>Followers</p>
                    <input v-model="followers" placeholder="0">
                </div>

                <div class="result_group">
                    <p>Country</p>
                    <input v-model="country" placeholder="NLD">
                </div>

                <div class="result_group">
                    <p>Birthdate</p>
                    <input v-model="birthdate" placeholder="yyyy-MM-dd">
                </div>

            </div>

        </div>

        <p v-if="!isLoading" class="url">{{ requestUrl }}</p>
        <p v-if="this.error != ''" class="url">{{ error }}</p>

    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            id: '',
            name: '',
            followers: '',
            country: '',
            birthdate: '',
            standardUrl: 'http://192.168.56.56/api/artists/',
            result: null,
            error: '',
            isLoading: false
        }
    },
    computed: {
        requestUrl: {
            get() {
                return `${this.standardUrl}${this.id}`
            }
        }
    },
    methods: {
        checkInput() {

        },
        async tryFetchData() {

            this.isLoading = true;
            this.error = '';
            try {
                await this.fetchData();
            } catch (error) {
            }
        },
        async fetchData() {

            axios.get(this.requestUrl)
                .then(response => {
                    console.log(response);
                    this.showData(response.data);
                })
                .catch(error => {
                    this.handleErrors(error.response);
                })
                .finally(() => {
                    this.isLoading = false;
                });
        },
        handleErrors(response) {
            switch (response.status) {
                case 404:
                    this.error = response.data['Status'];
                    break;
            }
        },
        showData(response) {
            this.name = JSON.parse(JSON.stringify(response.data['name']));
            this.followers = JSON.parse(JSON.stringify(response.data['followers']));
            this.country = JSON.parse(JSON.stringify(response.data['country']));
            this.birthdate = JSON.parse(JSON.stringify(response.data['birthdate']));
        }
    }
}
</script>

<style scoped>

#artist_container {
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
    font-size: 16px;
    font-weight: bolder;
    padding-bottom: 3px;
}

#artist_container>p {
    font-size: 16px;
    font-weight: bolder;
    padding-bottom: 3px;
}

.url {
    margin-left: 10px;
}

input {
    border: solid 3px black;
    padding: 3px 5px;
    font-size: 14px;
    font-weight: bolder;
}

/* .input_group>input {} */
</style>