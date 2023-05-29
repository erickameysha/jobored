import {createStyles} from "@mantine/core";

export const FilterStyle = createStyles((theme) => ({
    card: {
        border: `1px solid #EAEBED`,
        background: `#FFFFFF`,
        borderRadius: `12px`,
        // margin: `20px`
    },
    firstSection: {
        display: "flex",
        justifyContent: 'space-between',
        // paddingBottom: '32px'
    },
    inner: {
        padding: '20px'
    },
    selectSection:{
        width: "275px",
        height:'42px',
        paddingBottom: '16px',
        fontSize:'36px',
        // fontWeight: '700',
        color: '#232134',
        // color:"red"
        fontWeight: 700,
        label:{
            padding: 0,
            border: '1px solid red'
        },
        wrapper:{
            padding: 0
        }
    },
    secondSection:{
        paddingTop: '40px',
        paddingBottom: '20px'
    },
    button:{
        padding:'9.5px 98.5px'
    }
}))