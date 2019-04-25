import React, {useState} from 'React';
const Component = () => {
    const [active, setActive] = useState(false);
    return (
        <div>
            {active && <p>I'm active</p>}
            <button onClick={ () => setActive(true) }>Click me</button>
        </div>
    );
}
export default Component;