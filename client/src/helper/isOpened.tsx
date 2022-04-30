import { useTypeSelector } from "../hooks/useNewSelector";

export default function (): boolean {
    const state = useTypeSelector(state => state.status.isClicked);
    let result = false;

    state.map((prop) => {
        if ((prop.code === 3 && prop.isClick)) {
            result = true;
        }
    })

    return result;

}
