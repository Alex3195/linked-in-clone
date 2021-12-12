import { FiberManualRecord, Info } from '@material-ui/icons';
import React from 'react'
import '../styles/Widget.css';
function Widget() {
    const newArticles = (headings, subtitle) => {
        return (
            <div className='widgets_article'>
                <div className='widgets_articleLeft'>
                    <FiberManualRecord />
                </div>
                <div className='widgets_articleRight'>
                    <h4>{headings}</h4>
                    <p>{subtitle}</p>
                </div>
            </div>
        )
    }
    return (
        <div className='widget'>
            <div className='widget_header'>
                <h2>LinkedIn News</h2>
                <Info />
            </div>
            {newArticles("Antony J James", "“In matters of style, swim with the current; in matters of principle, stand like a rock.” —Thomas Jefferson")}
            {newArticles("SAP", "“In matters of style, swim with the current; in matters of principle, stand like a rock.” —Thomas Jefferson")}
            {newArticles("Shanee Moret live", "“In matters of style, swim with the current; in matters of principle, stand like a rock.” —Thomas Jefferson")}
            {newArticles("Steve Nouri's post", "“In matters of style, swim with the current; in matters of principle, stand like a rock.” —Thomas Jefferson")}
            {newArticles("Daily RunDown", "“In matters of style, swim with the current; in matters of principle, stand like a rock.” —Thomas Jefferson")}
            {newArticles("Microsoft", "“In matters of style, swim with the current; in matters of principle, stand like a rock.” —Thomas Jefferson")}
            {newArticles("Tesla", "“In matters of style, swim with the current; in matters of principle, stand like a rock.” —Thomas Jefferson")}
            {newArticles("Apple", "“In matters of style, swim with the current; in matters of principle, stand like a rock.” —Thomas Jefferson")}
            {newArticles("AI News", "“In matters of style, swim with the current; in matters of principle, stand like a rock.” —Thomas Jefferson")}
            {newArticles("Google", "“In matters of style, swim with the current; in matters of principle, stand like a rock.” —Thomas Jefferson")}
        </div>
    )
}

export default Widget;
