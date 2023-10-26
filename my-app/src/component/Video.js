import './Video.css';

function Video({title, channel,verified, views, time}){
    
    let Videos = {[]};
    
    
    return (
    <>
    <div className = "container">
    <div className="pic"><img src="https://picsum.photos/200/300?random=1" width='160' height='90' /> </div>

    <div className = "title"> {title}</div>
    <div className = "channel">{channel} {verified && '✔️'}</div>
    <div className = "views">{views}<span>.</span> {time}</div>
    </div>

    
    </>)
}
export  default Video;