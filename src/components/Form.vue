<script setup>
import { useForm ,Form, Field } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/yup';
import * as yup from 'yup';
import CustomInput from '@/components/CustomInput.vue';
// Creates a typed schema for vee-validate
const schema = toTypedSchema(
  yup.object({
    email: yup.string().required().email(),
    password: yup.string().min(6).required(),
  }),
);



const { errors,handleSubmit, defineComponentBinds } = useForm({
  validationSchema: schema,
  initialValues: {
    email: 'test@example.com',
    password: 'p@$$w0rd',
  },
});

const onSubmit = handleSubmit(values => {
  alert(JSON.stringify(values, null, 2));
});

const email = defineComponentBinds('email', {
  mapProps: state => ({
    error: state.errors[0],
  }),
});
const password = defineComponentBinds('password', {
  mapProps: state => ({
    error: state.errors[0],
  }),
});


const schema2 = {
  email: 'required|email',
  password: 'required|minLength:8',
};

</script>

<template>
     <form @submit="onSubmit">
        <CustomInput  v-bind="email"/>
        <CustomInput v-bind="password" />
        <pre>errors: {{ errors }}</pre>
    </form>
    <!-- 套件組件 -->
    <Form @submit="submit" :validation-schema="schema2" v-slot="{ errors }">
    <Field name="email" />
    <span>{{ errors.email }}</span>
    <Field name="password" type="password" />
    <span>{{ errors.password }}</span>
    <button>Submit</button>
  </Form>

</template>