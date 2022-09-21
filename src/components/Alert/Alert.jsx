import { SwalWinLose } from '../SwalWinLose/SwalWinLose'

const Alert = (prop) => {
    return (
        SwalWinLose(prop.lose)
    )
}

export default Alert