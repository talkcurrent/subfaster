import { StyleSheet } from 'react-native';

const GlobalStyle = StyleSheet.create({
    container: {
        flex: 1,
        color: "black",
        backgroundColor: "whitesmoke",
    },
    linkColor: {
        color: "#1e8ce3",
    },
    btnPrimary: {
        borderRadius: 5,
        backgroundColor: "rgb(0, 129, 62)",
        text: {
            color: "white",
            fontWeight: '600',
            padding: 8,
        }
    },
    btnPrimaryOutline: {
        backgroundColor: "transparent",
        borderColor: "rgb(0, 129, 62)",
        borderWidth: 1,
        borderRadius: 5,
        text: {
            color: "rgb(0, 129, 62)",
            fontWeight: '600',
            padding: 8,
        }
    },
    btnGrid: {
        flexDirection: "row",
        flexGrow: 1,
        alignContent: "center",
        justifyContent: "center"
    },
    btn: {
        margin: 5,
        // flex: 1,
        flexFlow: "column",
        // alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
    },
    btnText: {
        padding: 8,
        fontWeight: '600',
    },
    shadow: {
        marginBottom: 10,
        width: "97%",
        borderRadius: 10,
        shadowColor: "black",
        // overflow hidden wont make shadow work on ios 
        // overflow: "hidden",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 3,
    },
    bold: {
        fontWeight: '700'
    }
});

export default GlobalStyle;
