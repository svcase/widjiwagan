import '../styles/Box.css';

export default function Box({clickFunc, id}) {
    return <button onClick={clickFunc} id={id} className="box"></button>
}