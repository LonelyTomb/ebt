<template>
    <div class="uk-card uk-card-default uk-container uk-margin-auto">
        <div class="uk-card-header"></div>
        <div class="uk-card-body">
            <div class="uk-overflow-auto">
                <table class="uk-table uk-table-responsive uk-table-striped uk-table-hover">
                    <thead>
                        <tr>
                            <th></th>
                            <th v-for="(param,key) in questions[0]"> {{key.replace(/_/,' ')}}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(question,key) in questions">
                            <td>{{key}}</td>
                            <td>{{question.question}}</td>
                            <td>{{question.option_a}}</td>
                            <td>{{question.option_b}}</td>
                            <td>{{question.option_c}}</td>
                            <td>{{question.option_d}}</td>
                            <td>{{question.answer}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="uk-card-footer">
            <div class="uk-button uk-button-primary">Save</div>
        </div>
        <div></div>
    </div>
</template>
<script>
    export default {
        name: "Upload-Preview",
        props: {
            questions: Array
        },
        data() {
            return {

            }
        },
        methods: {

        }
    }
</script>
