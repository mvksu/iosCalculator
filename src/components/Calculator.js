import { useState } from 'react'
//import Button from './Button'
import './Calculator.css'

export default function Calculator() {
    const [wynik, setWynik] = useState(0)
    const [first, setFirst] = useState(0)
    const [second, setSecond] = useState(0)
    const [opcja, setOpcja] = useState('normal')
    const [isActive, setActive] = useState(false)


    const numberHandler = (number) => {
        switch (opcja) {
            case 'normal':
                setFirst(first + number + '')
                setWynik(first + number + '')
                break;
            case 'result':
                setFirst(number + '')
                setWynik(number + '')
                setOpcja('normal')
                break;
            default:
                setSecond(second + number + '')
                setWynik(second + number + '')
                setActive(false)
                break;
        }
    }

    const optionHandler = (option) => {
        switch (option) {
            case 'clear':
                setWynik(0)
                setFirst(0)
                setSecond(0)
                setOpcja('normal')
                break;
            case 'percentage':
                setWynik(wynik / 100)
                setFirst(first / 100)
                break;
            case 'reverse':
                setWynik(-wynik)
                setFirst(-first)
                break;
            case 'float':
                if (!wynik.toString().includes('.')) {
                    if (opcja === 'result') {
                        setWynik(0 + '.')
                        setFirst(0 + '.')
                        setOpcja('normal')
                    } else {
                        setWynik(wynik + '.')
                        setFirst(wynik + '.')
                    }
                }
                break;
            case 'dodawanie':
                if (opcja === option) {
                    setFirst(+first + +second)
                    setSecond(0)
                    setWynik(+first + +second)
                } else {
                    optionHandler(opcja)
                    setOpcja('dodawanie')
                }
                break;
            case 'odejmowanie':
                if (opcja === option) {
                    setFirst(+first - +second)
                    setSecond(0)
                    setWynik(+first - +second)
                } else {
                    optionHandler(opcja)
                    setOpcja('odejmowanie')
                }
                break;
            case 'mnozenie':
                if (opcja === option) {
                    setFirst(+first * +second)
                    setSecond(0)
                    setWynik(+first * +second)
                } else {
                    optionHandler(opcja)
                    setOpcja('mnozenie')
                }
                break;
            case 'dzielenie':
                if (opcja === option) {
                    setFirst(+first / +second)
                    setSecond(0)
                    setWynik(+first / +second)
                } else {
                    optionHandler(opcja)
                    setOpcja('dzielenie')
                }
                break;
            case 'result':
                optionHandler(opcja)
                break;

            default:

                break;
        }



    }


    return (
        <div className="d-flex flex-column">
            <h6 className="font-weight-light textRight">opcja {opcja}</h6>
            <h6 className="font-weight-light textRight">first {first}</h6>
            <h6 className="font-weight-light textRight">second {second}</h6>
            <h2 className="font-weight-light textRightWhite">{wynik}</h2>
            <div className="calculatorBox">
                <button className="buttonGrey"
                    onClick={() => optionHandler('clear')}>{first !== 0 || second !== 0 ? 'C' : 'AC'}</button>
                <button className="buttonGrey"
                    onClick={() => optionHandler('reverse')}>+/-</button>
                <button className="buttonGrey"
                    onClick={() => optionHandler('percentage')}>%</button>
                <button className='buttonOrange'
                    onClick={() => optionHandler('dzielenie')}>/</button>

                <button className="buttonDark" onClick={() => numberHandler(7)}>7 </button>
                <button className="buttonDark" onClick={() => numberHandler(8)}>8</button>
                <button className="buttonDark" onClick={() => numberHandler(9)}>9</button>
                <button className='buttonOrange' 
                    onClick={() => optionHandler('mnozenie')} >X</button>

                <button className="buttonDark" onClick={() => numberHandler(4)}>4 </button>
                <button className="buttonDark" onClick={() => numberHandler(5)}>5</button>
                <button className="buttonDark" onClick={() => numberHandler(6)}>6</button>
                <button className='buttonOrange'
                    onClick={() => optionHandler('odejmowanie')}>-</button>

                <button className="buttonDark" onClick={() => numberHandler(1)}>1 </button>
                <button className="buttonDark" onClick={() => numberHandler(2)}>2 </button>
                <button className="buttonDark" onClick={() => numberHandler(3)}>3</button>
                <button className='buttonOrange'
                    onClick={() => optionHandler('dodawanie')}>+</button>

                <button className="double border-0 rounded-pill"
                    onClick={() => numberHandler(0)}>0</button>
                <button className="buttonDark"
                    onClick={() => optionHandler('float')}>,</button>
                <button className="buttonOrange"
                    onClick={() => optionHandler('result')}>=</button>


            </div>
        </div>
    )
}