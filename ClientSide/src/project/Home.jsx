import { useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router"
import { NavLink } from "react-router-dom"
import './home.css'

export const Home = () => {
    debugger
    return <>
        <br></br>
        <br></br>
        <br></br>
        <div style={{ width: '70%', marginLeft: '42%', marginTop: '-4%' }}>
            <img src={`${process.env.PUBLIC_URL}/image/home.jpg`} width={'65%'} height={'650px'}></img>
        </div>
        <div style={{ width: '30%', marginRight: '50%', marginLeft: '10%', marginTop: '-40%' }} >
            <h2>tasty ברוכים הבאים ל</h2>
            <br></br>            <br></br>
            <h2>היעד האולטימטיבי שלך למתכונים מעוררי תיאבון </h2>
            <h2>!!והשראה קולינרית</h2>
            <br></br>
            <h2>חקור את מגוון המוצרים הטעים שלנו  </h2>
            <h2>שנוצרו בקפידה ותגלה אוצר של</h2>
            <h2>מנות טעימות שרק מחכות להתבשל</h2>
            <h2>!וליהנות</h2>
            <br></br>
            <h2> מארוחות שבוע מהירות ועד קינוחים מרהיבים</h2>
            <br></br>
            <h2>בואו לבשל יחד משהו בלתי נשכח</h2>
        </div>
   
    </>
}