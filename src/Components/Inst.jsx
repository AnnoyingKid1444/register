import "../Styles/Instructions.css"
import { ReactComponent as City } from "../svg/house-svgrepo-com.svg";

export default function Instructions(props) {
    return(
        <div className="inst-container">
        <div className="inst-img"
        style={{
            backgroundColor: props.color
        }}
        >
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 512 512" viewBox="0 0 512 512" id="a"><path d="M405.201,511h77.759L292.803,1h-73.607L29.04,511h77.759l50.45-135.306h197.501L405.201,511z
                 M184.415,302.837L256,110.848l71.585,191.989H184.415z"></path></svg>
        <City/>
        </div>
        <div className="triangle"
        style={{
            borderLeftColor: props.color
        }}>
        </div>
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem quaerat ea consectetur quidem reiciendis laboriosam?
        </p>
    </div>
    )
}