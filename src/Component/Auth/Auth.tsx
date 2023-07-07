import React from 'react';
import { Group, PasswordInput, Stack, TextInput,Button} from "@mantine/core";

import {useForm} from "@mantine/form";
import {useAppDispatch} from "../../store/store";
import {setTokenTC} from "../../store/auth-reducer";

const Auth = () => {
    const dispatch = useAppDispatch()
    const form = useForm({
        initialValues: {
            email: '',
            // name: '',
            password: '',
            // terms: true,
        },

        validate: {
            email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
            password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
        },
    });

    return (
        <div>
            <form onSubmit={form.onSubmit((values) => {dispatch(setTokenTC(values.email, values.password))})}>
                <Stack>

                    <TextInput
                        required
                        label="Email"
                        placeholder="hello@mantine.dev"
                        value={form.values.email}
                        onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                        error={form.errors.email && 'Invalid email'}
                        radius="md"
                    />

                    <PasswordInput
                        required
                        label="Password"
                        placeholder="Your password"
                        value={form.values.password}
                        onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
                        error={form.errors.password && 'Password should include at least 6 characters'}
                        radius="md"
                    />


                </Stack>
                <Group position="right" mt="md">
                    <Button type="submit">Submit</Button>
                </Group>


            </form>
        </div>
    );
};

export default Auth;