import "../Styles/Capcha.css"

export default function Capcha() {
    return(
        <div className="capcha">
            <label htmlFor="capcha">Введите ответ примера на картинке</label>
            <input type="text" id="capcha" />
        </div>
    )
}