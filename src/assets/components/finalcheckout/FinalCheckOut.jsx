import './FinalCheckOut.css'
export default function FinalCheckOut(){


    const username = localStorage.getItem('username')


    return(
        <div className="finalcheckout-container">
            <div className="finalcheck"></div>
            <h1>Thank you {username}, Your Order is on the way!!</h1>
        </div>
    )
}