import React, { useState } from 'react';

export default function useTheme(mode) {
    const [active, setactive] = useState("light");

    const theme = {
        light: {
            color: "#404348",
            touch: "silver",
            iconColor: "rgb(147, 0, 0)",
            iconBgc: "#e1e1e1",
            barStyle: "dark-content",
            backgroundColor: "white",
            success: "#3c7a3d",
            error: "#cd5c5c",
            outline: "#8bc23c",
            linkColor: "#2196f3",
            grayed: "#777777",
            stackHeaderBgc: "whitesmoke",
            cardBgc: "white",
            cardGradient: "#a3a3a3",
            listBgc: "white",
            hr: "#dadada",
            fontSize: 12,
            statusBarTextColor: 'dark',

        },
        dark: {
            hr: "#2f2f2f",
            touch: "silver",
            color: "#f5f5f5",
            iconColor: "rgb(147, 0, 0)",
            iconBgc: "#2f2f2f",
            barStyle: "light-content",
            backgroundColor: "#151515",
            success: "#3c7a3d",
            error: "#cd5c5c",
            outline: "#8bc23c",
            linkColor: "#2196f3",
            grayed: "#777777",
            cardBgc: "#292929",
            cardGradient: "#2b2b2b",
            listBgc: "#373737",
            stackHeaderBgc: "#444444",
            fontSize: 12,
            statusBarTextColor: 'light',

        }
    };

    return theme[active];
}
