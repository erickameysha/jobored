import React from 'react';
import {Button, Card, Select, Text, TextInput} from '@mantine/core'
import {FilterStyle} from "./FilterStyle";

const Filter = () => {
    const {classes} = FilterStyle()
    return (
        <Card className={classes.card}>
            <div className={classes.inner}>
                <Card.Section className={classes.firstSection}>
                    <Text>Фильтры</Text>

                    <Text>
                        Сбросить все
                    </Text>
                </Card.Section>
                <Card.Section>
                    <Select
                        className={classes.selectSection}
                        mt="md"
                        withinPortal
                        data={['React', 'Angular', 'Svelte', 'Vue']}
                        placeholder="Pick one"
                        label="Отрасль"
                        // classNames={classes}
                    />
                </Card.Section>
                <Card.Section className={classes.secondSection}>
                    <Text>Оклад</Text>
                    <TextInput
                        type="number"
                        placeholder="1000"


                    />
                    <TextInput
                        type="number"
                        placeholder="1000"


                    />
                </Card.Section>
                <Card.Section>
                    <Button className={classes.button}>Применить</Button>
                </Card.Section>
            </div>
        </Card>
    );
};

export default Filter;