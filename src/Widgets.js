import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft"><FiberManualRecordIcon/></div>
            <div className="widgets__articleRight"><h4>{heading}</h4><p>{subtitle}</p></div>
        </div>
    )

    return (
        <div className="widgets">
          <div className="widgets__header">
              <h2>LinkedIn News</h2>
              <InfoIcon/>
          </div>
          {newsArticle("MHA extends Covid guidelines till Oct 31: All you need to know", "Covid-19 Containment Measures Extended Till Oct 31, States Told to be Cautious as Festive Season Approaches")}
          {newsArticle("Final 2 league games of IPL 2021 to be played concurrently at 7.30 PM IST", "MI vs PBKS Live, IPL 2021: Bishnoi gets Rohit, Suryakumar in same over")}
          {newsArticle("Smartphone sensors may tell if someone is high on marijuana", "iPhone 13 mini ranks higher than iPhone 12 Pro Max on DxOMark top smartphone cameras list")}
          {newsArticle("Airtel hello tunes 2021", "Purchase @29 Rs through Airtel mobile app at google play store")}
          {newsArticle("LinkedIn News 2021", "LinkedIn testing paid virtual events, will charge users for hosting events")}
          {newsArticle("WhatsApp News 2021", "WhatsApp might soon allow you to link multiple smartphones to your account")}
          {newsArticle("OnePlus Store News 2021", "OnePlus 9 Pro, OnePlus 9 to be available with massive discounts during Great Indian Festival sale")}
        </div>
    )
}

export default Widgets
