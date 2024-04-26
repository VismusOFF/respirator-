import { useState } from 'react';
import './MainPage.css'

const Request = () => {

    const [data, setData] = useState([])
    const [number, setNumber] = useState("")
    const [date, setDate] = useState("")
    const [text1 ,setText1] = useState("")
    const [text2, setText2] = useState("")

    const handleOnSubmit = (e) => {
        e.preventDefault()
        setData([...data, {number, date, text1, text2}])
    }

    const handleOnClick = (index) => {
        const newData = [...data];
        newData.splice(index, 1);
        setData(newData);
    }

    return (
        <div className='dColumn'>
            <form onSubmit={handleOnSubmit}>
                <label>Добавить заявку</label>
                <input type="number" placeholder='Номер' value={number} onChange={(e) => setNumber(e.target.value)} />
                <input type="date" placeholder='Дата' value={date} onChange={(e) => setDate(e.target.value)} />
                <input type="text" placeholder='Предмет' value={text1} onChange={(e) => setText1(e.target.value)} />
                <input type="text" placeholder='Описание поломки' value={text2} onChange={(e) => setText2(e.target.value)} />
                <input type="submit" />
            </form>

            <ul className='list'>
                {data.map((item, index) => (<li key={index}>
                    №: {item.number} | Дата: {item.date} | Предмет: {item.text1} | Описание поломки: {item.text2}
                    <input type='checkbox'/>
                    <button className='btnDelete' onClick={handleOnClick}>Удалить</button>
                </li>))
                }
            </ul>
        </div>
    )
}

export default Request;