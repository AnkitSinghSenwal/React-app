import './Video.css';

function Video({title, channel, views, time}){
    
    let bg = 'dark';
    
    return (<> 
    <div className="pic"><img src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg" width='160' height='90'/></div>
    <div className = "title"><div className={bg} > {title}</div>
    </div>
    <div className = "channel">{channel}</div>
    <div className = "views">{views}<span>.</span> {time}</div>
    <div className = ""></div>

    
    </>)
}
export  default Video;