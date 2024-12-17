<template>
    <div v-editable="blok" class="flex justify-center p-12">
        <form :name="blok.form.name" method="POST" @submit.prevent="handleSubmit">
            <StoryblokComponent
                v-for="field in blok.form.content.fields"
                :key="field._uid"
                :blok="field"
            />
            <button
                type="submit"
                class="w-full rounded-[8px] bg-indigo px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md"
            >
                Send
            </button>
        </form>
    </div>
</template>

<script setup>
    const props = defineProps({ blok: Object });

    const google_spreadsheet_id = props.blok.form.content.google_sheets_id;
    const BEARER_TOKEN = 'YOUR BEARER TOKEN HERE';

    const handleSubmit = async (event) => {
        const form = event.target;
        const formData = new FormData(form);

        const formValues = [];
        formData.forEach((value, key) => {
            formValues.push(value);
        });

        console.log('Google Sheets ID:', google_spreadsheet_id);
        console.log('Collected Form Data:', formValues);

        await appendValues(google_spreadsheet_id, 'A2', 'USER_ENTERED', formValues);
    };

    const appendValues = async (spreadsheetId, range, valueInputOption, values) => {
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}:append?valueInputOption=${valueInputOption}`;

        const data = {
            values: [values],
        };

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${BEARER_TOKEN}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        console.log('Google Sheets API Response:', result);

        if (response.ok) {
            alert('Data successfully added to Google Sheets');
        } else {
            alert('Error appending data to Google Sheets');
        }
    };
</script>
