import { useState } from "react";

export const useNavbarMenu = () => {
    const [visible, setVisibility] = useState(false);

    const toggle = () => setVisibility(!visible);

    return { visible, toggle };
}