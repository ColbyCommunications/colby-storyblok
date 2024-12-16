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
    import { GoogleAuth } from 'google-auth-library';
    import { google } from 'googleapis';
    const google_spreadsheet_id = props.blok.form.content.google_sheets_id;

    const handleSubmit = (event) => {
        const form = event.target;
        const formData = new FormData(form);

        const formValues = [];
        formData.forEach((value, key) => {
            formValues.push({ [key]: value });
        });

        console.log('Google Sheets ID:', props.blok.form.content.google_sheets_id);
        console.log('Collected Form Data:', formValues);

        appendValues(google_spreadsheet_id, 'A2', 'USER_ENTERED', formValues);
    };

    async function appendValues(spreadsheetId, range, valueInputOption, _values) {
        const auth = new GoogleAuth({
            scopes: 'https://www.googleapis.com/auth/spreadsheets',
        });

        const service = google.sheets({ version: 'v4', auth });

        const resource = {
            _values,
        };

        try {
            const result = await service.spreadsheets.values.append({
                spreadsheetId,
                range,
                valueInputOption,
                resource,
            });
            console.log(`${result.data.updates.updatedCells} cells appended.`);
            return result;
        } catch (err) {
            // TODO (developer) - Handle exception
            throw err;
        }
    }
</script>
