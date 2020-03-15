import React, { useState, useEffect } from 'react'

// export default class Home extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             date: new Date()
//         }
//     }

//     componentDidMount() {
//         this.timer = setInterval(
//             () => this.tick(),
//             1000
//         )
//     }

//     componentWillUnmount() {
//         clearInterval(this.timer)
//     }

//     tick() {
//         this.setState({
//             date: new Date()
//         })
//     }

//     render() {
//         return <div>
//             {this.state.date.toLocaleTimeString()}
//         </div>
//     }
// }

function Home(props) {
    const [date, setDate] = useState(new Date())

    useEffect(
        () => {
            const timer = setInterval(() => {
                setDate(new Date())
            }, 1000)

            return () => {
                clearInterval(timer)
            }
        }
    )

    return <div>{date.toLocaleTimeString()}</div>
}

export default Home